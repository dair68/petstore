import { Component, OnInit, Input } from '@angular/core';
import { PetService } from "../pet.service";
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})

export class PetListComponent implements OnInit {

  @Input() petlist: Pet[];

  constructor() { }

  ngOnInit() {
  }
}

