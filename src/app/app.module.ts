import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PetDisplayComponent } from './pet-display/pet-display.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PetCarouselComponent } from './pet-carousel/pet-carousel.component';
import { PetListComponent } from './pet-list/pet-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PetDisplayComponent,
    PetDetailsComponent,
    PetFormComponent,
    NavbarComponent,
    HomeComponent,
    PetCarouselComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
