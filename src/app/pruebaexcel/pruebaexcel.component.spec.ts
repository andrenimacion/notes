import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaexcelComponent } from './pruebaexcel.component';

describe('PruebaexcelComponent', () => {
  let component: PruebaexcelComponent;
  let fixture: ComponentFixture<PruebaexcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaexcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
