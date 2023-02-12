<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Auth;
use DB;
use Session;
use Illuminate\Support\Str;
use App\Jobs\TrackingEmailFrequency;

use Spatie\MediaLibrary\Models\Media;
use Illuminate\Support\Facades\Auth as FacadesAuth;
use App\Http\Traits\SmsTrait;

class OtpController extends Controller
{
    use SmsTrait;
    public function otpSend(Request $request){
        $mobile = '7275638862';
        $mobile_four = substr($mobile,-4,4);
        $otp = rand(11111,999999);
        $otp = '12345';
        $otpMessage = 'Your OTP is '.$otp;
        $otpStatus = $this->otpSendFun($mobile,$otpMessage);
        if(!$otpStatus){
            // return response()->json(['message' => 'Unable to send OTP', 'status' => false]);
        }
        $otp_details = [
            'mobile' => $mobile,
            'otp' => $otp,
        ];
        $request->session()->put('otp_details', $otp_details);
        $request->session()->save();
        return response()->json(['message' => 'OTP sent successfully on your registered mobile number ******'.$mobile_four, 'status' => true]);
    }
    public function otpSendLogin(Request $request){
        $user = User::where('vehicle_number',$request->vehicle_number)->first();
        if(!$user){
            return response()->json(['message' => 'Please Register First', 'status' => false]);
        }
        $mobile = $user->mobile;
        $mobile = '7275638862';
        $mobile_four = substr($mobile,-4,4);
        $otp = rand(11111,999999);
        $otp = '12345';
        $otpMessage = 'Your OTP is '.$otp;
        $otpStatus = $this->otpSendFun($mobile,$otpMessage);
        if(!$otpStatus){
            // return response()->json(['message' => 'Unable to send OTP', 'status' => false]);
        }
        $user->otp = $otp;
        $user->save();
        return response()->json(['message' => 'OTP sent successfully on your registered mobile number ******'.$mobile_four, 'status' => true]);
    }


    
}

