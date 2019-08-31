import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})

export class PetFormComponent implements OnInit {

  model = new Pet();
  submitted = false;

  //form submit handler. sends pet to server
  onSubmit() {
    //standardizing inputs
    this.model.species = this.model.species.toLowerCase();
    this.model.price = +(this.model.price.toFixed(2));

    //adding pet to database
    this.petService.addPet(this.model)
      .subscribe(pet => {
        this.model._id = pet._id;
      });

    this.submitted = true;
  }

  constructor(private petService: PetService) { }

  ngOnInit() {
  }

}
