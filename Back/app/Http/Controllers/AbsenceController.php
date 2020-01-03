<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\AbsenceResource;
use App\Http\Resources\AbsenceCollection;
use App\Absence;

class AbsenceController extends Controller
{
    public function get_with_id_etudiant($id_etudiant)
	{
        $collection = new AbsenceCollection(Absence::all());
        $filtered = $collection->where('id_etudiant', $id_etudiant);
        $absence = $filtered->values() ;

       return $absence;

    }

}
