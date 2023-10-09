import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit{

  doctorList: any;
  doctorId:any;
  doctor: any;

  doctorid: any;
  countOfAppointment:any;
  
  constructor(private doctorService:AddDoctorService, 
   private router:Router){
 
  }
 
  ngOnInit(): void {
   
    this.doctorid=localStorage.getItem('currentDoctor');
    //get count of appointments by doctorid
    this.doctorService.getCountByAppointmentId(this.doctorid).subscribe(
      (Response:any)=>{
        console.log("inside countOfAppointment");
        console.log(Response);
        this.countOfAppointment=Response;
      }
    );


    this.doctorService.getDoctorById(this.doctorid).subscribe(
     (Response)=>{
     
       this.doctor=Response;
     }
    );







      this.doctorService.getAllDoctors().subscribe(
       (Response)=>{
         this.doctorList=Response;
       }
      );
 
  }
 
   public updatedoctorlist(doctorid:number){
       this.router.navigate(['/update-doctor-list',doctorid]);
   }

 
 
 }