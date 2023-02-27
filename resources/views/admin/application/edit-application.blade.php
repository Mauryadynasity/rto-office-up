@extends('layouts.admin.adminDashboard') @section('pageContent') <style>
  .container-fluid .select2-container--default .select2-selection--single {
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 4px;
  }

  .container-fluid .select2-container .select2-selection--single {
    height: 37px;
  }

  .container-fluid .select2-container--default .select2-selection--single .select2-selection__arrow {
    top: 5px;
  }

  .select2-selection__choice {
    color: #000;
  }
</style>
<div class="content-wrapper">
  <!-- /.container-fluid -->
  <div class="container-fluid">
    <div class="card mb-3">
      <div class="card-header">
        <div class="row breadcrumb">
          <div class="col-md-9">Edit Application</div>
        </div>
      </div>
      <div class="card-body">
        <form action="{{route('application.update',$users->id)}}" method="POST" enctype="multipart/form-data">
           @csrf  
           @method('PATCH')
          <div class="form-row ">
            <div class="col-md-2">
              <b>Owner</b>
            </div>
            <div class="col-md-4">
              <input type="text" name="scheme_id" value='{{old("scheme_id",$users->scheme_id)}}' class="form-control" readonly disabled="disbled"> <span class="text-danger"></span> 
            </div>
          </div>
          <br>
          <div class="form-row ">
            <div class="col-md-2">
              <b>Scheme Name</b>
            </div>
            <div class="col-md-4">
              <input type="text" name="owner_name" value='{{old("owner_name",$users->owner_name)}}' class="form-control" readonly disabled="disbled"> <span class="text-danger"></span> 
            </div>
          </div>
          <br>
          <div class="form-row ">
            <div class="col-md-2">
              <b>Application Number</b>
            </div>
            <div class="col-md-4">
              <input type="text" name="application_number" value='{{old("application_number",$users->application_number)}}' class="form-control" readonly disabled="disbled"> <span class="text-danger"></span> 
            </div>
          </div>
          <br>
          <div class="form-row ">
            <div class="col-md-2">
              <b>Vehical Name</b>
            </div>
            <div class="col-md-4">
              <input type="text" name="vehical_name" value='{{old("vehical_name",$users->vehical_name)}}' class="form-control" readonly disabled="disbled"> <span class="text-danger"></span> 
            </div>
          </div>
          <br>
          <div class="form-row ">
            <div class="col-md-2">
              <b>Registration Number</b>
            </div>
            <div class="col-md-4">
              <input type="text" name="registration_number" value='{{old("registration_number",$users->registration_number)}}' class="form-control" readonly disabled="disbled"> <span class="text-danger"></span> 
            </div>
          </div>
          <br>
          <div class="form-row ">
            <div class="col-md-2">
              <b>Chassis Number</b>
            </div>
            <div class="col-md-4">
              <input type="text" name="chassis_number" value='{{old("chassis_number",$users->chassis_number)}}' class="form-control" readonly disabled="disbled"> <span class="text-danger"></span> 
            </div>
          </div>
          <br>
          <div class="form-row ">
            <div class="col-md-2">
              <b>Engine Number</b>
            </div>
            <div class="col-md-4">
              <input type="text" name="engine_number" value='{{old("engine_number",$users->engine_number)}}' class="form-control" readonly disabled="disbled"> <span class="text-danger"></span> 
            </div>
          </div>
          <br>
          <div class="form-row ">
            <div class="col-md-2">
              <b>Fuel Type</b>
            </div>
            <div class="col-md-4">
              <input type="text" name="fuel_type" value='{{old("fuel_type",$users->fuel_type)}}' class="form-control" readonly disabled="disbled"> <span class="text-danger"></span> 
            </div>
          </div>
          <br>
          <div class="form-row ">
            <div class="col-md-2">
              <b>Model Name</b>
            </div>
            <div class="col-md-4">
              <input type="text" name="model_name" value='{{old("model_name",$users->model_name)}}' class="form-control" readonly disabled="disbled"> <span class="text-danger"></span> 
            </div>
          </div>
          <br>
          <div class="form-row ">
            <div class="col-md-2">
              <b>Color</b>
            </div>
            <div class="col-md-4">
              <input type="text" name="color" value='{{old("color",$users->color)}}' class="form-control" readonly disabled="disbled"> <span class="text-danger"></span> 
            </div>
          </div>
          <br>
          @if(Auth::guard('admin')->user()->role==1 || Auth::guard('admin')->user()->role==2)
          <div class="form-row" id="doc_status">
              <div class="col-md-2">
                <b>Status </b>
              </div>
              <div class="col-md-4">
                <select name="rto_status" id="change-status" class="form-control">
               <option value="">---Select---</option> 
               @foreach($statusMaster as $status)
               <option value="{{$status->id}}">{{$status->status_name}}</option> 
               <!-- <option value="approved" {{$users->status =='approved' ? 'selected': ''}} >approved</option>  -->
               @endforeach
                </select>
              </div>
          </div><br>
          @elseif(Auth::guard('admin')->user()->role==3)
          <div class="form-row" id="doc_status">
              <div class="col-md-2">
                <b>Status </b>
              </div>
              <div class="col-md-4">
                <select name="ho1_status" id="change-status" class="form-control">
               <option value="">---Select---</option> 
               @foreach($statusMaster as $status)
               <option value="{{$status->id}}">{{$status->status_name}}</option> 
               <!-- <option value="approved" {{$users->status =='approved' ? 'selected': ''}} >approved</option>  -->
               @endforeach
                </select>
              </div>
          </div><br>
          @elseif(Auth::guard('admin')->user()->role==4)
          <div class="form-row" id="doc_status">
              <div class="col-md-2">
                <b>Status </b>
              </div>
              <div class="col-md-4">
                <select name="ho2_status" id="change-status" class="form-control">
               <option value="">---Select---</option> 
               @foreach($statusMaster as $status)
               <option value="{{$status->id}}">{{$status->status_name}}</option> 
               <!-- <option value="approved" {{$users->status =='approved' ? 'selected': ''}} >approved</option>  -->
               @endforeach
                </select>
              </div>
          </div><br>
          @endif

          <div class="form-row" id="uploadfile">
              <div class="col-md-2">
                <b>Reason for Rejection </b>
              </div>
              <div class="col-md-4">
                <input type="file" class="form-control" name="upload_file">
              </div>
          </div><br>
          
          <div class="form-row">
            <div class="col-md-2"></div>
            <div class="col-md-3">
              <button class="btn btn-primary">
                <b>Update Status</b>
              </button>
            </div>
            <div class="col-md-1">
              <a class="text-decoration-none btn btn-primary" href="{{url('admin/application')}}">
                <b>Back</b>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="modal fade" id="edit">
    <div class="modal-dialog">
      <span class="close">&times;</span>
      <img class="modal-content" id="img01">
    </div>
  </div>
<script type="text/javascript">
  $("document").ready(function(){
        $("#uploadfile").hide();
        $("#change-status").change(function() {
             var status = ($('option:selected', $(this)).text());
             if(status == 'rejected'){
              $("#uploadfile").show();
             }else{
              $("#uploadfile").hide();
             }
        });
  });
</script>
   @endsection