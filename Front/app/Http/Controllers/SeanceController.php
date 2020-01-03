<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\SeanceResource;
use App\Http\Resources\SeanceCollection;
use App\Seance;

class SeanceController extends Controller
{
    public function getSeances()
	{
        
        // return SeanceResource::collection(Seance::all());
        return new SeanceCollection(Seance::all());
    }
    
    public function getEDT_dim($groupe)
    {
        $collection = new SeanceCollection(Seance::all());
        $filtered = $collection->where('groupe', $groupe);
        $filtered = $filtered->where('jour', 'Dimanche');
        $sorted = $filtered->sortby('heureDebut');
        $sorted = $sorted->values() ;

        return $sorted;
    }
    
    public function getEDT_lun($groupe)
    {
        $collection = new SeanceCollection(Seance::all());
        $filtered = $collection->where('groupe', $groupe);
        $filtered = $filtered->where('jour', 'Lundi');
        $sorted = $filtered->sortby('heureDebut');
        $sorted = $sorted->values() ;

        return $sorted;
    }
    
    public function getEDT_mar($groupe)
    {
        $collection = new SeanceCollection(Seance::all());
        $filtered = $collection->where('groupe', $groupe);
        $filtered = $filtered->where('jour', 'Mardi');
        $sorted = $filtered->sortby('heureDebut');
        $sorted = $sorted->values() ;

        return $sorted;
    }
    
    public function getEDT_mer($groupe)
    {
        $collection = new SeanceCollection(Seance::all());
        $filtered = $collection->where('groupe', $groupe);
        $filtered = $filtered->where('jour', 'Mercredi');
        $sorted = $filtered->sortby('heureDebut');
        $sorted = $sorted->values() ;

        return $sorted;
    }
    
    public function getEDT_jeu($groupe)
    {
        $collection = new SeanceCollection(Seance::all());
        $filtered = $collection->where('groupe', $groupe);
        $filtered = $filtered->where('jour', 'Jeudi');
        $sorted = $filtered->sortby('heureDebut');
        $sorted = $sorted->values() ;

        return $sorted;
    }
    
    
}
