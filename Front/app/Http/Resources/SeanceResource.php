<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Seance;


class SeanceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'jour' => $this->jour,
            'heureDebut' => $this->heureDebut,
            'heureFin' => $this->heureFin,
            'enseignant' => $this->enseignant,
            'salle' => $this->salle,
            'module' => $this->module,
            'groupe' => $this->groupe,
        ];
    }
}
