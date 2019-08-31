import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-carousel',
  templateUrl: './pet-carousel.component.html',
  styleUrls: ['./pet-carousel.component.css']
})
export class PetCarouselComponent implements OnInit {
  
  displayedPets: Pet[]

  //obtains 5 pets from server and displays them in carousel
  displayPets(): void {
    this.petService.getPets()
    .subscribe(pets => this.displayedPets = pets.slice(0, 5));
  }

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.displayPets();
  }
}
