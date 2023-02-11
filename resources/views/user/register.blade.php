@extends('layouts.header')
@section('content')
<html>
<body>
    @include('notifications.notification')
    <div class="wrapper">
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
            <div class="form-field d-flex align-items-center">
                <input type="number" name="otp" id="otp" placeholder="OTP">
            </div>
            <!-- <a href="" class="">Resend Otp</a> -->
            <button type="submit" class="btn btn-danger mt-3">Sign Up</button>
        </form>
        <div class="text-center fs-6">
            Go to <a href="{{url('login')}}">Login</a>
        </div>
    </div>


<!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary modalID" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button> -->

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
        // $('.modalID').trigger('click');
        // alert('dsfsdfd');
        // jQuery('#form-data').validate({
        //     rules: {
        //         vehicle_number:"required",
        //     },messages: {
        //         vehicle_number:"Enter Your Vehicle Number",
        //     }
        // });
    });
</script>