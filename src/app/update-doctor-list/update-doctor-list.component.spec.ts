import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDoctorListComponent } from './update-doctor-list.component';

describe('UpdateDoctorListComponent', () => {
  let component: UpdateDoctorListComponent;
  let fixture: ComponentFixture<UpdateDoctorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDoctorListComponent]
    });
    fixture = TestBed.createComponent(UpdateDoctorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
