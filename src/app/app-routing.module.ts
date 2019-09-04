import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDisplayComponent } from './pet-display/pet-display.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { HomeComponent } from './home/home.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetDeleteComponent } from './pet-delete/pet-delete.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetDisplayComponent },
  { path: 'pet-list', component: CatalogueComponent },
  { path: 'pet/:id', component: PetDetailsComponent },
  { path: 'pet-edit/:id', component: PetEditComponent },
  { path: 'pet-form', component: PetFormComponent },
  { path: 'pets/remove', component: PetDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
