<!DOCTYPE html>
<html>
	<head>
		<title>RTO | Admin</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="csrf-token" content="{{csrf_token()}}">
		<link rel="icon" href="{{url('Front/assets/images/favicon.ico')}}" type="image/x-icon">
		<link rel="shortcut icon" href="{{ asset('frontend/images/favicon.ico') }}" />
	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	    	  <!-- Font Awesome Icons -->
	    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
	    <script src="{{asset('js/common.js')}}"></script>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script>
      <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
		<meta charset="utf-8">

		<link rel="shortcut icon" href="{{ asset('frontend/images/favicon.ico') }}" />
      <link rel="stylesheet" href="{{url('css/fontawesome-free/css/all.min.css')}}">
      <!-- overlayScrollbars -->
      <link rel="stylesheet" href="{{url('css/OverlayScrollbars.min.css')}}">
      <!-- Theme style -->
      <link rel="stylesheet" href="{{url('css/adminlte.min.css')}}">
      <link rel="stylesheet" href="/assets/custom-style.css">

	</head>
	<body>
		@yield('content')
	</body>
</html>