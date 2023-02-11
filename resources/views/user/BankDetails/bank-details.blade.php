@extends('layouts.header')
@section('content')
<html>
<style>
    form.cmxform label.error, label.error {
        color: red;
        font-style: italic;
    }
    .btn-warning{
        background-color: #ff9933!important;
    }
</style>

<body>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/">
    <script src="/assets/bootstrap/lib/jquery.js"></script>
    <script src="/assets/bootstrap/js/jquery.dataTables.min.js"></script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <script src="/assets/js/custom.js"></script>
    <script src="/assets/js/jquery.validate.js"></script>

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
            <li class="form-stepper-active text-center form-stepper-list" step="2">
                <a class="mx-2">
                    <span class="form-stepper-circle">
                        <span>2</span>
                    </span>
                    <div class="label ">Account Details</div>
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
</div>
<!-- multi step form end -->
      <div class="card mb-12">
        <div class="card-body">
        <h3 class="mb-3 text-success">Bank Details</h3>
        <form enctype="multipart/form-data" class="cmxform" method="POST" id="form-data" action="{{url('save-bank-details')}}">
        @csrf
            <input type="hidden" name="user_id" value="{{Auth::user()->id}}">
          <div class="row">
            <div class="col-sm-4">
                <label class="labels"><strong>Bank Name</strong></label>
                <input type="text" class="form-control" name="bank_name" value="{{ $bankdetails ? $bankdetails->bank_name : '' }}" required>
                <!-- @if($errors->has('bank_name'))
                    <span class="text-danger">{{ $errors->first('bank_name') }}</span>
                @endif -->
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>District for Bank</strong></label>
                <input type="text" class="form-control" name="district_name" value="{{ $bankdetails ? $bankdetails->district_name : '' }}" required>
                <!-- @if($errors->has('district_name'))
                    <span class="text-danger">{{ $errors->first('district_name') }}</span>
                @endif -->
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Bank IFSC</strong></label>
                <input type="text" class="form-control" name="ifsc_code" value="{{ $bankdetails ? $bankdetails->ifsc_code : '' }}" required>
                <!-- @if($errors->has('ifsc_code'))
                    <span class="text-danger">{{ $errors->first('ifsc_code') }}</span>
                @endif -->
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <label class="labels"><strong>Branch Name</strong></label>
                <input type="text" class="form-control" name="branch_name" value="{{ $bankdetails ? $bankdetails->branch_name : '' }}" required>
                <!-- @if($errors->has('branch_name'))
                    <span class="text-danger">{{ $errors->first('branch_name') }}</span>
                @endif -->
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Bank Account Number</strong></label>
                <input type="text" class="form-control numbersOnly" name="account_number" value="{{ $bankdetails ? $bankdetails->account_number : '' }}" required>
                <!-- @if($errors->has('account_number'))
                    <span class="text-danger">{{ $errors->first('account_number') }}</span>
                @endif -->
            </div>
            <div class="col-sm-4">
                <label class="labels"><strong>Bank Branch address</strong></label>
                <input type="text" class="form-control" name="branch_address" value="{{ $bankdetails ? $bankdetails->branch_address : '' }}" required>
                <!-- @if($errors->has('branch_address'))
                    <span class="text-danger">{{ $errors->first('branch_address') }}</span>
                @endif -->
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <label class="labels"><strong></strong></label>
                <a href="{{url('dashboard')}}" class="form-control btn btn-info">Privious</a>
            </div>
            <div class="col-sm-3">
                <label class="labels"><strong></strong></label>
                <button class="form-control btn btn-warning" name="submit_button" value="true" type="submit">Next</button>
            </div>
        </div>
        </form>
        </div>
      </div>
     
    </div>
  </div>
<!-- profile end -->
</div>
<script>
    $("#form-data").validate();
    $('.numbersOnly').keyup(function() {
            this.value = this.value.replace(/[^0-9\.]/g, '');
        });
</script>
        @include('layouts.footer')

</body>
</html>
@endsection

