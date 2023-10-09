import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListDashComponent } from './patient-list-dash.component';

describe('PatientListDashComponent', () => {
  let component: PatientListDashComponent;
  let fixture: ComponentFixture<PatientListDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientListDashComponent]
    });
    fixture = TestBed.createComponent(PatientListDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
