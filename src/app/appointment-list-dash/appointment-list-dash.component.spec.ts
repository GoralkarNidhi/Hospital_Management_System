import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListDashComponent } from './appointment-list-dash.component';

describe('AppointmentListDashComponent', () => {
  let component: AppointmentListDashComponent;
  let fixture: ComponentFixture<AppointmentListDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentListDashComponent]
    });
    fixture = TestBed.createComponent(AppointmentListDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
