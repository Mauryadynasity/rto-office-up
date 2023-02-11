<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Admin\District;
use Validator;
use Auth;
use DB;
use Hash;
use Illuminate\Support\Str;
use App\Jobs\TrackingEmailFrequency;

use Spatie\MediaLibrary\Models\Media;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class UserController extends Controller
{
    public function login(Request $request){
    	    return view('user.login');
    }
    public function register(Request $request){
    	    return view('user.register');
    }
    public function dashboard(Request $request){
    	$data['districts'] = District::all();
    	    return view('user.dashboard',$data);
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
		return response()->json($data);
	}


    public function userRegistration(Request $request){
		$validator = Validator::make($request->all(), [
            'vehicle_number' => 'required|unique:users',
            'chassis_number' => 'required',
            'otp' => 'required',
			// 'g-recaptcha-response' => 'required|captcha',
		]);

		if($validator->fails()) {    
			return back()->withInput($request->input())->withErrors($validator);
		}
		if($request->otp!='1234'){
			return back()->with('error','Invalid OTP');
		}

		$user = New User;
		$user->full_name = 'Sunil';
		$user->first_name = 'Sunil';
        $user->last_name = 'Maurya';
		$user->user_name = 'SunilMaurya';
		$user->mobile = '9999999999';
		$user->vehicle_number = $request->vehicle_number;
		$user->chassis_number = $request->chassis_number;
		$user->password = \Hash::make('rto@123');
		$user->status = 'active';
		$user->save();
		return back()->with('success','Register Successful');

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

	public function uploadPhoto(Request $request){
		$userData = Auth::user();
		$user = User::find($userData->id);
		$user->save();
		if($userData->id){
			if($request->photo){
				$user->addMediaFromRequest('photo')->toMediaCollection('photo');
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
}

