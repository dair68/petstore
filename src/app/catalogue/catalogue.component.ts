import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {

  pets: Pet[];

  species = [
    'dog',
    'cat',
    'rabbit',
    'fish',
    'bird',
    'other'
  ];

  inputs = {
    name: '',
    species: '',
    sex: '',
    in_stock: ''
  }

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.searchPets();
  }

  //obtains array of pets from pet service
  searchPets(): void {
    this.petService.searchPets(this.inputs)
      .subscribe(pets => this.pets = pets);
  }


}


