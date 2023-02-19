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
        'rto_status',
        'ho1_status',
        'ho2_status',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
    protected $appends = [
        'upload_file',
        'rto_status_text',
        'ho1_status_text',
        'ho2_status_text',
    ];

    public function getRtoStatusTextAttribute()
    {
        $status = StatusMaster::find($this->rto_status);
        if($status){
            return $status->status_name;
        }else{
            return '';
        }
    }
    public function getHo1StatusTextAttribute()
    {
        $status = StatusMaster::find($this->ho1_status);
        if($status){
            return $status->status_name;
        }else{
            return '';
        }
    }
    public function getHo2StatusTextAttribute()
    {
        $status = StatusMaster::find($this->ho2_status);
        if($status){
            return $status->status_name;
        }else{
            return '';
        }
    }
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