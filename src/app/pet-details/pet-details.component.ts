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

  getPet(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id)
    .subscribe(pet => this.pet = pet);
  }

  sellPet() {
    this.pet.in_stock = false;
  }
  
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
