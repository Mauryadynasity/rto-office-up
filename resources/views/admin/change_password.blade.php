@extends('layouts.admin.adminDashboard')
@section('pageContent')

<div class="content-wrapper pt-2">
    <!--container-fluid-->
    <div class="container-fluid">
         <ol class="breadcrumb">
          <!-- <li class="close-btn"><a href="#" id="myBtn" class="close-style" onclick="toggleNav()">Toggle</a></li> -->
          <li class="breadcrumb-item active">Welcome!</li>
        </ol>

	<div class="modal-body change-password-form" >
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
		</div>

	<!-- 	<a href="#" class="change-password-logo">
			<img src="../public/assets/images/logo-hcsa.png">
		</a> -->
		<h4 class="text-center">Change Password</h4>
		<form name="myForm" action="{{url('/admin/change-password/save/')}}" method="post" class="login-form hcsa-login">
			<input type="hidden" name="_token" value="{{ csrf_token() }}" class="cng-input psw-input">
			<div class="login-input">
				<label for="password">
				<strong>Old Password: <span style="color:red">*</span></strong>
			</label>
			<input type="password" name="old_pass" class="form-control cng-input psw-input" placeholder="Enter  Old Password" value="{{old('old_pass')}}" maxlength="15" >
			
			</div>
			<div class="login-input">
				<label for="password">
				<strong>New Password: <span style="color:red">*</span></strong>
			</label>
			<input type="password" name="new_pass" class="form-control cng-input psw-input" placeholder="Enter  New Password" value="{{old('new_pass')}}" maxlength="15">
		
			</div>

			<div class="login-input">
				<label for="password">
				<strong>Confirm Password: <span style="color:red">*</span></strong>
			</label>
			<input type="password" name="con_pass" class="form-control cng-input psw-input" placeholder="Enter  Confirm Password" value="{{old('con_pass')}}" maxlength="15">
		
			</div>
			<div class="submit-button">
		        <button type="submit" name="log_in" id="btn" >Submit
		        </button>
	        </div>

		</form>
		
	</div>
</div>
</div>

<script type="text/javascript">
    window.setTimeout(function() {
       $(".alert").fadeTo(500, 0).slideUp(500, function(){
           $(this).remove();
       });
    }, 5000);
</script>
@endsection


