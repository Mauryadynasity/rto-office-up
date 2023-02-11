@extends('layouts.adminDashboard')
@section('pageContent')
<div class="content-wrapper pt-2">
    <!--container-fluid-->
    <div class="container-fluid">
      
        <!-- Breadcrumbs-->
         <ol class="breadcrumb">
            <li class="breadcrumb-item active">Welcome! {{Auth::guard('admin')->user()->first_name}}</li>
        </ol>
        <div class="row"> 
                <div class="col-lg-4 col-md-12"> 
                    <h1 class="subheading">Static Contents</h1>
                </div>
                <div class="col-lg-8 col-md-12 text-right"> 
                    <span><a href="{{route('static-contents.create')}}" class="btn btn-info">Add Static Content</a></span>
                </div>
                
            </div>
        @if(session()->has('message'))
        <div class="alert alert-success">
            {{ session()->get('message') }}
        </div>
        @endif
		<div class="flash-message">
		    @if(session('fail'))
			<div class='alert alert-danger'>
				<p align="center">{{ session('fail')}}</p>
			</div>
			@endif
        		<div class="table-responsive">
                <table class="table table-bordered table-hover table-width-fix table_id1" id="table_id">
                    <thead>
                        <tr>
                          <!-- <th style="text-align: center;">Id</th> -->
                          <th style="text-align: center;">Title</th>
                          <th style="text-align: center;">Section</th>
                          <th style="text-align: center;">Type</th>
                          <th style="text-align: center;">Content</th>
                          <th style="text-align: center;">Action(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($contents as $content)
                        <tr>
                          <!-- <td align="center">{{$content->id}}</td> -->
                          <td align="center">{{$content->page}}</td>
                          <td align="center">{{ucwords($content->page_variable)}}</td>
                          <td align="center">{{$content->type ? $content->type : 0 }}</td>
                         
                          <td>
                            <!-- <div style="width:100%; max-height:100px; overflow:auto"> -->
                                {!!$content->content!!}
                            <!-- </div> -->
                          </td>
                          <td>
                            <center class="user-list-field">
                              <a href="{{url('admin/static-contents/'.base64_encode($content->id).'/edit')}}">
                                <button class="btn btn-info btn-sm">Edit</button></a>
                               <a href="javascript:void(0)" data-id="{{$content->id}}" class="btn btn-danger btn-sm delete">Delete</a>
                             </center>
                          </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
$(document).ready( function () {
    $('#table_id').DataTable({
        serverSide: false,
          "order": [ ],
          "columnDefs": [ {
          "targets": 4,
          "orderable": false
        } ]
    });
} );


$('.delete').click(function(){
      swal("Are you sure want to delete this Content ?", {
        buttons: ["No", "Yes"],
      })
      .then((yes) => {
        if (yes) {
          var id = $(this).data('id');

          $.ajax({
            type: 'GET',
            url:"{{url('admin/contents-delete')}}",
            data: {
               'id': id,
            },
            success: function(data) {
                if (data.status==true) {
                swal('Content Deleted Successfully!', {icon: "success"});
                
                setTimeout(function(){
                 location.reload();
                 }, 2500);
                // window.location.href('admin/static-contents');
                }
             
            }
          });
        }
      });
    })


window.setTimeout(function() {
       $(".alert").fadeTo(500, 0).slideUp(500, function(){
           $(this).remove();
       });
    }, 4000);
</script>

@endsection
