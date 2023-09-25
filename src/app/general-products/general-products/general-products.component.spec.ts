import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralProductsComponent } from './general-products.component';

describe('GeneralProductsComponent', () => {
  let component: GeneralProductsComponent;
  let fixture: ComponentFixture<GeneralProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralProductsComponent]
    });
    fixture = TestBed.createComponent(GeneralProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
