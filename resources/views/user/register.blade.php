@extends('layouts.header')
@section('content')
<html>
<body>
    @include('notifications.notification')
    <div class="wrapper">
      
    <div class="alert alert-success validation_success" style="display: none;"></div>
    <div class="alert alert-danger validation_error" style="display: none;"></div>

        <div class="text-center mt-4 logHead">Register</div>
        <form class="p-3 mt-3" enctype="multipart/form-data" method="POST" id="form-data" action="{{url('user-registration')}}">
                    @csrf
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="vehicle_number" id="vehicle_number" placeholder="Vehicle Number">
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="text" name="chassis_number" id="chassis_number" placeholder="Chassis Number">
            </div>
            <div class="send_otp" style="display: none;">
            <div class="form-field d-flex align-items-center">
                <input type="number" name="otp" id="otp" placeholder="OTP">
            </div>
            </div>
            <button type="button" class="btn btn-success otp_btn mt-3">Sent OTP</button>
            <button type="button" class="btn btn-primary signUp mt-3" style="display: none;">Sign Up</button>
        </form>
        <div class="text-center fs-6">
            Go to <a href="{{url('login')}}">Login</a>
        </div>
    </div>


<!-- Modal -->
<div class="modal fade show in" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog  modal-lg modal-dialog-centered" role="document">
    <div class="modal-content  modal-lg">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Disclaimer</h5>
        <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"> -->
          <!-- <span aria-hidden="true">&times;</span>
        </button> -->
      </div>
      <div class="modal-body">
        Disclaimer Content
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
        <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>


        @include('layouts.footer')
</body>
</html>
@endsection
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script>
$(window).on('load', function() {
    $('#exampleModalCenter').modal('show');
});
$(document).ready(function() {


$('.otp_btn').click(function(){
  var vehicle_number = $('#vehicle_number').val();
  $.ajax({
      url : "{{url('otp-send')}}",
      type : 'POST',
      dataType : 'JSON',
      data : {
        '_token' : "{{csrf_token()}}",
        'vehicle_number' : vehicle_number,
      },
      success:function(data) {
        if(data.status==true){
          $('.otp_btn').text('Resnd OTP');
          $('.signUp').show();
          $('.send_otp').show();
          $('.validation_success').text(data.message).show();
          $('.validation_error').text('').hide();
        }else{
          $('.signUp').hide();
          $('.send_otp').hide();
          $('.validation_success').text('').hide();
          $('.validation_error').text(data.message).hide();
        }
      }
  });
});
$('.signUp').click(function(){
  $_token = "{{ csrf_token() }}";
	$.ajax({
	    headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') },
		type:'POST',
		dataType:  "json",
		url : "{{url('user-registration')}}",
		data : $('#form-data').serialize(),
		success:function(data) {
			// grecaptcha.reset();
			if(data.status==true){
          $('.validation_success').text(data.message).show();
          $('.validation_error').text('').hide();
          window.setTimeout( function() {
            window.location.reload();
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