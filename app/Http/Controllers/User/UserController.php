<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Application;
use App\Models\Admin\District;
use Validator;
use Auth;
use DB;
use Hash;
use Illuminate\Support\Str;
use App\Jobs\TrackingEmailFrequency;

use Spatie\MediaLibrary\Models\Media;
use Illuminate\Support\Facades\Auth as FacadesAuth;

use App\Http\Traits\SmsTrait;

class UserController extends Controller
{
    use SmsTrait;
    public function login(Request $request){
    	    return view('user.login');
    }
    public function register(Request $request){
    	    return view('user.register');
    }
    public function dashboard(Request $request){
    	$districts = District::all();
    	$application = Application::where('user_id',Auth::user()->id)->orderBy('id','DESC')->first();
		return view('user.dashboard',compact('districts','application'));
    }
    public function status(Request $request){
    	    return view('user.status');
    }
    public function forgotPassword(Request $request){
    	    return view('user.forgot-password');
    }

    public function sendPassword(Request $request){
		$request->validate([
            'email' => 'required|email',
        ]);

		$user = User::whereEmail($request->email)->first();
		$token = sha1(time());
		if($user) {
			$user->remember_token = $token;
			$user->save();
			$sendEmail['link']= url('forgot-password-change').'?token='.$token;
			$sendEmail['email'] = $request->email;
			$sendEmail['firstname'] = $user->full_name;
			$sendEmail['password'] = Str::random(5);
			dispatch((new TrackingEmailFrequency($sendEmail,'forgot_password'))->onQueue('high'));
			return back()->with('success','Your New Password has been sent on your email ID. Please check your email');
		}else{
			return back()->with('error','Invalid Email ID. Please register first');
		}
		return response()->json($user);
	}


    public function userRegistration(Request $request){
		$validator = Validator::make($request->all(), [
            'vehicle_number' => 'required|unique:users',
            'chassis_number' => 'required',
            'otp' => 'required',
			// 'g-recaptcha-response' => 'required|captcha',
		]);

		if($validator->fails()) {
            $error = $validator->errors()->first();
            return response()->json(['message' => $error, 'status' => false]);
			// return response()->json($validator->messages(), 200);
		}

        $otp_details = $request->session()->get('otp_details');
		if(count($otp_details)==0){
			return response()->json(['message' => 'Please Send OTP', 'status' => false]);
		}
		if($otp_details['otp']!=$request->otp){
			return response()->json(['message' => 'Invalid OTP', 'status' => false]);
		}

		$password_text = 'rto@123';
		$mobile  = '7275638862';
        $mobile_four = substr($mobile,-4,4);
		$otpMessage = "You have registered successfully.\n First time password is ".$password_text;
		$registerMessage = "You have registered successfully. First time password is sent on your registered mobile number ******".$mobile_four;
        $otpStatus = $this->otpSendFun($mobile,$otpMessage);
		$password = \Hash::make($password_text);

		$user = New User;
		$user->full_name = 'Sunil';
		$user->mobile = $mobile;
		$user->vehicle_number = $request->vehicle_number;
		$user->chassis_number = $request->chassis_number;
		$user->password = $password;
		$user->status = 'inactive';
		$user->save();
		return response()->json(['message' => $registerMessage, 'status' => true]);
	}

	public function enqueryLogin(Request $request){
		$validator = Validator::make($request->all(), [
            'vehicle_number' => 'required',
            'otp' => 'required',
            'password' => 'required'
		]);
		if ($validator->fails()) {    
			return back()->withInput($request->input())->withErrors($validator);
		}
		if($request->otp!='1234'){
			return back()->with('error','Invalid OTP');
		}

		if (\Auth::attempt($request->only('vehicle_number','password'))) {
				return redirect('dashboard')->with('success','Logged In successfully.');
        } else {
            return back()->with('error','Bad Cridentials');
        }
	}

	public function enqueryLoginOtp(Request $request){
		if($request->otp){
			$validator = Validator::make($request->all(), [
				'vehicle_number' => 'required',
				'otp' => 'required',
			]);
		}elseif($request->password){
			$validator = Validator::make($request->all(), [
				'vehicle_number' => 'required',
				'password' => 'required',
			]);
		}else{
			$validator = Validator::make($request->all(), [
				'otp_or_password' => 'required',
			]);
		}

		if($validator->fails()) {
            $error = $validator->errors()->first();
            return response()->json(['message' => $error, 'status' => false]);
		}

        $user = User::where('vehicle_number',$request->vehicle_number)->first();
        if(!$user){
            return response()->json(['message' => 'Please Register First', 'status' => false]);
        }
		if($request->otp){
			if($user->otp != $request->otp){
				return response()->json(['message' => 'Invalid OTP', 'status' => false]);
			}
			$user->otp = null;
			$user->save();
			Auth::loginUsingId($user->id);
			return response()->json(['message' => 'Login Successful', 'status' => true]);
		}
		if($request->password){
			$userdata = array(
				'email' => $user->email,
				'password' => $request->password
			);
			if (Auth::attempt($userdata)){
				return response()->json(['message' => 'Login Successful', 'status' => true]);
			}
			else{
				return response()->json(['message' => 'Wrong Password', 'status' => false]);
			}
		}
	}
	
	public function uploadPhoto(Request $request){
		$userData = Auth::user();
		$user = User::find($userData->id);
		$user->save();
		if($userData->id){
			if($request->photo){
				$user->addMediaFromRequest('photo')->toMediaCollection('photo');
			}
			if($request->signature){
				$user->addMediaFromRequest('signature')->toMediaCollection('signature');
			}
		}
		return back()->with('success','Uploaded Successfully.');
	}
	public function updateProfile(Request $request){
		// dd($request->all());
		if($request->submit_button==true){
		$user_data = Auth::user();
			User::where('id',$user_data->id)->update([
					'full_name' => Auth::user()->full_name,
					'email' => $request->email,
					'mobile' => $request->mobile,
					'vehicle_number' => $request->vehicle_number,
					'chassis_number' => $request->chassis_number,
					'district' => $request->district_id,
				]);
		}
		return redirect('bank-detail')->with('success','Successfully Updated.');
	}

	public function logout(Request $request)
	{
	    Auth::logout();
	    $request->session()->invalidate();
	    $request->session()->regenerateToken();
	    return redirect('login');
	}

	public function changePassword(Request $request){
		return view('user.change-password');
	}
	public function changePasswordSave(Request $request){
		$request->validate([
            'old_password' => 'required',
            'new_password' => 'required|confirmed',
        ]);

		#Match The Old Password
        if(!Hash::check($request->old_password, auth()->user()->password)){
            return back()->with("error", "Old Password Doesn't match!");
        }
        #Update the new Password
        User::whereId(auth()->user()->id)->update([
            'status' => 'active',
            'password' => Hash::make($request->new_password)
        ]);
        return redirect('dashboard')->with("success", "Password changed successfully!");
}

}

