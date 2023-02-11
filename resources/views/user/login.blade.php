@extends('layouts.header')
@section('content')
<html>
<body>
    <div class="wrapper">
    @include('notifications.notification')
        <div class="text-center mt-4 logHead">Login</div>
            <form class="p-3 mt-3" enctype="multipart/form-data" method="POST" id="form-data" action="{{url('enquery-login')}}">
                    @csrf
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="vehicle_number" id="Vehicle" value="{{old('vehicle_number')}}" placeholder="Vehicle Number">
                @if($errors->has('vehicle_number'))
                    <span class="text-danger">{{ $errors->first('vehicle_number') }}</span>
                @endif
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="text" name="otp" id="otp" value="{{old('otp')}}" placeholder="OTP">
                <input type="hidden" name="password" id="password" value="dsmnru@123">
                @if($errors->has('otp'))
                    <span class="text-danger">{{ $errors->first('otp') }}</span>
                @endif
            </div>
                <div id="login-with-otp" style="margin-left: 30%;text-decoration: none;font-size: 0.8rem;color: #03A9F4; cursor: pointer;">Login With Otp</div>
            <button class="btn btn-danger mt-3">Login</button>
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
        // alert('dsfsdfd');
        jQuery('#form-data').validate({
            rules: {
                bank_name:"required",
                district_name:"required",
                ifsc_code:"required",
                branch_name:"required",
                account_number:"required",
                branch_address:"required",
            },messages: {
                bank_name:"Enter Your Bank Name",
                district_name:"Enter Your Bank District",
                ifsc_code:"Enter Your IFSC CODE",
                branch_name:"Enter Your Bank Branch",
                account_number:"Enter Your Account Details",
                branch_address:"Enter Your Branch Address",
            }
        });
    });
    $('#login-with-otp').on('click',function(){
alert('sdfsdf');
        $("#bank_offline").hide(); 
        $("#bank_online").show(); 
    });
</script>
