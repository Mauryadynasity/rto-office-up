<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin;


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
    return view('admin.admin');
});
    Route::post('login', [Admin\LoginController::class,'login']);
    Route::get('logout', [Admin\LoginController::class,'logout']);
Route::group(['middleware'=>'admin'], function () {
    Route::get('dashboard', [Admin\UserController::class,'dashboard']);
    Route::resource('user', Admin\UserController::class);
    Route::resource('application', Admin\ApplicationController::class);

});
    

    // -------Change Password Route---------------//
    Route::get('change-password', [Admin\LoginController::class,'changePassword'])->name('admin.changePassword');
    Route::post('change-password/save', [Admin\LoginController::class,'changePasswordSave'])->name('admin.changePasswordSave');
    

    // -------Change Password Route---------------//
    // Route::get('change-password', [Admin\LoginController::class,'changePassword'])->name('admin.changePassword');
    // Route::post('change-password/save', [Admin\LoginController::class,'changePasswordSave'])->name('admin.changePasswordSave');

    


