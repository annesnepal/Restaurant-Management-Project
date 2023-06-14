import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestroComponent } from './add-restro.component';

describe('AddRestroComponent', () => {
  let component: AddRestroComponent;
  let fixture: ComponentFixture<AddRestroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRestroComponent]
    });
    fixture = TestBed.createComponent(AddRestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
