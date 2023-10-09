import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientListComponent } from './update-patient-list.component';

describe('UpdatePatientListComponent', () => {
  let component: UpdatePatientListComponent;
  let fixture: ComponentFixture<UpdatePatientListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePatientListComponent]
    });
    fixture = TestBed.createComponent(UpdatePatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
