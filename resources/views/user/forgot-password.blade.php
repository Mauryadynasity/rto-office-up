@extends('layouts.header')
@section('content')
<html>
<body>
    <div class="wrapper">
    @include('notifications.notification')
        <div class="text-center mt-4 logHead">Forgot Your Password</div>
            <form class="p-3 mt-3" enctype="multipart/form-data" method="POST" id="form-data" action="{{url('send-password')}}">
                    @csrf
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="email" id="email" value="{{old('email')}}" placeholder="Enter Your Mobile/Email">
                <!-- @if($errors->has('email'))
                    <span class="text-danger">{{ $errors->first('email') }}</span>
                @endif -->
            </div>
            <button type="submit" class="btn btn-danger mt-3">Send</button>
        </form>
        <div class="text-center fs-6">
            Go to <a href="{{url('login')}}">Login</a>
        </div>
    </div>
        @include('layouts.footer')
</body>
</html>
@endsection
