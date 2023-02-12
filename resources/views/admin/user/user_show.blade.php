@extends('layouts.admin.adminDashboard')
@section('pageContent')
<style>
  .user-list-field {
    white-space: nowrap;
  }
  .breadcrumb {
    min-height: 62px;
}
</style>
<div class="content-wrapper"> 
<!-- /.container-fluid -->
<div class="container-fluid">
  {{-- DataTables Example --}}
        <div class="card mb-3"> 
          <div class="card-header">
            <div class="row breadcrumb">
             <div class="col-lg-9 col-md-6">
              Create Admin Types</div>
            <!-- <div class="col-lg-3 col-md-6">
            <span class="" style="position: absolute;right:3%;"><a href="{{url('/admin/user/create')}}" class="text-decoration-none btn btn-default" style="color: #007bff;">Add User</a></span>
            <a href="" target="_blank" title="Excel" class="btn btn-default"> Export Users </a>
            </div> -->
           </div>
          </div>
          <div class="card-body">
            <div class="form-row">
              <div class="col-md-12">
                @if(session()->has('message'))
                  <div class="alert alert-success">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                {{ session()->get('message') }}
                  </div>
                @endif
                @if(session()->has('fail'))
                  <div class="alert alert-danger">
                {{ session()->get('fail') }}
                  </div>
                @endif
              </div>
          </div>
                   <div class="card-body">
            <form action="{{route('user.store')}}" id="myform_application" method="POST" enctype="multipart/form-data">
            <!-- <form id="myform_application"> -->
               {{csrf_field()}}
               
              <div class="row">
                <div class="col-md-3">
                  <label for="exampleInputName1">Name</label>
                  <input type="text" class="form-control" id="name" name="name" value="{{ old('name') }}" placeholder="enter name">
                @if($errors->has('name'))
                    <span class="text-danger">{{ $errors->first('name') }}</span>
                @endif
                </div>
                <div class="col-md-3">
                  <label for="exampleInputName1">Email</label>
                     <input type="email" id="email" name="email" class="form-control" value="{{ old('email') }}" placeholder="enter email">
                @if($errors->has('email'))
                    <span class="text-danger">{{ $errors->first('email') }}</span>
                @endif
                </div>
                <div class="col-md-3" hidden>
                  <label for="exampleInputName1">Mobile</label>
                     <input type="text" id="mobile" name="mobile" class="form-control" value="{{ old('mobile') }}" placeholder="enter mobile">
                @if($errors->has('mobile'))
                    <span class="text-danger">{{ $errors->first('mobile') }}</span>
                @endif
                </div>
                <div class="col-md-3">
                  <label for="exampleInputName1">Password</label>
                     <input type="text" id="password" name="password" class="form-control" value="{{ old('password') }}" placeholder="enter password">
                @if($errors->has('password'))
                    <span class="text-danger">{{ $errors->first('password') }}</span>
                @endif
                </div>
                <div class="col-md-3">
                  <label for="exampleInputName1">Status</label>
                      <select id="status" name="status" class="form-control">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                @if($errors->has('status'))
                    <span class="text-danger">{{ $errors->first('status') }}</span>
                @endif
                </div>
                <div class="col-md-3">
                  <label for="exampleInputName1">Admin Type</label>
                      <select id="role" name="role" class="form-control" required>
                        <option value="">--Select Type--</option>
                        <option value="1">Admin</option>
                        <option value="2">RTO</option>
                        <option value="3">HO</option>
                      </select>
                @if($errors->has('role'))
                    <span class="text-danger">{{ $errors->first('role') }}</span>
                @endif
                </div>
                <div class="col-md-3 districts">
                  <label for="exampleInputName1">Districts</label>
                      <select id="districts" name="district" class="form-control">
                        <option value="">--Select District--</option>
                        @foreach($districts as $index => $district)
                        <option value="{{$district->id}}">{{$district->name}}</option>
                        @endforeach
                      </select>
                @if($errors->has('status'))
                    <span class="text-danger">{{ $errors->first('status') }}</span>
                @endif
                </div>
                <div class="col-md-1" style="margin-top: 10px;">
                  <label for="exampleInputName1"></label>
                      <button type="button" class="btn btn-success form-control form_save">Add</button> 
                </div>
                <div class="col-md-1" style="margin-top: 10px;">
                  <label for="exampleInputName1"></label>
                     <a class="form-control btn btn-primary" href="{{url('admin/user')}}">Back </a>
                </div>
               <!--  <div class="col-md-3">
                  <label for="exampleInputName1">sdfd</label>
                      <button class="btn btn-primary"><b>Add User</b></button> 
                </div>
                <div class="col-md-3">
                  <label for="exampleInputName1">dfs</label>
                     <a class="text-decoration-none btn btn-primary" href="{{url('admin/user')}}"><b>Back</b> </a>
                </div> -->
            </form>
         </div><br>
            <div class="table-responsive">
              <table class="table table-bordered border-success yajra-datatable" width="100%"></div>
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role<p>1=Admin, 2=RTO, 3=HO</p></th> 
                    <th>District</th> 
                    <th>Status</th> 
                   <th ><center>Action</center></th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


