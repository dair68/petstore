import { Component, OnInit } from '@angular/core';
import {Pet} from "../pet";
import {PetService} from "../pet.service";

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  model = new Pet(0, "", "", "", "", false, "", 0);

  submitted = false;

  onSubmit() {
    this.submitted = true;
    let pets = this.petService.getPets()
    .subscribe(function(pets) {
      let prevId = pets[pets.length - 1].id;
      this.model.id = prevId + 1;
      this.model.in_stock = true;
      this.petService.addPet(this.model);
      this.model = new Pet(0, "", "", "", "", false, "", 0);
    });
  }

  constructor(private petService: PetService) { }

  ngOnInit() {
  }

}
