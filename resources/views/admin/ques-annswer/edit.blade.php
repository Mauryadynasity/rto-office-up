@extends('layouts.adminDashboard')
@section('pageContent')
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
                    <h1 class="subheading pb-3">Edit Question & Answer</h1>
                </div>
            </div>
            <div class="row form-row add-content">
                <div class="col-md-12"> 
                <form role="form" autocomplete="off" action="{{url('admin/ques-ans/'.$content->id)}}" enctype="multipart/form-data" method="post">
                    @method('PUT')
                    {{ csrf_field() }}  


                    <div class="form-row">
                        <div class="col-md-2">
                            <label>Question's:<span style="color:red">*</span></label>
                        </div>
                        <div class="col-md-10">
                            <input type="text" name="question" class="form-control" placeholder="Enter question here " maxlength="200" value="{{ $content->question }}">
                          @if ($errors->has('question'))
                            <small class="text-danger">{{ $errors->first('question') }}</small>
                          @endif
                        </div>
                    </div><br/>
                   
                    <div class="form-row">
                        <div class="col-md-2">
                            <label>Answer:<span style="color:red">*</span></label>
                        </div>
                        <div class="col-md-10">
                            <textarea class="form-control" id="summernote" name="answer">{{ old('answer') ? old('answer') : $content->answer}}</textarea>

                            <!-- <textarea  name="answer" class="form-control" maxlength="3000" placeholder="Enter answer">{{ old('answer') ? old('answer') : $content->answer}}</textarea> -->
                            @if ($errors->has('answer'))
                                <span class="text-danger set-fontsize">{{ $errors->first('answer') }}</span>
                            @endif
                        </div>
                    </div><br/>  

                    <div class="form-row">
                        <div class="col-md-2">
                            <label>Type:<span style="color:red">*</span></label>
                        </div>
                        <div class="col-md-10">
                            <input type="text" name="type" class="form-control numbersOnly" placeholder="Enter type here Exp (1/2) Number's only" maxlength="30" value="{{ $content->type }}">
                          @if ($errors->has('type'))
                            <small class="text-danger">{{ $errors->first('type') }}</small>
                          @endif
                        </div>
                    </div><br/>   
                    <input type="hidden" name="id" value="{{$content->id}}"> 
                    
                    <div class="form-row form-btn">
                      <div class="col-md-2"></div>
                      <div class="col-lg-2 col-md-3 col-sm-3 col-5">
                        <button class="btn btn-primary"><b>Submit</b></button> 
                      </div>
                      <div class="col-lg-2 col-md-3 col-sm-3 col-5">
                        <a class="text-decoration-none btn btn-primary" href="{{url('admin/ques-ans')}}"><b>Back</b> </a>
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
 $('.numbersOnly').keyup(function() {
            this.value = this.value.replace(/[^0-9\.]/g, '');
        });

 $(document).ready(function() {
      $('#summernote').summernote();
    });
</script>

@endsection
