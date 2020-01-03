<?php

use Illuminate\Http\Request;

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

Route::get('/seance','SeanceController@getSeances');
Route::get('/seance/dim/:{groupe}','SeanceController@getEDT_dim');
Route::get('/seance/lun/:{groupe}','SeanceController@getEDT_lun');
Route::get('/seance/mar/:{groupe}','SeanceController@getEDT_mar');
Route::get('/seance/mer/:{groupe}','SeanceController@getEDT_mer');
Route::get('/seance/jeu/:{groupe}','SeanceController@getEDT_jeu');
Route::get('/etu/{login}&{mdp}','EtudiantController@authentification');
Route::get('/etu/:{id}','EtudiantController@get_with_id');
Route::get('/absence/:{id_etudiant}','AbsenceController@get_with_id_etudiant');
