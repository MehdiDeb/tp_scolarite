<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\EtudiantResource;
use App\Http\Resources\EtudiantCollection;
use App\Etudiant;


class EtudiantController extends Controller
{
    public function authentification($login,$mdp)
	{
        $collection = new EtudiantCollection(Etudiant::all());
        $filtered = $collection->where('login', $login);
        $filtered = $filtered->where('mdp', $mdp);
        $etudiant = $filtered->first();
        
        // try{
        //     $etudiant = Etudiant::findOrFail();
        // } catch (ModelNotFoundException $exception) {

        // }
        
        // return SeanceResource::collection(Seance::all());
        //if($etudiant!==null)
         return $etudiant;

    }
    
    public function get_with_id($id)
	{
        $collection = new EtudiantCollection(Etudiant::all());
        $filtered = $collection->where('id', $id);
        $etudiant = $filtered->first();
         return $etudiant;

    }
}
