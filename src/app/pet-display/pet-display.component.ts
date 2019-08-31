import { Component, OnInit } from '@angular/core';
import {PetService} from "../pet.service";
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css']
})
export class PetDisplayComponent implements OnInit {

  displayPets: [];

  //obtaining pet array from server
  getPets(): void {
    this.petService.getImages()
    .subscribe(images => this.displayPets = images);
  }

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getPets();
  }

}
