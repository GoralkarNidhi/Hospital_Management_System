import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDoctorListComponent } from './patient-doctor-list.component';

describe('PatientDoctorListComponent', () => {
  let component: PatientDoctorListComponent;
  let fixture: ComponentFixture<PatientDoctorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDoctorListComponent]
    });
    fixture = TestBed.createComponent(PatientDoctorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
