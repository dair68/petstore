import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { PetDisplayComponent } from './pet-display/pet-display.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PetCarouselComponent } from './pet-carousel/pet-carousel.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetDeleteComponent } from './pet-delete/pet-delete.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    PetDisplayComponent,
    PetDetailsComponent,
    NavbarComponent,
    HomeComponent,
    PetCarouselComponent,
    PetListComponent,
    PetFormComponent,
    PetEditComponent,
    PetDeleteComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
