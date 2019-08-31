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

  //obtaining pet array from server
  getPets(): void {
    this.petService.getPets()
    .subscribe(pets => this.pets = pets);
  }

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getPets();
  }

}
