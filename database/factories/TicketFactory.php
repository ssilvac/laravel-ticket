<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Ticket;
use Faker\Generator as Faker;

$factory->define(Ticket::class, function (Faker $faker) {
    return [
        'user_id' => rand(2,5),
        'ticket_pedido' => rand(0,1),
        'desc' => $faker->text(200),
    ];
});
