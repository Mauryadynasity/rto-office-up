@extends('layouts.header')
@section('content')
<html>
<body>

<div class="container page_content" style="min-height: 500px;padding-top: 30px;padding-bottom: 30px;">
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="{{asset('assets/images/banner/HARGHART.jpeg')}}" alt="First slide">
    </div>
    <div class="carousel-item">
    <img class="d-block w-100" src="{{asset('assets/images/banner/sliderhelp1.jpg')}}" alt="First slide">
    </div>
    <div class="carousel-item">
    <img class="d-block w-100" src="{{asset('assets/images/banner/sliderrs2.jpeg')}}" alt="First slide">
    </div>
    <div class="carousel-item">
    <img class="d-block w-100" src="{{asset('assets/images/banner/tiranhga2.png')}}" alt="First slide">
    </div>
    <div class="carousel-item">
    <img class="d-block w-100" src="{{asset('assets/images/banner/banner-bharat-series-7-updated.jpg')}}" alt="First slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<br/>

    <div class="row">
        <div class="col-md-4">
            <div class="card animate mb-3">
                <div class="card-body card_image text-success" style="background-image: url(assets/images/yogi-adityanath-dp-with-pagdi.jpg);"></div>
                <div class="card-header" style="font-size: 20px;font-weight: bold;">
                    Shri Yogi Adityanath Hon’ble CM, UP/Chairperson, General Council-University
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card animate mb-3">
                <div class="card-body card_image text-success" style="background-image: url(assets/images/yogi-adityanath-dp-with-pagdi.jpg);"></div>
                <div class="card-header" style="font-size: 20px;font-weight: bold;">
                    Shri Yogi Adityanath Hon’ble CM, UP/Chairperson, General Council-University
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card animate mb-3">
                <div class="card-body card_image text-success" style="background-image: url(assets/images/yogi-adityanath-dp-with-pagdi.jpg);"></div>
                <div class="card-header" style="font-size: 20px;font-weight: bold;">
                    Shri Yogi Adityanath Hon’ble CM, UP/Chairperson, General Council-University
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
