<html>
<body>
<head>
	<title></title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="/assets/custom-style.css">
<link href="/assets/login.css" rel="stylesheet" />


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<style>
    form.cmxform label.error, label.error {
    color: red;
    font-style: italic;
}
.ajaxloader{
	position: fixed;
    z-index: 99999;
    height: 100%;
    width: 100%;
    background-color: rgb(14 13 13 / 30%);
    top: 0px;
	background-repeat: no-repeat;
    background-position: center;
    background-size: 300px;
	background-image: url({{asset('assets/images/Ajux_loader.gif')}});
}
</style>

</head>
<header>
<link rel="stylesheet" href="/assets/custom-style.css">

	<div class="col-md-12" style="padding: 0px;background-color: black;color:#fff;">
		<div class="container">
			<div class="row">
				<div class="col-md-6"></div>
				<div class="col-md-6 text-right">
				<h6>24x7 Transport Helpline : 1800 1800 151</h6>
				</div>
			</div>
		</div>
	</div>
    <div class="container">
        <div class="row top-header">
            <div class="col-md-5">
                <span style="height: 100%;display: block;float: left;">
					<img src="assets/images/logo-final.png" style="height:100px;" alt="">
				</span>
				<span style="height: 100%;display: block;margin-top: 15px;">
					<span style="font-size: 25px;font-weight: bold;">Transport Department</span>
					<span style="font-size: 20px;">Government of Uttar Pradesh</span>
				</span>
            </div>
            <div class="col-md-4">
				<span style="font-size: 25px;font-weight: bold;">EV Subsidy Uttar Pradesh</span>
            </div>
            <div class="col-md-3 text-right">
    			<img src="assets/images/emblem-black.png" style="height:100px;" alt="">
            </div>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-saffron">
        <div class="container">
	        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
	            <span class="navbar-toggler-icon"></span>
	        </button>
		        <div class="collapse navbar-collapse" id="navbarColor01">
		            <ul class="navbar-nav mr-auto">
			            <li class="nav-item active">
			                <a class="btn btn-outline-warning my-2 my-sm-0 nav-link" href="{{url('/')}}">Home <span class="sr-only">(current)</span></a>
			            </li>
			            <li class="nav-item">
			                <a class="nav-link active" href="{{url('status')}}">Application Status</a>
			            </li>
			            @if(Auth::user())
			            <li class="nav-item">
			                <a class="nav-link active" href="{{url('dashboard')}}">Dashboard</a>
			            </li>
			            <li class="nav-item">
			                <a class="nav-link active" href="{{url('bank-detail')}}">Bank Details</a>
			            </li>
			            <li class="nav-item">
			                <a class="nav-link active" href="{{url('application-form')}}">Application</a>
			            </li>
			            <li class="nav-item">
			                <a class="nav-link active" href="{{url('logout')}}">Logout</a>
			            </li>
			            @endif
		            </ul>
	            <button class="btn menubtnstyle btn-info" type="button">A+</button>
	            <button class="btn menubtnstyle btn-default" type="button">A</button>
	            <button class="btn menubtnstyle btn-info" type="button">A-</button>
	            @if(Auth::user())
	            <a class="btn menubtnstyle btn-danger" href="">{{Auth::user()->full_name}}<i class="fa fa-angle-right"></i></a>
	            @else
	            <a class="btn menubtnstyle btn-danger" href="{{url('login')}}">Login <i class="fa fa-angle-right"></i></a>
	            @endif
		        </div>
        </div>
    </nav>
</header>
<div class="ajaxloader"></div>
     @yield('content')


<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">

	<script src="/assets/bootstrap/lib/jquery.js"></script>
    <script src="/assets/bootstrap/js/jquery.dataTables.min.js"></script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <script src="/assets/js/custom.js"></script>
    <script src="/assets/js/jquery.validate.js"></script>

<script>
$('document').ready(function(){
	$('.ajaxloader').hide();
});
</script>
<!-- <link rel="stylesheet" href="login.css"> -->
</body>
</html>