import { Component, OnInit } from '@angular/core';
import {PetService} from "../pet.service";
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css']
})
export class PetDisplayComponent implements OnInit {

  pets: Pet[]

  getPets(): void {
    this.petService.getPets()
    .subscribe(pets => {
      this.petService.pets = pets;
      this.pets = this.petService.pets;
    });
  }

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getPets();
  }

}
