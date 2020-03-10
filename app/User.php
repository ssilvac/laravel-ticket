<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    public function userprofile()
    {
        return $this->hasOne('App\UserProfile', 'id');
    }

    public function tickets()
    {
        return $this->hasMany('App\Ticket', 'user_id', 'id');
    }

    public function isAdmin()
    {
        if( $this->userprofile->name == 'Admin' ){
            return true;
        }

        return false;
    }

    public $timestamps = false;
}
