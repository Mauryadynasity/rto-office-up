@extends('layouts.header')
@section('content')
<html>
<body>
<div class="container page_content" style="min-height: 500px;padding-top: 30px;padding-bottom: 30px;">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Application Status</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Find Application Number</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <br/>
            <h5>Enter the below details to know your application status</h5>
            <hr>
            <form>
                <div class="form-row align-items-center">
                <div class="col-md-3">
                    <label class="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Application Number *">
                </div>
                <div class="col-md-3">
                    <label class="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Vehicle Number *">
                </div>
                <div class="col-md-3">
                    <label class="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Chassis Number(Last 5 digits) *">
                </div>
                <div class="col-md-3">
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>
                </div>
            </form>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <br/>
            <h5>Enter the below details to find your application number</h5>
            <hr>
            <form>
                <div class="form-row align-items-center">
                <div class="col-md-3">
                    <label class="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Vehicle Number *">
                </div>
                <div class="col-md-3">
                    <label class="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Chassis Number(Last 5 digits) *">
                </div>
                <div class="col-md-3">
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>
                </div>
            </form>   
        </div>
      </div>
</div>
        @include('layouts.footer')
</body>
</html>
@endsection