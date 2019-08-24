import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCarouselComponent } from './pet-carousel.component';

describe('PetCarouselComponent', () => {
  let component: PetCarouselComponent;
  let fixture: ComponentFixture<PetCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
