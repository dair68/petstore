import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/pet';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PetService } from 'src/app/pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  @Input() pet: Pet;
  petPurchased = false;

  //obtains details for a certain pet based on id in url
  getPet(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id)
    .subscribe(pet => this.pet = pet);
  }

  buyPet() {
    this.petService.purchasePet(this.pet)
    .subscribe(pet => {
      this.pet = pet;
      this.petPurchased = true;
    });
  }
  
  //returns user to previously visited page
  back(): void {
    this.location.back();
  }

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPet();
  }

}
