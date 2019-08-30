import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

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
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
