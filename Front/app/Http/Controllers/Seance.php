<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\SeanceResource;

class Seance extends Controller
{
    public function test()
	{
        
		return new SeanceResource(Seance::all());
    }
}
