import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppointmentListComponent } from './update-appointment-list.component';

describe('UpdateAppointmentListComponent', () => {
  let component: UpdateAppointmentListComponent;
  let fixture: ComponentFixture<UpdateAppointmentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAppointmentListComponent]
    });
    fixture = TestBed.createComponent(UpdateAppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
