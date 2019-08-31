import { Component, OnInit } from '@angular/core';
import { PetService } from "../pet.service";
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})

export class PetListComponent implements OnInit {

  pets: Pet[];

  //obtains array of pets from pet service
  getPets(): void {
    this.petService.getPets()
      .subscribe(pets => this.pets = pets);
  }

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getPets();
  }
}

