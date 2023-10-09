import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddDoctorService } from '../add-doctor.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit{

  admin:any;

  adminid:any;
 
  constructor(private doctorService:AddDoctorService, 
   private router:Router){
 
  }
 
  ngOnInit(): void {
    this.adminid = localStorage.getItem('currentAdmin');
      this.doctorService.getAdminById(this.adminid).subscribe(
       (Response)=>{
         this.admin=Response;
       }
      );
 
  }
 
   public updatedoctorlist(doctorid:number){
       this.router.navigate(['/update-doctor-list',doctorid]);
   }
 
  
 
 
 }
