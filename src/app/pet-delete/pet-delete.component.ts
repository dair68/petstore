import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-delete',
  templateUrl: './pet-delete.component.html',
  styleUrls: ['./pet-delete.component.css']
})
export class PetDeleteComponent implements OnInit {

  pets: Pet[]

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getPets();
  }

  getPets() {
    this.petService.getPets()
      .subscribe(pets => this.pets = pets);
  }

  deletePet(pet: Pet) {
    this.pets = this.pets.filter(p => p !== pet);
    this.petService.deletePet(pet).subscribe();
  }
}
