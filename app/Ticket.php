<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $table = 'tickets';

    public function user()
    {
        return $this->hasOne('App\User', 'id', 'user_id');
    }
}
