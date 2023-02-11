<?php

namespace App\Http\Controllers\User\Application;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Application;
use Validator;
use Auth;
use DB;
use Hash;

use Spatie\MediaLibrary\Models\Media;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class ApplicationController extends Controller
{
    public function applicationForm(Request $request){
        $data['applications'] = Application::where('user_id',Auth::user()->id)->get();
    	    return view('user.Application.application-form',$data);
    }
    public function saveApplicationForm(Request $request){
        // dd($request->all());
    	$request->validate([
            // 'owner_name' => 'required',
            'application_number' => 'required',
            'vehical_name' => 'required',
            'registration_number' => 'required',
            'chassis_number' => 'required',
            'engine_number' => 'required',
            'fuel_type' => 'required',
            'model_name' => 'required',
            'color' => 'required',
        ]);
		$data = Application::create([
				'user_id' => $request->user_id,
				'scheme_id' => $request->scheme_id,
                'owner_name' => Auth::user()->full_name,
                'application_number' => $request->application_number,
                'vehical_name' => $request->vehical_name,
                'registration_number' => $request->registration_number,
                'chassis_number' => $request->chassis_number,
                'engine_number' => $request->engine_number,
                'fuel_type' => $request->fuel_type,
                'model_name' => $request->model_name,
                'color' => $request->color,
				'status' => 'pending'
		]);
        return redirect(url('application-form'))->with('success','Application added succesfully');
	}
}

