import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutConfirmDialogComponent } from './logout-confirm-dialog.component';

describe('LogoutConfirmDialogComponent', () => {
  let component: LogoutConfirmDialogComponent;
  let fixture: ComponentFixture<LogoutConfirmDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutConfirmDialogComponent]
    });
    fixture = TestBed.createComponent(LogoutConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
