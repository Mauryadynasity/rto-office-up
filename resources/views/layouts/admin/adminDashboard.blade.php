<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Admin</title>
      <!-- <link rel="icon" href="{{url('Front/assets/images/favicon.ico')}}" type="image/x-icon"> -->
      <meta name="csrf-token" content="{{csrf_token()}}">
      <!-- Font Awesome Icons -->
      <link rel="shortcut icon" href="{{ asset('frontend/images/favicon.ico') }}" />
      <link rel="stylesheet" href="{{url('css/fontawesome-free/css/all.min.css')}}">
      <!-- overlayScrollbars -->
      <link rel="stylesheet" href="{{url('css/OverlayScrollbars.min.css')}}">
      <!-- Theme style -->
      <link rel="stylesheet" href="{{url('css/adminlte.min.css')}}">
      <link rel="stylesheet" href="{{url('css/js/basestyle.bundle.XYBJXG5W.css')}}">
      <link rel="stylesheet" href="{{url('css/js/website.bundle.IVTXGFNS.css')}}">
      <link rel="stylesheet" href="{{url('css/js/ap-charts.bundle.KQHADAAW.js')}}">
      <link rel="stylesheet" href="{{url('css/js/common.js')}}">
      <link rel="stylesheet" href="{{url('css/js/frappe-web.bundle.UP7HHWO7.js')}}">
      <link rel="stylesheet" href="{{url('css/js/moment-timezone-with-data.min.js')}}">
      <link rel="stylesheet" href="{{url('css/js/moment-with-locales.min.js')}}">
      <link rel="shortcut icon" href="https://ev.delhi.gov.in/files/D.png" type="image/x-icon">
