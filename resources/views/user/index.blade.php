@extends('layouts.header')
@section('content')
<html>
<body>
<div class="container page_content" style="min-height: 500px;padding-top: 30px;padding-bottom: 30px;">
    <div class="row">
        <div class="col-md-4">
            <div class="card mb-3">
                <div class="card-header alert-success">Scheme 1</div>
                <div class="card-body text-success">
                  <ul>
                      <li>UP Electric Vehicle Policy 2021</li>
                      <li>UP Electric Vehicle Policy 2021</li>
                      <li>UP Electric Vehicle Policy 2021</li>
                </ul>
                <!-- <div class="col-md-12 text-center"><button class="btn btn-success">Appliation Status</button></div> -->
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-3">
            <div class="card-header alert-danger">Scheme 2</div>
                <div class="card-body text-danger">
                      <ul>
                        <li>UP Electric Vehicle Policy 2021</li>
                        <li>UP Electric Vehicle Policy 2021</li>
                        <li>UP Electric Vehicle Policy 2021</li>
                    </ul>
                    <!-- <div class="col-md-12 text-center"><button class="btn btn-danger">Appliation Status</button></div> -->
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-3">
            <div class="card-header alert-info">Scheme 3</div>
                <div class="card-body text-info">
                    <ul>
                        <li>UP Electric Vehicle Policy 2021</li>
                        <li>UP Electric Vehicle Policy 2021</li>
                        <li>UP Electric Vehicle Policy 2021</li>
                    </ul>
                    <!-- <div class="col-md-12 text-center">
                        <a href="{{url('status')}}" class="btn btn-info">Appliation Status</a>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-3">
            <div class="card-header alert-danger">Scheme 4</div>
                <div class="card-body text-danger">
                      <ul>
                        <li>UP Electric Vehicle Policy 2021</li>
                        <li>UP Electric Vehicle Policy 2021</li>
                        <li>UP Electric Vehicle Policy 2021</li>
                    </ul>
                    <!-- <div class="col-md-12 text-center"><button class="btn btn-danger">Appliation Status</button></div> -->
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-3">
            <div class="card-header alert-info">Scheme 5</div>
                <div class="card-body text-info">
                    <ul>
                        <li>UP Electric Vehicle Policy 2021</li>
                        <li>UP Electric Vehicle Policy 2021</li>
                        <li>UP Electric Vehicle Policy 2021</li>
                    </ul>
                    <!-- <div class="col-md-12 text-center">
                        <a href="{{url('status')}}" class="btn btn-info">Appliation Status</a>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
<!-- <div class="col-md-12 text-center">
    <img src="https://odtransportmis.nic.in/EVCell/assets/images/EV-Footer.jpg" alt="">
</div> -->
</div>
    @include('layouts.footer')
</body>
</html>
@endsection
