import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListDashComponent } from './doctor-list-dash.component';

describe('DoctorListDashComponent', () => {
  let component: DoctorListDashComponent;
  let fixture: ComponentFixture<DoctorListDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorListDashComponent]
    });
    fixture = TestBed.createComponent(DoctorListDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
