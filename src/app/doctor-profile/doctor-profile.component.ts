import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit{

  doctor: any;

  doctorid: any;
 
  constructor(private doctorService:AddDoctorService, 
   private router:Router){
 
  }
 
  ngOnInit(): void {
      this.doctorid=localStorage.getItem('currentDoctor');
      this.doctorService.getDoctorById(this.doctorid).subscribe(
       (Response)=>{
         this.doctor=Response;
       }
      );
 
  }

 
  
 
 
 }
