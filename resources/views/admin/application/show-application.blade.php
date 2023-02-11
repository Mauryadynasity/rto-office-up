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
              Application List</div>
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
            <div class="table-responsive">
              <table class="table table-bordered border-success yajra-datatable" width="100%"></div>
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Scheme Name</th>
                    <th>Owner</th>
                    <th>Application Number</th>
                    <th>Vehical Name</th> 
                    <th>Registration Number</th> 
                    <th>Chassis Number</th> 
                    <th>Engine Number</th> 
                    <th>Fuel Type</th> 
                    <th>Model Name</th> 
                    <th>Color</th> 
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
        ajax: "{{ url('admin/application') }}",
        columns: [
            {data: 'DT_RowIndex', name: 'DT_RowIndex'},
            {data: 'scheme_id', name: 'scheme_id'},
            {data: 'owner_name', name: 'owner_name'},
            {data: 'application_number', name: 'application_number'},
            {data: 'vehical_name', name: 'vehical_name'},
            {data: 'registration_number', name: 'registration_number'},
            {data: 'chassis_number', name: 'chassis_number'},
            {data: 'engine_number', name: 'engine_number'},
            {data: 'fuel_type', name: 'fuel_type'},
            {data: 'model_name', name: 'model_name'},
            {data: 'color', name: 'color'},
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
              url: "{{url('admin/application/')}}/"+id,
              type: "POST",
              data:{
                id : id,
                _method: 'DELETE',
              "_token": "{{ csrf_token() }}",
            },
              success: function(response) {
                swal('Application Deleted successfully.');
                $('.yajra-datatable').DataTable().ajax.reload();
              }
          });
        }
      });
  });

  $('.numbersOnly').keyup(function() {
            this.value = this.value.replace(/[^0-9\.]/g, '');
   });
   $("document").ready(function(){
    setTimeout(function(){
       $("div.alert").remove();
    }, 5000 ); // 5 secs

});
</script>

@endsection
