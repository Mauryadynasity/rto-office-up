<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Admin;
use App\Models\UserList;
use App\Models\Admin\District;
use Illuminate\Http\Request;
use Validator;
use Auth;
use DB;
use Hash;
use DataTables;
class UserController extends Controller {

	public function __construct() {

		// $this->middleware('auth:admin');
	}
	// Function for admin dashboard
	public function dashboard() {
		$data['admin'] = Auth::guard('admin');
			return view('admin.dashboard')->with($data);
	}

	public function index(Request $request) {
			$data['districts'] = District::all();
		if ($request->ajax()) {
			$admin = Admin::with('District')->where('status','active')->get();
        return Datatables::of($admin)->addIndexColumn()
            ->editColumn('mobile_number', function($row){
              return $row->country_code.' '.$row->mobile_number;
            })
            ->editColumn('created_at', function($row){ 
              return date('d,M,Y',strtotime($row->created_at));
            })
            ->editColumn('email_linkExp', function($row){
              return date('d,M,Y',strtotime($row->email_linkExp));
            })
            ->editColumn('phone_otpExp', function($row){
              return date('d,M,Y',strtotime($row->phone_otpExp));
            })
            ->editColumn('status', function($row){
              return $row->status;
            })
            ->addColumn('action', function($row){
                $actionBtn = '<a href="'.url("admin/user/".base64_encode($row->id)).'" class="edit btn btn-success btn-sm">Edit</a>
                 <a href="javascript:void(0)" id="'.$row->id.'"  class="delete btn btn-danger btn-sm">Delete</a>
                 ';
                return $actionBtn;
            })
            ->rawColumns(['action'])
            ->make(true);
    }
				return view('admin.user.user_show',$data);
	}

	public function create(Request $request){
			return view('admin.user.user_add');
	}

	public function store(Request $request){
		// dd($request->all());
		$request->validate([
            // 'owner_name' => 'required',
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'role' => 'required',
        ]);
		$request->request->add([
			'password' => $request->password,
			// 'profile_image' => UplaodImages($request->profile_img, 'profile_image'),
		]);
		$data = Admin::create($request->except(['profile_img']));
		return;
		 // return redirect()->route('user.index')->with('message','User Added Successfully.');
	}

	public function show($id){
		$data['users']=Admin::where('id',base64_decode($id))->first();
			return view('admin.user.user_edit', $data);
	}
	public function update(Request $request,$id){
		if($request->profile_img){
			// $request->request->add([
			// 		'profile_image' => UplaodImages($request->profile_img, 'profile_image'),
			// 	]);
		}
		$user=Admin::where(['id'=>$id])->update($request->except('profile_img','_token','_method','document_status'));
		 return redirect()->route('user.index')->with('message','User Updated Successfully.');
	}

	public function destroy($id){
		Admin::where(['id'=>$id])->delete();
	}

}

?>