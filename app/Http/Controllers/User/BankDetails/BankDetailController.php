<?php

namespace App\Http\Controllers\User\BankDetails;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\BankDetails;
use Validator;
use Auth;
use DB;
use Hash;

use Spatie\MediaLibrary\Models\Media;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class BankDetailController extends Controller
{
    public function bankDetailForm(Request $request){
    	$data['bankdetails'] = BankDetails::where('user_id',Auth::user()->id)->orderBy('id','DESC')->first();
    	    return view('user.BankDetails.bank-details',$data);
    }
    public function saveBankDetails(Request $request){
    	$request->validate([
            'bank_name' => 'required',
            'district_name' => 'required',
            'ifsc_code' => 'required',
            'branch_name' => 'required',
            'account_number' => 'required',
            'branch_address' => 'required',
        ]);
			$data = BankDetails::updateOrCreate([
					'user_id' => $request->user_id,
					'bank_name' => $request->bank_name,
					'district_name' => $request->district_name,
					'ifsc_code' => $request->ifsc_code,
					'branch_name' => $request->branch_name,
					'account_number' => $request->account_number,
					'branch_address' => $request->branch_address,
					'status' => 'pending'
				]);
        return redirect('application-form')->with('success','Bank details added succesfully, please fill application form');
	}
}

