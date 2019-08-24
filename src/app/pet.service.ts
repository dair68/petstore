import { Injectable } from '@angular/core';
import { pets } from "./sample_pets";
import { Pet } from "./pet"

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PetService {
  getPets(): Observable<Pet[]> {
    console.log("obtained pets");
    return of(pets);
  }

  getPet(id): Observable<Pet> {
    console.log("obtained pet " + id);
    return of(pets.find(pet => pet.id == id));
  }

  addPet(pet): void {
    pets.push(pet);
  }

  removePet(id): void {
    let petIndex = pets.findIndex(pet => pet.id == id);
    pets.splice(petIndex, 1);
  }

  constructor() { }
}