<link href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css" rel="stylesheet">
      
   

   <link rel="canonical" href="https://ev.delhi.gov.in/ev_dashboard">
      
      
      <!-- Google Font: Source Sans Pro -->
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
      <!-- JQuery -->
      {{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> --}}
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
      <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.24/themes/smoothness/jquery-ui.css" />
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.24/jquery-ui.min.js"></script>
      <!-- include summernote css/js-->
      <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote.css" rel="stylesheet">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote.js"></script>
      <link rel="stylesheet" type="text/css" href="{{ url('frontend/css/adminStyle.css') }}">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.21.0/moment.min.js" type="text/javascript"></script>
      
      <script src="{{asset('js/common.js')}}"></script>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script>
      <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
      <link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css" />
      <script src="//cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
      
      <script>
         $(document).ready(function() {
             $('.summernote').summernote({
               height: 200,
             callbacks: {
               onImageUpload: function(files, editor, welEditable) {
                 sendFile(files[0], editor, welEditable);
               }
             },
             popover: {
               image: [],
               link: [],
               air: []
             },
             toolbar: [

             ['font', ['bold', 'italic', 'underline', 'clear']],
             ['color', ['color']],
             ['para', ['ul', 'ol', 'paragraph']],
             ['insert', ['link', 'picture', 'hr']],
             ['view', ['codeview']],
              ['table', ['table']],

             ]

                   });
              function sendFile(file, editor, welEditable) {
         data = new FormData();
         data.append("file", file);

         $.ajax({
         headers: {
                       'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                   },
         data: data,
         type: "POST",
         url: "{{url('uploads-summernote')}}",
         cache: false,
         contentType: false,
         processData: false,
         success: function(url) {
           $('.summernote').summernote('insertImage', url);
         }
         });
         }
         });
      </script>
   </head>
   <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      <div class="wrapper">
         <!--  -->
         <span class="side-open" onclick="openNav()">
            <!-- &#9776;  -->
         </span>
         <aside class="main-sidebar sidebar-dark-primary elevation-4 sidenav" id="mySidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <!-- Sidebar -->
            <div class="sidebar">
               <!-- Sidebar user panel (optional) -->
               <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div class="image">
                     <!-- <img src="{{asset('img/user2-160x160.jpg')}}" class="img-circle elevation-2" alt="User Image"> -->
                  </div>
                  <!-- <div class="info">
                     <a href="{{url('admin/dashboard')}}" class="d-block">Admin Dashboard</a>
                  </div> -->
               </div>
               <!-- Sidebar Menu -->
               <nav class="mt-2">
                  <ul class="nav nav-pills nav-sidebar flex-column menu-active" data-widget="treeview" role="menu" data-accordion="false">
                     <li class="nav-item has-treeview menu-open">
                        <ul class="nav nav-treeview">
                           <li class="nav-item">
                              <a class="nav-link {{Request::is('admin/dashboard') ? 'active' : ''}}" href="{{url('admin/dashboard')}}">
                             <i class="fa fa-users" aria-hidden="true"></i>
                              <span> Dashboard </span>
                              </a>
                           </li>
                           
                        </ul>
                     </li>
                  </ul>
               </nav>
         @if(Auth::guard('admin')->user()->role==1)
               <nav class="mt-2">
                  <ul class="nav nav-pills nav-sidebar flex-column menu-active" data-widget="treeview" role="menu" data-accordion="false">
                     <li class="nav-item has-treeview menu-open">
                        <ul class="nav nav-treeview">
                           <li class="nav-item">
                              <a class="nav-link {{Request::is('admin/user') ? 'active' : ''}}" href="{{url('admin/user')}}">
                                <i class="fas fa-file-alt" aria-hidden="true"></i>
                                 <span>Admin User</span>
                              </a>
                           </li>
                           
                        </ul>
                     </li>
                  </ul>
               </nav>
               <nav class="mt-2">
                  <ul class="nav nav-pills nav-sidebar flex-column menu-active" data-widget="treeview" role="menu" data-accordion="false">
                     <li class="nav-item has-treeview menu-open">
                        <ul class="nav nav-treeview">
                           <li class="nav-item">
                              <a class="nav-link {{Request::is('admin/application') ? 'active' : ''}}" href="{{url('admin/application')}}">
                                <i class="fas fa-file-alt" aria-hidden="true"></i>
                                 <span>All Applications</span>
                              </a>
                           </li>
                           
                        </ul>
                     </li>
                  </ul>
               </nav>
         @elseif(Auth::guard('admin')->user()->role==2)
               <nav class="mt-2">
                  <ul class="nav nav-pills nav-sidebar flex-column menu-active" data-widget="treeview" role="menu" data-accordion="false">
                     <li class="nav-item has-treeview menu-open">
                        <ul class="nav nav-treeview">
                           <li class="nav-item">
                              <a class="nav-link {{Request::is('admin/application') ? 'active' : ''}}" href="{{url('admin/application')}}">
                                <i class="fas fa-file-alt" aria-hidden="true"></i>
                                 <span>Application List</span>
                              </a>
                           </li>
                           
                        </ul>
                     </li>
                  </ul>
               </nav>
         @elseif(Auth::guard('admin')->user()->role==3)
               <nav class="mt-2">
                  <ul class="nav nav-pills nav-sidebar flex-column menu-active" data-widget="treeview" role="menu" data-accordion="false">
                     <li class="nav-item has-treeview menu-open">
                        <ul class="nav nav-treeview">
                           <li class="nav-item">
                              <a class="nav-link {{Request::is('admin/application') ? 'active' : ''}}" href="{{url('admin/application')}}">
                                <i class="fas fa-file-alt" aria-hidden="true"></i>
                                 <span>Application List</span>
                              </a>
                           </li>
                           
                        </ul>
                     </li>
                  </ul>
               </nav>      
         @endif
               <!-- <nav class="mt-2">
                  <ul class="nav nav-pills nav-sidebar flex-column menu-active" data-widget="treeview" role="menu" data-accordion="false">
                     <li class="nav-item has-treeview menu-open">
                        <ul class="nav nav-treeview">
                           <li class="nav-item">
                              <a class="nav-link {{Request::is('admin/change-password') ? 'active' : ''}}" href="{{url('admin/change-password')}}">
                               <i class="fa fa-key" aria-hidden="true"></i>
                              <span>Change Password</span>
                              </a>
                           </li>
                           
                        </ul>
                     </li>
                  </ul>
               </nav> -->

                <nav class="mt-2">
                  <ul class="nav nav-pills nav-sidebar flex-column menu-active" data-widget="treeview" role="menu" data-accordion="false">
                     <li class="nav-item has-treeview menu-open">
                        <ul class="nav nav-treeview">
                           <li class="nav-item">
                              <a class="nav-link {{Request::is('admin/logout') ? 'active' : ''}}" href="{{url('admin/logout')}}">
                               <i class="fa fa-sign-out-alt" aria-hidden="true"></i>
                                 <span>Logout</span>
                              </a>
                           </li>
                           
                        </ul>
                     </li>
                  </ul>
               </nav>
               <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
         </aside>
         @yield('pageContent')
         <div>&nbsp;</div>
         <!-- Main Footer -->
         <footer class="main-footer">
            <strong>Copyright &copy; {{ date('Y') }} <a href="{{url('admin/dashboard')}}">Admin Panel</a>.</strong> All rights reserved.
            <!-- <div class="float-right d-none d-sm-inline-block">
               <b>Version</b> 3.0.0-beta.1
               </div> -->
         </footer>
      </div>
      </div>
      </div>
      <!-- /.sidebar -->
      </div>
      <!-- Bootstrap core JavaScript-->
      <script src="{{ URL:: asset('js/bootstrap.bundle.min.js')}}"></script>

      <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
      <script>
         function openNav() {
           document.getElementById("mySidenav").style.width = "250px";
         }

         function closeNav() {
           document.getElementById("mySidenav").style.width = "0";
         }
      </script>
      <script type='text/javascript'>
         $(document).ready(function()
         {
         var url = $(location).attr('href');
         var parts = url.split("/");
         var last_part = parts[parts.length-1];


         switch(last_part) {
           case 'contact-list':
             document.getElementById("user").click();
             break;
           case 'report-ecogive-list':
             document.getElementById("user").click();
             break;
           case 'user-list':
             document.getElementById("user").click();
             break;

         case 'pledges-management':
             document.getElementById("pledge").click();
             break;

         case 'pledges-history':
             document.getElementById("pledge").click();
             break;

             case 'promo-code':
             document.getElementById("pledge").click();
             break;

         case 'protection-category-management':
             document.getElementById("pledge").click();
             break;
             case 'pledge-category-management':
             document.getElementById("pledge").click();
             break;

             case 'ecocare-list':
             document.getElementById("EcoCare").click();
             break;

             case 'ecocare-payment-request':
             document.getElementById("EcoCare").click();
             break;



             case 'ecocare-payment-history':
             document.getElementById("EcoCare").click();
             break;

             case 'ecogive-list':
             document.getElementById("EcoGive").click();
             break;

             case 'ecogive-donation-history':
             document.getElementById("EcoGive").click();
             break;

             case 'ecogive-fund-request':
             document.getElementById("EcoGive").click();
             break;

             case 'banner-management':
             document.getElementById("Settings").click();
             break;

             case 'category-management':
             document.getElementById("Settings").click();
             break;
             case 'faq-list':
             document.getElementById("Settings").click();
             break;
             case 'general-setting':
             document.getElementById("Settings").click();
             break;
             case 'email-content':
             document.getElementById("Settings").click();
             break;

         case 'content-management':
             document.getElementById("Settings").click();
             break;

         }



          });

      </script>

   </body>
</html>