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
	<div class="login page-login">

		<!-- <a href="#">
			<img src="public/assets/images/logo-hcsa.png">
		</a> -->
		<h4 class="login-heading">Admin Login</h4>
		<form name="myForm" action="{{url('/admin/login')}}" method="post" class="login-form hcsa-login">
			@csrf
			<div class="login-input">
				<label for="name">Email ID </label>
				<input type="text" name="email" placeholder="Enter Your Email" value="{{old('email')}}" maxlength="50" class="mailid">
				
			</div>
			<div class="login-input">
				<label for="psw">Password</label>
		        <input type="password"  name="password" placeholder="Enter Your Password" value="{{ old('password') }}" maxlength="15">
		     
			</div>
			<div class="submit-button">
		        <button type="submit" name="log_in" id="btn" >Login Securely
		        </button>
		        <!-- <a href="{{url('/admin/forgot-password')}}" class="reset-psw">Forgot Password?</a> -->
	        </div>

		</form>
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
@endsection

