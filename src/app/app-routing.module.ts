import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDisplayComponent } from './pet-display/pet-display.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { HomeComponent } from './home/home.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetDisplayComponent },
  { path: 'pet-list', component: PetListComponent },
  { path: 'pet/:id', component: PetDetailsComponent },
  { path: 'pet-edit/:id', component: PetEditComponent },
  { path: 'pet-form', component: PetFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
