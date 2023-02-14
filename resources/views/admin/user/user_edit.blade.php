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
          <div class="col-md-9">Edit User</div>
        </div>
      </div>
      <div class="card-body">
        <form action="{{route('user.update',$users->id)}}" method="POST" enctype="multipart/form-data">
           @csrf  
           @method('PATCH')
          <div class="form-row ">
            <div class="col-md-2">
              <b>Name</b>
            </div>
            <div class="col-md-4">
              <input type="text" name="name" value='{{old("name",$users->name)}}' class="form-control"> <span class="text-danger"></span> 
            </div>
          </div>
          <br>
          <div class="form-row ">
            <div class="col-md-2">
              <b>Email</b>
            </div>
            <div class="col-md-4">
              <input type="email" name="email" value='{{old("email",$users->email)}}' class="form-control"> <span class="text-danger"></span> 
            </div>
          </div>
          <br>
          <div class="form-row ">
            <div class="col-md-2">
              <b>Role</b>
            </div>
            <div class="col-md-4">
                      <select id="role" name="role" class="form-control" required>
                        <option value="">--Select Type--</option>
                        <option value="{{$users->role}}"{{$users->role=='1' ? 'selected': ''}}>Admin</option>
                        <option value="{{$users->role}}" {{$users->role=='2' ? 'selected': ''}}>RTO</option>
                        <option value="{{$users->role}}" {{$users->role=='3' ? 'selected': ''}}>HO</option>
                      </select>
                @if($errors->has('role'))
                    <span class="text-danger">{{ $errors->first('role') }}</span>
                @endif
              <!-- <input type="text" name="role" value='{{old("role",$users->role)}}' class="form-control"> <span class="text-danger"></span>  -->
            </div>
          </div>
          <br>
          <div class="form-row districts">
            <div class="col-md-2">
              <b>Districts</b>
            </div>
            <div class="col-md-4">
                      <select id="districts" name="district_id" class="form-control" required>
                        <option value="">--Select District--</option>
                        @foreach($districts as $index => $district)
                        <option value="{{$district->id}}" {{$users->district_id==$district->id ? 'selected': ''}}>{{$district->name}}</option>
                        @endforeach
                      </select>
                @if($errors->has('role'))
                    <span class="text-danger">{{ $errors->first('role') }}</span>
                @endif
              <!-- <input type="text" name="role" value='{{old("role",$users->role)}}' class="form-control"> <span class="text-danger"></span>  -->
            </div>
          </div>
          <br>

          <div class="form-row" id="doc_status">
              <div class="col-md-2">
                <b>Status </b>
              </div>
              <div class="col-md-4">
                <select name="status" class="form-control">
                <option value="active" {{$users->status=='active' ? 'selected': ''}}>Active</option> 
               <option value="inactive" {{$users->status =='inactive' ? 'selected': ''}} >Inactive</option> 
                </select>
              </div>
          </div><br>
          
          <div class="form-row">
            <div class="col-md-2"></div>
            <div class="col-md-3">
              <button class="btn btn-primary">
                <b>Update</b>
              </button>
            </div>
            <div class="col-md-1">
              <a class="text-decoration-none btn btn-primary" href="{{url('admin/user')}}">
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
  <script>
    $("document").ready(function(){
        // $(".districts").hide();
         var type = ($('option:selected', $(this)).text());
             if(type == 'RTO'){
              $(".districts").show();
            }
        $("#role").change(function() {
             var type = ($('option:selected', $(this)).text());
             if(type == 'RTO'){
              $(".districts").show();
             }else{
              $(".districts").hide();
             }
        });
        $("#districts").change(function() {
          var district = $(this).val();
          $('#email').val('RTO'+district+'@gmail.com');
        });
  });
  </script>
   @endsection