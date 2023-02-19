@extends('layouts.header')
@section('content')

<html>
<body>
<div class="container page_content" style="min-height: 500px;padding-top: 30px;padding-bottom: 30px;">
<!-- profile start -->
    @include('notifications.notification')

<div class="row">
    <div class="col-lg-4">
    <form action="{{ route('changePassword') }}" method="POST">
          @csrf
          <div class="card-body">

          
              <div class="mb-3">
                  <label for="oldPasswordInput" class="form-label">Old Password</label>
                  <input name="old_password" type="password" class="form-control @error('old_password') is-invalid @enderror" id="oldPasswordInput"
                      placeholder="Old Password">
                  @error('old_password')
                      <span class="text-danger">{{ $message }}</span>
                  @enderror
              </div>
              <div class="mb-3">
                  <label for="newPasswordInput" class="form-label">New Password</label>
                  <input name="new_password" type="password" class="form-control @error('new_password') is-invalid @enderror" id="newPasswordInput"
                      placeholder="New Password">
                  @error('new_password')
                      <span class="text-danger">{{ $message }}</span>
                  @enderror
              </div>
              <div class="mb-3">
                  <label for="confirmNewPasswordInput" class="form-label">Confirm New Password</label>
                  <input name="new_password_confirmation" type="password" class="form-control" id="confirmNewPasswordInput"
                      placeholder="Confirm New Password">
              </div>

          </div>

          <div class="card-footer">
              <button class="btn btn-success">Submit</button>
          </div>

      </form>


  </div>
  </div>
<!-- profile end -->
</div>
@include('layouts.footer')
        
</body>
</html>
@endsection