import { Injectable } from '@angular/core';
import { Pet } from "./pet"

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PetService {
  //requests an array of pets from pet API
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl + '/pets').
      pipe(
        tap(_ => console.log('fetched pets')),
        catchError(this.handleError<Pet[]>('getPets', []))
      );
  }

  //requests single pet from pet API using pet id
  getPet(id: string): Observable<Pet> {
    return this.http.get<Pet>(this.petsUrl + '/pet/' + id).
      pipe(
        tap(_ => console.log(`fetched pet ${id}`)),
        catchError(this.handleError<Pet>('getPet'))
      );
  }

  //petInfo array contains all pet parameters except id
  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.petsUrl + '/pet', pet, this.httpOptions)
    .pipe(
      tap(pet => console.log('added pet ' + pet._id)),
      catchError(this.handleError<Pet>('addPet'))
    );
  }

  // removePet(id): void {
  //   let petIndex = pets.findIndex(pet => pet.id == id);
  //   pets.splice(petIndex, 1);
  // }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private petsUrl = '/api';  // URL to web api

  //needed to ensure data sent in req.body correctly
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
}