<!-- <script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script> -->
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.25/datatables.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.25/datatables.min.css"/>
<script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.2/summernote.js"></script>
<script src="javascript/common.js" type="text/javascript"></script>

<script type="text/javascript" charset="utf-8" async defer>
   $(function () {
    
    var table = $('.yajra-datatable').DataTable({
        processing: true,
        serverSide: true,
        ajax: "{{ url('admin/user') }}",
        columns: [
            {data: 'DT_RowIndex', name: 'DT_RowIndex'},
            {data: 'name', name: 'name'},
            {data: 'email', name: 'email'},
            {data: 'role', name: 'role'},
            {data: 'district.name', name: 'Name'},
            {data: 'status', name: 'status'},
            {
                data: 'action', 
                name: 'action', 
                orderable: true, 
                searchable: true
            },
        ]
    });
    
  });
   
  

  $(document).on('click','.delete',function($q){
    var id = $(this).attr('id');

    swal("Are you sure want to delete?", {
        buttons: ["No", "Yes"],
         })
    .then((value) => {
        if (value) {
          $.ajax({
              url: "{{url('admin/user/')}}/"+id,
              type: "POST",
              data:{
                id : id,
                _method: 'DELETE',
              "_token": "{{ csrf_token() }}",
            },
              success: function(response) {
                swal('User Deleted successfully.');
                $('.yajra-datatable').DataTable().ajax.reload();
              }
          });
        }
      });
  });

  $('.form_save').click(function(){

       var name = $('#name').val();
       var email = $('#email').val();
       var password = $('#password').val();
       var role = $('#role').val();
       var district_id = $('#districts').val();
       var status = $('#status').val();
       var formData = {
        name: name,
        email: email,
        password: password,
        role: role,
        district_id: district_id,
        status: status,
        "_token": "{{ csrf_token() }}"
      };
       $.ajax({
           type: "POST",
           url: "{{route('user.store')}}",
           data:formData,
           success: function(response) {
                swal('User Added successfully.');
                $('.yajra-datatable').DataTable().ajax.reload();
                 $('#name').val(" ");
                 $('#email').val(" ");
                 $('#mobile').val(" ");
                 $('#password').val(" ");
                 $('#role').val(" ");
              }

           
       });
   });

  // $('.numbersOnly').keyup(function() {
  //           this.value = this.value.replace(/[^0-9\.]/g, '');
  //  });
   $("document").ready(function(){
    setTimeout(function(){
       $("div.alert").remove();
    }, 5000 ); // 5 secs

});
</script>
<script type="text/javascript">
  $("document").ready(function(){
        $(".districts").hide();
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
