import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcategoryComponent } from './allcategory.component';

describe('AllcategoryComponent', () => {
  let component: AllcategoryComponent;
  let fixture: ComponentFixture<AllcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllcategoryComponent]
    });
    fixture = TestBed.createComponent(AllcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
