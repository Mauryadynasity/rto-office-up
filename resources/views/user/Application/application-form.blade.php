@extends('layouts.header')
@section('content')
<html>
<body>
<div class="container page_content" style="min-height: 500px;padding-top: 30px;padding-bottom: 30px;">
<!-- profile start -->
<div class="row">
    <div class="col-lg-12">
    @include('notifications.notification')
        <!-- multi step form start -->
    <div id="multi-step-form-container">
        <!-- Form Steps / Progress Bar -->
        <ul class="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
            <!-- Step 1 -->
            <li class="text-center form-stepper-list form-stepper-completed" step="1">
                <a class="mx-2">
                    <span class="form-stepper-circle">
                        <span>1</span>
                    </span>
                    <div class="label">Personal Details</div>
                </a>
            </li>
            <!-- Step 2 -->
            <li class="text-center form-stepper-list form-stepper-completed" step="2">
                <a class="mx-2">
                    <span class="form-stepper-circle">
                        <span>2</span>
                    </span>
                    <div class="label ">Account Basic Details</div>
                </a>
            </li>
            <!-- Step 3 -->
            @if($applications->count()>0)
            <li class="text-center form-stepper-list form-stepper-completed" step="3">
                <a class="mx-2">
                    <span class="form-stepper-circle text-muted">
                        <span>3</span>
                    </span>
                    <div class="label text-muted">Application Details</div>
                </a>
            </li>
            @else
             <li class="form-stepper-active text-center form-stepper-list" step="3">
                <a class="mx-2">
                    <span class="form-stepper-circle text-muted">
                        <span>3</span>
                    </span>
                    <div class="label text-muted">Application Details</div>
                </a>
            </li>
            @endif

        </ul>
    </div>
</div>
<!-- multi step form end -->
      <div class="card mb-4">
        <div class="card-body">
        <h3 class="mb-3 text-success">Fill Application Details</h3>
        <form enctype="multipart/form-data" method="POST" id="commentForm2" action="{{url('save-application-form')}}">
        @csrf
            <input type="hidden" name="user_id" value="{{Auth::user()->id}}">
            <div class="row">
            <div class="col-sm-4">
                <label class="labels"><strong>Select Scheme</strong></label>
                <select name="scheme_id" id="scheme_id" class="form-control" required>
                    <option value="">- Select -</option>
                    <option value="Scheme 1">Scheme 1</option>
                    <option value="Scheme 2">Scheme 2</option>
                    <option value="Scheme 3">Scheme 3</option>
                    <option value="Scheme 4">Scheme 4</option>
                    <option value="Scheme 5">Scheme 5</option>
                </select>
            </div>

            </div>
          <div class="row">
            <div class="col-sm-4">
                <label class="labels"><strong>Owner Name</strong></label>
                <input type="text" class="form-control" name="owner_name" readonly disabled="disbled" value="{{ Auth::user()->full_name }}">
                @if($errors->has('owner_name'))
                    <span class="text-danger">{{ $errors->first('owner_name') }}</span>
                @endif
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Application Number</strong></label>
                <input type="text" class="form-control" name="application_number">
                @if($errors->has('application_number'))
                    <span class="text-danger">{{ $errors->first('application_number') }}</span>
                @endif
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Vehical Name</strong></label>
                <input type="text" class="form-control" name="vehical_name">
                @if($errors->has('vehical_name'))
                    <span class="text-danger">{{ $errors->first('vehical_name') }}</span>
                @endif
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <label class="labels"><strong>Registration Number</strong></label>
                <input type="text" class="form-control" name="registration_number">
                @if($errors->has('registration_number'))
                    <span class="text-danger">{{ $errors->first('registration_number') }}</span>
                @endif
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Chassis Number</strong></label>
                <input type="text" class="form-control" name="chassis_number">
                @if($errors->has('chassis_number'))
                    <span class="text-danger">{{ $errors->first('chassis_number') }}</span>
                @endif
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Engine Number</strong></label>
                <input type="text" class="form-control" name="engine_number">
                @if($errors->has('engine_number'))
                    <span class="text-danger">{{ $errors->first('engine_number') }}</span>
                @endif
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Fuel Type</strong></label>
                <input type="text" class="form-control" name="fuel_type">
                @if($errors->has('fuel_type'))
                    <span class="text-danger">{{ $errors->first('fuel_type') }}</span>
                @endif
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Model Name</strong></label>
                <input type="text" class="form-control" name="model_name">
                @if($errors->has('model_name'))
                    <span class="text-danger">{{ $errors->first('model_name') }}</span>
                @endif
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Color</strong></label>
                <input type="text" class="form-control" name="color">
                @if($errors->has('color'))
                    <span class="text-danger">{{ $errors->first('color') }}</span>
                @endif
            </div>
        </div>
        <div class="row">
             <div class="col-sm-3">
                <label class="labels"><strong></strong></label>
                <a href="{{url('bank-detail')}}" class="form-control btn btn-info">Privious</a>
            </div>
            <div class="col-sm-3">
                <label class="labels"><strong></strong></label>
                <button class="form-control btn btn-warning" name="submit_button" value="true" type="submit">Next</button>
            </div>
        </div>
        </form>
        <div class="container">
        <h3 class="mb-3 text-success text-center">Application List</h3>
          <table class="table">
            <thead>
              <tr>
                <th>Scheme Name</th>
                <th>Owner</th>
                <th>Application Number</th>
                <th>Vehical Name</th>
                <th>Registration Number</th>
                <th>Chassis Number</th>
                <th>Engine Number</th>
                <th>Fuel Type</th>
                <th>Model Name</th>
                <th>Color</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            @foreach($applications as $application)
              <tr>
                  <td>{{$application->scheme_id}}</td>
                <td>{{$application->owner_name}}</td>
                <td>{{$application->application_number}}</td>
                <td>{{$application->vehical_name}}</td>
                <td>{{$application->registration_number}}</td>
                <td>{{$application->chassis_number}}</td>
                <td>{{$application->engine_number}}</td>
                <td>{{$application->fuel_type}}</td>
                <td>{{$application->model_name}}</td>
                <td>{{$application->color}}</td>
                <!-- <td>{{$application->status}}</td> -->
                <td><a href="" class="btn btn-warning"><i class="fa fa-edit" style="font-size:10px;color:red"></i>
                </a></td>
              </tr>
              @endforeach
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
<!-- profile end -->
</div>
        @include('layouts.footer')
</body>
</html>
@endsection