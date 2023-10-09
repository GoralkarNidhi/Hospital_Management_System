import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list-dash',
  templateUrl: './patient-list-dash.component.html',
  styleUrls: ['./patient-list-dash.component.css']
})
export class PatientListDashComponent implements OnInit{

  patientList: any;
 
  constructor(private doctorService:AddDoctorService, 
   private router:Router){
 
  }
 
  ngOnInit(): void {
      this.doctorService.getAllPatients().subscribe(
       (Response)=>{
         this.patientList=Response;
       }
      )
 
  }
 
   public updatePatientlist(patientid:number){
       this.router.navigate(['/update-patient-list',patientid]);
   }
 
   public deletePatientList(patientid:number){
     this.doctorService.deletePatientList(patientid).subscribe(
       (data:any)=>{
           alert("user deleted successfully....!");
           this.patientList=data;
           this.router.navigate(['/doctor-list-dash']);
       }
     )
 }
 
 
 }
 