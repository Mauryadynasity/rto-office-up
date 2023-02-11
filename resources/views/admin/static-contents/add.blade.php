@extends('layouts.adminDashboard')
@section('pageContent')
<style type="text/css">
    .textsizeset{
  color: red;
    font-size: 18px;
}
</style>
<div class="content-wrapper pt-2">
    <!--container-fluid-->
    <div class="container-fluid">
      
        <!-- Breadcrumbs-->
         <ol class="breadcrumb">
            <li class="breadcrumb-item active">Welcome! {{Auth::guard('admin')->user()->first_name}}</li>
        </ol>
        
		<div class="flash-message">
		    
        		<div class="login setext-left">
                
                <div class="dashobard-content">
            <div class="row"> 
                <div class="col-md-12"> 
                    <h1 class="subheading pb-3">Add Static Content</h1>
                </div>
                <p class="textsizeset">Listen carefully whenever you go to add <br> 1) Type one for review section, <br>2) Type two for our client section <br>3) Type three for Privacy Policy page <br>4) Type four for our product
                </p>
            </div>
            <div class="row form-row add-content">
                <div class="col-md-12"> 
                <form role="form" action="{{route('static-contents.store')}}" autocomplete="off" method="post" enctype="multipart/form-data">
                    {{ csrf_field() }}


                    <div class="form-row">
                        <div class="col-md-2">
                            <label>Section:<span style="color:red">*</span></label>
                        </div>
                        <div class="col-md-10">
                            <select class="form-control" onchange="jsFunction(this.value);" id="page_variable" name="section">
                            <option value="">Select Sections</option>
                            <option @if(old('section') == 'review') selected @endif value="review">Reviews</option>
                            <option @if(old('section') == 'our product') selected @endif value="our product">Our Product</option>
                            <option @if(old('section') == 'our clients') selected @endif value="our clients">Our Clients</option>
                            <option @if(old('section') == 'privacy policy') selected @endif value="privacy policy">Privacy Policy</option>
                           
                          </select>
                          @if ($errors->has('section'))
                            <small class="text-danger">{{ $errors->first('section') }}</small>
                          @endif
                        </div>
                    </div><br/>

                    <div class="form-row">
                        <div class="col-md-2">
                            <label>Title:<span style="color:red">*</span></label>
                        </div>
                        <div class="col-md-10">
                            <input type="text" name="title" class="form-control" placeholder="Enter Title" maxlength="100" value="{{old('title')}}">
                          @if ($errors->has('title'))
                            <small class="text-danger">{{ $errors->first('title') }}</small>
                          @endif
                        </div>
                    </div><br/>

                    

                   
                    <div class="form-row">
                        <div class="col-md-2">
                            <label>Content:<span style="color:red">*</span></label>
                        </div>
                        <div class="col-md-10">
                            <textarea name="content" class="form-control" maxlength="3000" placeholder="Enter Content">{{old('content')}}</textarea>
                            @if ($errors->has('content'))
                                <span class="text-danger set-fontsize">{{ $errors->first('content') }}</span>
                            @endif
                        </div>
                    </div><br/>


                <div class="form-row form-group">
                    <div class="col-md-2">
                                <label>Image:<span style="color:red">*</span></label>
                            </div>
                    <div class="col-md-10">
                      <div class="input-group">
                        <div class="custom-file">
                          <input type="file" class="custom-file-input" name="image">
                          <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                        </div>
                      </div>
                      <!-- <br> -->
                    <div class="uploaded-img">
                        <img src="" class='profile-img-tag' width="100" height="100" hidden>
                    </div>
                     @if ($errors->has('image'))
                        <small class="text-danger" id="errorMessage">{{ $errors->first('image') }}</small>
                    @endif
                    </div>
                  </div>
                        
                  <div class="form-row">
                        <div class="col-md-2">
                            <label>Type:<span style="color:red">*</span></label>
                        </div>
                        <div class="col-md-10">
                            <input type="text" name="type" class="form-control" placeholder="Enter type" maxlength="100" value="{{old('type')}}">
                          @if ($errors->has('type'))
                            <small class="text-danger">{{ $errors->first('type') }}</small>
                          @endif
                        </div>
                    </div><br/>
                    
                    <div class="form-row form-btn">
                      <div class="col-md-2"></div>
                      <div class="col-lg-2 col-md-3 col-sm-3 col-5">
                        <button class="btn btn-primary"><b>Submit</b></button> 
                      </div>
                      <div class="col-lg-2 col-md-3 col-sm-3 col-5">
                        <a class="text-decoration-none btn btn-primary" href="{{url('admin/static-contents')}}"><b>Back</b> </a>
                      </div>
                    </div> 
                </form>
            </div>

            </div>
        </div>

            </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
  
$(document).on('change','input[type=file]',function(){
    var ext = $(this).val().split('.').pop().toLowerCase();
    // alert(ext);
    var allowedTypes = ['png','jpeg','jpg'];
    $(this).parents('.form-group').find('.text-danger').text('');
    var err = 0;
    let el = $(this).parents('.form-group').find('.profile-img-tag');
    if($.inArray(ext,allowedTypes) == -1) {
      $(this).parents('.form-group').find('.text-danger').text('Invalid extension! Only '+allowedTypes+' are allowed.');
      err = 1;
    }
    else if (this.files && this.files[0].size/(1000*1000) > 1000) {
      $(this).parents('.form-group').find('.text-danger').text('File size should not be greater than 1000 MB.');
      err = 1;
    }
    if (err) {
      $(this).val('');
      el.attr('hidden','hidden');
    }
    else {
      var reader = new FileReader();
      reader.onload = function (e) {
        el.removeAttr('hidden');
        el.attr('src', e.target.result);
        $('.preview_image').addClass('hidden');
      }
      reader.readAsDataURL(this.files[0]);
    }
  });

function jsFunction(value)
{
    $.ajax({
        type: 'get',
        url: '{{ URL("admin/count-program") }}',
        data: {
          '_token': '{{ csrf_token() }}',
         value : value,
        },
        success: function(response) {
        if(response.count >= 4){
            swal({
                    text:"Our programm can not add more then 4 ",
                    icon: "error",
                  })
                  .then((willDelete) => {
                    $('#page_variable').val("");
            });
                          
        }
        },
      });
}

// if($('#page_variable').val() == 'message_from_ceo'){
//     $('#ceo_name').show();
//     $('#position').show();
// }else{
//     // $('#amount').show();
//     $('#ceo_name').hide();
//     $('#position').hide();
// }
// $("#page_variable").on('change', function(){
// if($(this).val() == 'message_from_ceo'){
//    $('#ceo_name').show();
//    $('#position').show();
// }
// else{
//     $('#ceo_name').hide();
//     $('#position').hide();
// }
// });
</script>

@endsection
