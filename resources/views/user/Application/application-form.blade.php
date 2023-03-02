@extends('layouts.header')
@section('content')
<html>
<body>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/"></script>
    <script src="/assets/bootstrap/lib/jquery.js"></script>
    <script src="/assets/bootstrap/js/jquery.dataTables.min.js"></script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <script src="/assets/js/custom.js"></script>
    <script src="/assets/js/jquery.validate.js"></script>
    <style>
        .show_applications th{
            width:300px;
        }
    </style>
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
                <a href="{{url('dashboard')}}" class="mx-2">
                    <span class="form-stepper-circle">
                        <span>1</span>
                    </span>
                    <div class="label">Personal Details</div>
                </a>
            </li>
            <!-- Step 2 -->
            <li class="text-center form-stepper-list form-stepper-completed" step="2">
                <a href="{{url('bank-detail')}}" class="mx-2">
                    <span class="form-stepper-circle">
                        <span>2</span>
                    </span>
                    <div class="label ">Account Basic Details</div>
                </a>
            </li>
            <!-- Step 3 -->
            @if($applications->count()>0)
            <li class="text-center form-stepper-list form-stepper-completed" step="3">
                <a href="{{url('application-form')}}" class="mx-2">
                    <span class="form-stepper-circle text-muted">
                        <span>3</span>
                    </span>
                    <div class="label text-muted">Application Details</div>
                </a>
            </li>
            @else
             <li class="form-stepper-active text-center form-stepper-list" step="3">
                <a href="{{url('application-form')}}" class="mx-2">
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
@if($applications->count() ==0)
      <div class="col-md-12">
      <div class="card">
        <div class="card-body">
        <h3 class="mb-3 text-success">Fill Application Details</h3>
        <form enctype="multipart/form-data" method="POST" id="form-data" action="{{url('save-application-form')}}">
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
                <input type="text" class="form-control" name="owner_name" readonly disabled="disbled" value="{{ Auth::user()->full_name }}" required>
               
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Application Number</strong></label>
                <input type="text" class="form-control disabled" name="application_number" value="{{rand()}}" required> 
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Vehicle Number</strong></label>
                <input type="text" class="form-control disabled" name="vehicle_number" value="{{ Auth::user()->vehicle_number}}" required>
               
            </div>
        </div>
        <div class="row">
            
            <div class="col-sm-4">
                <label class="labels"><strong>Chassis Number</strong></label>
                <input type="text" class="form-control disabled" name="chassis_number" value="{{ Auth::user()->chassis_number}}" required>
               <!--  @if($errors->has('chassis_number'))
                    <span class="text-danger">{{ $errors->first('chassis_number') }}</span>
                @endif -->
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Engine Number</strong></label>
                <input type="text" class="form-control" name="engine_number" required>
                @if($errors->has('engine_number'))
                    <span class="text-danger">{{ $errors->first('engine_number') }}</span>
                @endif
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Fuel Type</strong></label>
                <input type="text" class="form-control" name="fuel_type" required>
                @if($errors->has('fuel_type'))
                    <span class="text-danger">{{ $errors->first('fuel_type') }}</span>
                @endif
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Model Name</strong></label>
                <input type="text" class="form-control" name="model_name" required>
                @if($errors->has('model_name'))
                    <span class="text-danger">{{ $errors->first('model_name') }}</span>
                @endif
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Color</strong></label>
                <input type="text" class="form-control" name="color" required>
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
                <button class="form-control btn btn-warning" name="submit_button" value="true" type="submit">Submit</button>
            </div>
        </div>
        </form>
      </div>
      </div>
      </div>
      @else
      
      <div class="col-md-12">
      <div class="card">
        <div class="card-body">
        <div class="container">
        <h3 class="mb-3 text-success text-center">Application List</h3>
          <table class="table show_applications" style="width: 100%;">
            <tbody>
            @foreach($applications as $application)
                <tr>
                  <th>Scheme Name</th>
                  <td>{{$application->scheme_id}}</td>
                </tr>
                <tr>
                  <th>Owner</th>
                <td>{{$application->owner_name}}</td>
            </tr>
            <tr>
                <th>Application Number</th>
                <td>{{$application->application_number}}</td>
            </tr>
            <tr>
                <th>Vehicle Number</th>
                <td>{{$application->vehical_name}}</td>
            </tr>
            <tr>
                <th>Chassis Number</th>
                <td>{{$application->chassis_number}}</td>
            </tr>
            <tr>
                <th>Engine Number</th>
                <td>{{$application->engine_number}}</td>
            </tr>
            <tr>
                <th>Fuel Type</th>
                <td>{{$application->fuel_type}}</td>
            </tr>
            <tr>
                <th>Model Name</th>
                <td>{{$application->model_name}}</td>
            </tr>
            <tr>
                <th>Color</th>
                <td>{{$application->color}}</td>
            </tr>
            <tr>
                <th>RTO Status</th>
                <td>{{$application->rto_status_text}}</td>
            </tr>
            <tr>
                <th>HO1 Status</th>
                <td>{{$application->ho1_status_text}}</td>
            </tr>
            <tr>
                <th>HO2 Status</th>
                <td>{{$application->ho2_status_text}}</td>
            </tr>
            @if($application->upload_file)
            <tr>
                <th>Resion for Rejection</th>
                <td><img src="{{ url($application->upload_file) }}" alt="tag"></td>
                <!-- <td>
                <a href="{{}}" onclick="return confirm('Are you sure?')" class="delete btn btn-danger btn-sm">Delete</a>
                </td> -->
            </tr>
            @endif
            @endforeach
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>

    @endif


</div>
<!-- profile end -->
</div>
        @include('layouts.footer')
        <script>
            $("#form-data").validate();
        $('.numbersOnly').keyup(function() {
            this.value = this.value.replace(/[^0-9\.]/g, '');
        });
        </script>
</body>
</html>
@endsection