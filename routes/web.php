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
    return view('welcome');
});

Auth::routes();

Route::get('/getAllUsers', 'UserController@getAllUsers');
Route::get('/getTickets', 'TicketController@getTickets');
Route::get('/getAllTickets', 'TicketController@getAllTickets');
Route::post('/createTicket', 'TicketController@createTicket');
Route::get('/takeTicket/{id}', 'TicketController@takeTicket');

Route::get('/{path?}', 'HomeController@index')->name('home');
