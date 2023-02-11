<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\LoginRequest;;
use Illuminate\Http\Request;
use App\Http\Requests\Users\ChangePassRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller {

	// Function for admin login
	public function login(Request $request){
	
        $credentials = $request->only('email', 'password');
		if (Auth::guard('admin')->attempt($credentials)) {
			return redirect('admin/dashboard');
		}else {
			return redirect()->back()->with('fail', 'Please provide valid email and password !');
		}
	}
	// Function for admin logout
	public function logout(Request $request) {
		Auth::guard('admin')->logout();
		return redirect('/admin');
	}
	// Function for change password
	public function changePassword(Request $request) {
		return view('admin.change_password');
	}
	// Function for change password save
   public function changePasswordSave(ChangePassRequest $request){
    $admin = User::where(['email' => Auth::guard('admin')->user()->email])->first();
       $data = array(
        'password'=> \Hash::make($request->new_pass),
       );
        if($admin){
            User::where('email', $admin->email)->update($data);
           return redirect()->back()->with('message', 'Password changed successfully.');
        }
    }

}
