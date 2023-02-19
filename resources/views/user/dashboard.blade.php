@extends('layouts.header')
@section('content')

<html>
<body>
<div class="container page_content" style="min-height: 500px;padding-top: 30px;padding-bottom: 30px;">
<!-- profile start -->
    @include('notifications.notification')

<!-- multi step form start -->
    <div id="multi-step-form-container">
        <!-- Form Steps / Progress Bar -->
        <ul class="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
            <!-- Step 1 -->
            <li class="form-stepper-active text-center form-stepper-list" step="1">
                <a class="mx-2">
                    <span class="form-stepper-circle">
                        <span>1</span>
                    </span>
                    <div class="label">Personal Details</div>
                </a>
            </li>
            <!-- Step 2 -->
            <li class="form-stepper-unfinished text-center form-stepper-list" step="2">
                <a class="mx-2">
                    <span class="form-stepper-circle text-muted">
                        <span>2</span>
                    </span>
                    <div class="label text-muted">Account Basic Details</div>
                </a>
            </li>
            <!-- Step 3 -->
            <li class="form-stepper-unfinished text-center form-stepper-list" step="3">
                <a class="mx-2">
                    <span class="form-stepper-circle text-muted">
                        <span>3</span>
                    </span>
                    <div class="label text-muted">Application Details</div>
                </a>
            </li>
        </ul>
    </div>
<!-- multi step form end -->

<div class="row">
    <div class="col-lg-4">
    <form enctype="multipart/form-data" method="POST" action="{{url('upload-photo')}}">
        @csrf
      <div class="card mb-4">
        <div class="card-body text-center">
          @if(Auth::user()->photo)
          <img src="{{Auth::user()->photo}}" alt="avatar" class="img-fluid" style="width: 150px;">
          <br/>
          <img src="{{Auth::user()->signature}}" alt="avatar" class="img-fluid" style="width: 150px;">
          @else
          <img src="{{asset('assets\images\demo-user.jpg')}}" alt="avatar" class="rounded-circle img-fluid" style="width: 150px;">
          @endif
          <h5 class="my-3">@if(Auth::user()){{ Auth::user()->full_name }}@else 'N/A' @endif</h5>
          <!-- <p class="text-muted mb-1">Full Stack Developer</p> -->
          <!-- <p class="text-muted mb-4">Bay Area, San Francisco, CA</p> -->

          <p>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Update Photo & Signature
          </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body text-left">
            <div class="col-md-12">
            <label style="display:block;">Upload Photo</label>
            <input type="file" class="form-control" name="photo" accept="image/jpg,image/jpeg">&nbsp;
            </div>
            <div class="col-md-12">
              <label style="display:block;">Upload Signature</label>
              <input type="file" class="form-control" name="signature" accept="image/jpg,image/jpeg">&nbsp;
            </div>
            <div class="col-md-12">
              <button type="submit" class="btn btn-outline-primary ms-1 upload_photo">Upload</button>
            </div>
            </div>
          </div>

        </div>
      </div>
    </form>
    </div>
    <div class="col-lg-8">
      <form enctype="multipart/form-data" method="POST" action="{{url('update-profile')}}">
        @csrf
      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Full Name</p>
            </div>
            <div class="col-sm-9">
              <input type="text" class="text-muted mb-0 form-control" name="full_name" readonly value="@if(Auth::user()){{ Auth::user()->full_name }} @endif ">
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Email</p>
            </div>
            <div class="col-sm-9">
              <input type="text" class="text-muted mb-0 form-control" name="email" value="@if(Auth::user()){{ Auth::user()->email }} @endif">
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Vehicle Number</p>
            </div>
            <div class="col-sm-9">
              <input type="text" class="text-muted mb-0 form-control" name="vehicle_number" value="@if(Auth::user()){{ Auth::user()->vehicle_number }} @endif">
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Chassis Number</p>
            </div>
            <div class="col-sm-9">
              <input type="text" class="text-muted mb-0 form-control" name="chassis_number" value="@if(Auth::user()){{ Auth::user()->chassis_number }} @endif">
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Phone</p>
            </div>
            <div class="col-sm-9">
              <input type="text" class="text-muted mb-0 form-control" name="mobile" value=" @if(Auth::user()){{ Auth::user()->mobile }} @endif">
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Districts</p>
            </div>
            <div class="col-sm-9">
              <select id="course" name="district_id"  class="form-control" required>
                <option value="">--Select District--</option>
                @foreach($districts as $index => $district)
                <option value="{{$district->id}}" @if($district->id == Auth::user()->district) selected @endif>{{$district->name}}</option>
                @endforeach
            </select>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <button type="submit" class="text-muted mb-0 form-control btn btn-warning btn-navigate-form-step update_profile" name="submit_button" value="true" style="color:#ffffff;" step_number="2">Update Profile</button>
            </div>
            <div class="col-sm-3">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  </div>
<!-- profile end -->
</div>
        @include('layouts.footer')
<script>
          const navigateToFormStep = (stepNumber) => {
    /**
     * Hide all form steps.
     */
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
        formStepElement.classList.add("d-none");
    });
    /**
     * Mark all form steps as unfinished.
     */
    document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
        formStepHeader.classList.add("form-stepper-unfinished");
        formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
    });
    /**
     * Show the current form step (as passed to the function).
     */
    document.querySelector("#step-" + stepNumber).classList.remove("d-none");
    /**
     * Select the form step circle (progress bar).
     */
    const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
    /**
     * Mark the current form step as active.
     */
    formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
    formStepCircle.classList.add("form-stepper-active");
    /**
     * Loop through each form step circles.
     * This loop will continue up to the current step number.
     * Example: If the current step is 3,
     * then the loop will perform operations for step 1 and 2.
     */
    for (let index = 0; index < stepNumber; index++) {
        /**
         * Select the form step circle (progress bar).
         */
        const formStepCircle = document.querySelector('li[step="' + index + '"]');
        /**
         * Check if the element exist. If yes, then proceed.
         */
        if (formStepCircle) {
            /**
             * Mark the form step as completed.
             */
            formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
            formStepCircle.classList.add("form-stepper-completed");
        }
    }
};
/**
 * Select all form navigation buttons, and loop through them.
 */
document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
    /**
     * Add a click event listener to the button.
     */
    formNavigationBtn.addEventListener("click", () => {
        /**
         * Get the value of the step.
         */
        const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
        /**
         * Call the function to navigate to the target form step.
         */
        navigateToFormStep(stepNumber);
    });
});
@if($application)
      $('input').prop('disabled',true);
      $('.update_profile,.upload_photo').prop('disabled',true);
@endif

</script>
</body>
</html>
@endsection