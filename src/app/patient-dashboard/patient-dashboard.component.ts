import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit{

  patientList: any;
  patientid: any;
  patient: any;
  
  constructor(private doctorService:AddDoctorService, 
   private router:Router){
 
  }
 
  ngOnInit(): void {

    console.log("this.ngOnInit");
    this.patientid=localStorage.getItem('currentPatient');
    this.doctorService.getPatientById(this.patientid).subscribe(
     (Response:any)=>{
      console.log(this.patientid)
      console.log("inside patient");
       this.patient=Response;
     }
    );



        this.doctorService.getAllPatients().subscribe(
     (Response)=>{
         this.patientList=Response;
       }
      )
  }
 

 
 
 }