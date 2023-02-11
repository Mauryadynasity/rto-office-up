<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia\HasMedia;
// use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Auth;
use DB;
use Storage;

class BankDetails extends Model
{
    use SoftDeletes;

    /** By Abhishek
     * The attributes that are mass assignable.
     *
     * @var array
     */


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
     public $table="bank_details";
     protected $fillable = [
        'user_id',
        'bank_name',
        'district_name',
        'ifsc_code',
        'branch_name',
        'account_number',
        'branch_address',
        'status',
        'created_at',
        'created_at',
        'deleted_at'
    ];

}