@extends('layouts.admin.home')
@section('content')

<body class="alert-login">
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
	<div class="wrapper">
	<div class="container" style="max-width:400px;">
         <div class="text-center mt-4 logHead">Login here</div>
            <form class="p-3 mt-3" enctype="multipart/form-data" method="POST" id="form-data" action="{{url('/admin/login')}}">
                    @csrf
            <div class="form-field d-flex align-items-center">
                <select id="admin-type" name="admin_type" class="form-control" required>
                        <option value="">--Select Type--</option>
                        <option value="1">Admin</option>
                        <option value="2">RTO</option>
                        <option value="3">HO</option>
                      </select>
                @if($errors->has('admin_type'))
                    <span class="text-danger">{{ $errors->first('admin_type') }}</span>
                @endif
            </div>
            <div class="form-field d-flex align-items-center">
                <select id="districts" name="email" class="districts"></select>
            </div>

            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password"  name="password" placeholder="Enter Your Password" value="{{ old('password') }}" maxlength="15">
                @if($errors->has('password'))
                    <span class="text-danger">{{ $errors->first('password') }}</span>
                @endif
            </div>
                <!-- <div id="login-with-otp" style="margin-left: 30%;text-decoration: none;font-size: 0.8rem;color: #03A9F4; cursor: pointer;">Login With Otp</div> -->
            <button type="submit" class="btn btn-danger mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
            <!-- <a href="{{url('forgot-password')}}">Forget password?</a> or <a href="{{url('register')}}">Sign up</a> -->
        </div>
    </div>
    </div>
    
</body>

<script type="text/javascript">
    window.setTimeout(function() {
       $(".alert").fadeTo(500, 0).slideUp(500, function(){
           $(this).remove();
       });
    }, 5000);

    $(document).ready(function() {
         function disablePrev() { window.history.forward() }
         window.onload = disablePrev();
         window.onpageshow = function(evt) { if (evt.persisted) disableBack() }
      });
</script>
<script type="text/javascript">
  $("document").ready(function(){
  	// alert('sdf');
        $(".districts").hide();
        $("#admin-type").change(function() {
            getUserList();
        });




  });



function getUserList(){
    var admin_type = $("#admin-type").val();
    // alert(admin_type);
    if(admin_type == 2){
        $(".districts").show();
    }else{
        $(".districts").hide();
    }
    $.ajax({
        type: "GET",
        url:"{{route('get-user-list')}}",
        dataType : "text",
        data: {
            admin_type : admin_type,
        },
        success: function(data) {
            $(".districts").html(data);
        }
    });
}
function getUser(){
    $.ajax({
            type: 'GET',
            url:"{{route('get-user')}}",
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

</script>
@endsection

