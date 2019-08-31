import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

import {PetService} from '../pet.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  model = new Pet();
  submitted = false;

  onSubmit() {
    this.model.species = this.model.species.toLowerCase();

    this.petService.addPet(this.model)
    .subscribe(pet => {
      this.petService.pets.push(pet);
      this.model._id = pet._id;
    });
    
    this.submitted = true;
  }

  constructor(private petService: PetService) { }

  ngOnInit() {
  }

}
