<?php

use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('user.index');
});
    Route::get('login', 'App\Http\Controllers\User\UserController@login');
    Route::post('enquery-login', 'App\Http\Controllers\User\UserController@enqueryLogin');
    Route::post('enquery-login-otp', 'App\Http\Controllers\User\UserController@enqueryLoginOtp');
    Route::get('logout', 'App\Http\Controllers\User\UserController@logout');
    Route::get('register', 'App\Http\Controllers\User\UserController@register');
    Route::get('forgot-password', 'App\Http\Controllers\User\UserController@forgotPassword');
    Route::post('send-password', 'App\Http\Controllers\User\UserController@sendPassword');
    Route::get('status', 'App\Http\Controllers\User\UserController@status');
    Route::post('user-registration', 'App\Http\Controllers\User\UserController@userRegistration');

Route::group(['middleware' => 'auth'], function () {
    Route::get('change-password', 'App\Http\Controllers\User\UserController@changePassword')->name('changePassword');
    Route::post('change-password', 'App\Http\Controllers\User\UserController@changePasswordSave');
    Route::group(['middleware' => 'userFirstLogin'], function () {
            Route::get('dashboard', 'App\Http\Controllers\User\UserController@dashboard');
            Route::post('upload-photo', 'App\Http\Controllers\User\UserController@uploadPhoto');
            Route::post('update-profile', 'App\Http\Controllers\User\UserController@updateProfile');
    });
});

    

// Bank details urls
    Route::get('bank-detail', 'App\Http\Controllers\User\BankDetails\BankDetailController@bankDetailForm');
    Route::post('save-bank-details', 'App\Http\Controllers\User\BankDetails\BankDetailController@saveBankDetails');

// Application form urls
    Route::get('application-form', 'App\Http\Controllers\User\Application\ApplicationController@applicationForm');
    Route::post('save-application-form','App\Http\Controllers\User\Application\ApplicationController@saveApplicationForm');


// OTR Related Routes
Route::post('otp-send', 'App\Http\Controllers\User\OtpController@otpSend');
Route::post('otp-send-login', 'App\Http\Controllers\User\OtpController@otpSendLogin');
// Route::post('save-application-form', 'App\Http\Controllers\User\Application\ApplicationController@saveApplicationForm');