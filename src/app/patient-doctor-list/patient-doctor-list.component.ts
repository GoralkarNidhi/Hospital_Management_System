import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';

@Component({
  selector: 'app-patient-doctor-list',
  templateUrl: './patient-doctor-list.component.html',
  styleUrls: ['./patient-doctor-list.component.css']
})
export class PatientDoctorListComponent implements OnInit{

  doctorList: any;
 
  constructor(private doctorService:AddDoctorService){
 
  }
 
  ngOnInit(): void {
      this.doctorService.getAllDoctors().subscribe(
       (Response)=>{
         this.doctorList=Response;
       }
      )
 
  }
 
}
