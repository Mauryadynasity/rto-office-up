@extends('layouts.header')
@section('content')
<html>
<body>
    <div class="wrapper">
    @include('notifications.notification')
        <div class="alert alert-success validation_success" style="display: none;"></div>
        <div class="alert alert-danger validation_error" style="display: none;"></div>
        <div class="text-center mt-4 logHead">Login</div>
            <form class="p-3 mt-3" enctype="multipart/form-data" method="POST" id="form-data" action="{{url('enquery-login')}}">
            @csrf
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="vehicle_number" id="vehicle_number" placeholder="Vehicle Number">
            </div>
            <div class="send_otp" style="display: none;">
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="number" name="otp" id="otp" placeholder="OTP">
            </div>
            </div>
            <button type="button" class="btn btn-success otp_btn mt-3">Sent OTP</button>
            <button type="button" class="btn btn-danger signIn mt-3" style="display: none;">Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="{{url('forgot-password')}}">Forget password?</a> or <a href="{{url('register')}}">Sign up</a>
        </div>
    </div>
        @include('layouts.footer')
</body>
</html>
@endsection
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
    
$('.otp_btn').click(function(){
  var vehicle_number = $('#vehicle_number').val();
  $.ajax({
      url : "{{url('otp-send-login')}}",
      type : 'POST',
      dataType : 'JSON',
      data : {
        '_token' : "{{csrf_token()}}",
        'vehicle_number' : vehicle_number,
      },
      success:function(data) {
        if(data.status==true){
          $('.otp_btn').text('Resnd OTP');
          $('.signIn').show();
          $('.send_otp').show();
          $('.validation_success').text(data.message).show();
          $('.validation_error').text('').hide();
        }else{
          $('.signIn').hide();
          $('.send_otp').hide();
          $('.validation_success').text('').hide();
          $('.validation_error').text(data.message).show();
        }
      }
  });
});

$('.signIn').click(function(){
  $_token = "{{ csrf_token() }}";
	$.ajax({
	    headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') },
		type:'POST',
		dataType:  "json",
		url : "{{url('enquery-login-otp')}}",
		data : $('#form-data').serialize(),
		success:function(data) {
			// grecaptcha.reset();
			if(data.status==true){
          $('.validation_success').text(data.message).show();
          $('.validation_error').text('').hide();
          window.setTimeout( function() {
            window.location.href = "{{url('dashboard')}}";
          }, 3000);
			}else{
          $('.validation_success').text('').hide();
          $('.validation_error').text(data.message).show();
			}
	   },
		error: function (request, status, error) {
			$('.login_login').text(error).css({'display':'block'});
		}
	});
});

});
</script>
