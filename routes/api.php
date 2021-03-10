<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', 'API\AuthController@login');
Route::middleware('auth:api')->group(function () {
    Route::post('/check-auth', 'API\AuthController@checkAuth');
    Route::post('/logout', 'API\AuthController@logout');
    Route::post("/records", 'API\DataController@records');
    Route::post("/records-save", 'API\DataController@save_records');
    Route::post("/records-delete", 'API\DataController@delete_records');
});
//for out access
Route::post('/token/receive', 'API\TokenController@receiveTokenFromOut');
