import { Injectable } from '@angular/core';
import { Pet } from "./pet"

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PetService {
  getPets(numPets=0): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl + '/pets/' + numPets);
  }

  getPet(id): Observable<Pet> {
    return this.http.get<Pet>(this.petsUrl + '/pet-details/' + id);
  }

  addPet(pet): void {
    this.http.post(this.petsUrl, {pet: pet});
  }

  // removePet(id): void {
  //   let petIndex = pets.findIndex(pet => pet.id == id);
  //   pets.splice(petIndex, 1);
  // }

  private petsUrl = '/api';  // URL to web api

  constructor(private http: HttpClient) { }
}
