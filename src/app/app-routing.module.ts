import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDisplayComponent } from './pet-display/pet-display.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { HomeComponent } from './home/home.component';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetDisplayComponent },
  { path: 'petlist', component: PetListComponent },
  { path: 'details/:id', component: PetDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
