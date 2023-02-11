<?php

namespace App\Models\Admin;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia\HasMedia;
// use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Auth;
use DB;
use Storage;

class District extends Model
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
     public $table="districts";
     protected $fillable = [
        'name',
        'bank_name',
        'status',
        'created_at',
        'created_at',
        'deleted_at'
    ];

}