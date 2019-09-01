import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PetService } from '../pet.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  pet: Pet;
  petEditted = false;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPet();
  }

  //obtains pet to edit
  getPet() {
    const id = this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id)
      .subscribe(pet => this.pet = pet);
  }

  //goes back to previous page
  back() {
    this.location.back();
  }

  //submitting editted pet to API
  onSubmit() {
    this.petService.editPet(this.pet)
      .subscribe(pet => {
        console.log('pet editted: ' + pet);
        this.petEditted = true;
      });
  }
}
