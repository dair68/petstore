import { Injectable, ɵsetCurrentInjector } from '@angular/core';
import { Pet } from "./pet"

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PetService {

  private petsUrl = '/api';  // URL to web api

  //needed to ensure data sent in req.body correctly
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  //requests an array of pets from pet API
  getPets(): Observable<Pet[]> {
    const url = this.petsUrl + '/pets';

    //making call to API
    return this.http.get<Pet[]>(url)
      .pipe(
        tap(_ => console.log('fetched pets')),
        catchError(this.handleError<Pet[]>('getPets', []))
      );
  }

  //requests pet images from pet API
  getImages(num = 0): Observable<[]> {
    const url = this.petsUrl + '/pets/images/' + num;

    //making call to API
    return this.http.get<[]>(url)
      .pipe(
        tap(_ => console.log('fetched images')),
        catchError(this.handleError<[]>('getImages', []))
      );
  }

  //requests single pet from pet API using pet id
  getPet(id: string): Observable<Pet> {
    const url = this.petsUrl + '/pet/' + id;

    //making call to API
    return this.http.get<Pet>(url)
      .pipe(
        tap(_ => console.log(`fetched pet ${id}`)),
        catchError(this.handleError<Pet>('getPet'))
      );
  }

  //purchases pet from pet API
  purchasePet(pet: Pet): Observable<Pet> {
    const url = this.petsUrl + '/pet/sell/' + pet._id;

    //making call to API
    return this.http.put<Pet>(url, pet, this.httpOptions)
      .pipe(
        tap(_ => console.log('purchased pet ' + pet._id)),
        catchError(this.handleError<Pet>('purchasePet'))
      );
  }

  //edits pet in API
  editPet(pet: Pet): Observable<Pet> {
    const url = this.petsUrl + '/pet/' + pet._id;

    //making call to API
    return this.http.put<Pet>(url, pet, this.httpOptions)
      .pipe(
        tap(_ => console.log('editted pet ' + pet._id)),
        catchError(this.handleError<Pet>('editPet'))
      );
  }

  //petInfo array contains all pet parameters except id
  addPet(pet: Pet): Observable<Pet> {
    const url = this.petsUrl + '/pet';

    //making call to API
    return this.http.post<Pet>(url, pet, this.httpOptions)
      .pipe(
        tap(pet => console.log('added pet ' + pet._id)),
        catchError(this.handleError<Pet>('addPet'))
      );
  }

  //api call to delete pet from database
  deletePet(pet: Pet): Observable<Pet> {
    const url = this.petsUrl + '/pet/' + pet._id;

    //making call to API
    return this.http.delete<Pet>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log('deleted pet ' + pet._id)),
        catchError(this.handleError<Pet>('deletePet'))
      );
  }

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
}
