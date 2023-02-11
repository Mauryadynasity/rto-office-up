<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\File;
use Auth;
use DB;
use Storage;

class Application extends Model implements HasMedia
{
    use HasMediaTrait,SoftDeletes;

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
     public $table="application";
     protected $fillable = [
        'user_id',
        'scheme_id',
        'owner_name',
        'application_number',
        'vehical_name',
        'registration_number',
        'chassis_number',
        'engine_number',
        'fuel_type',
        'model_name',
        'color',
        'status',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
    protected $appends = [
        'upload_file',
    ];

    public function getUploadFileAttribute()
    {
        if ($this->getMedia('upload_file')->isEmpty()) {
            return false;
        }else{
            return $this->getMedia('upload_file')->first()->getFullUrl();
        }
    }
    public function registerMediaCollections()
    {
        $this->addMediaCollection('upload_file')
            ->singleFile();
     }

}