<?php

namespace App;
use App\Helpers\ConstantHelper;
use App\Models\Role;
use App\Models\Address;
use App\Models\Admin\District;
use Illuminate\Notifications\Notifiable;
// use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

use App\Services\Mailers\Mailer;

class Admin extends Authenticatable implements HasMedia
{
    use Notifiable, SoftDeletes, HasMediaTrait;

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
     public $table="admin";
     protected $fillable = [
        'name',
        'user_name',
        'password',
        'has_password',
        'email',
        'role',
        'is_email_verified',
        'mobile',
        'is_mobile_verified',
        'two_step_verification',
        'remember_token',
        'date_of_birth',
        'gender',
        'admin_type',
        'district_id',
        'marital_status',
        'status',
        'company_name',
        'tax_exempt',
        'currency_id',
        'country_id',
        'social_link_id',
        'reseller_id',
        'created_at',
        'updated_at'
    ];
    protected $hidden = [
        'password', 'remember_token', 'deleted_at', 'media'
    ];

    public function setPasswordAttribute($password)
    {
        if (!is_null($password))
            $this->attributes['password'] = bcrypt($password);
    }

    public function addresses()
    {
        return $this->morphMany(Address::class, 'addressable')
            ->with('city', 'state', 'country');
    }

    public function address()
    {
        return $this->morphOne(Address::class, 'addressable')
            ->with('city', 'state', 'country');
    }


    public function registerMediaCollections()
    {
        $this->addMediaCollection('profile_image_url')
            ->singleFile();
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function hasRole($role)
    {
        $roles = $this->roles()->pluck('alias')->toArray();
        return in_array($role, $roles);
    }

    public function hasRoles($roles)
    {
        $userRoles = $this->roles()->pluck('alias')->toArray();
        foreach ($roles as $role) {
            if (in_array($role, $userRoles)) {
                return true;
            }
        }
        return false;
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function can($permission, $arguments = [])
    {
        // dd($permission);
        foreach ($this->roles as $role) {
            if ($role->name == 'Super Admin') {
                return true;
            }
            if ($role->can($permission)) {
                return true;
            }
        }
        return false;
    }

    public function getPermissionsAttribute()
    {
        $permissions = [];
        foreach ($this->roles as $role) {
            $rolePermissions = [];
            foreach ($role->permissions as $permission) {
                $rolePermissions[] = $permission->type . '.' . $permission->name;
            }
            $permissions = array_merge($permissions, $rolePermissions);
        }
        return $permissions;
    }

    public function District()
    {
        return $this->hasOne(District::class, 'id','district_id');
    }

}