import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';
import { Router } from '@angular/router';
import { Doctor } from '../login/Doctor';

@Component({
  selector: 'app-doctor-list-dash',
  templateUrl: './doctor-list-dash.component.html',
  styleUrls: ['./doctor-list-dash.component.css']
})
export class DoctorListDashComponent implements OnInit{

 doctorList: any;

 constructor(private doctorService:AddDoctorService, 
  private router:Router){

 }

 ngOnInit(): void {
     this.doctorService.getAllDoctors().subscribe(
      (Response)=>{
        this.doctorList=Response;
      }
     )

 }

  public updatedoctorlist(doctorid:number){
      this.router.navigate(['/update-doctor-list',doctorid]);
  }

  public deleteDoctorList(doctorid:number){
    this.doctorService.deleteDoctorList(doctorid).subscribe(
      (data:any)=>{
          alert("user deleted successfully....!");
          this.doctorList=data;
          this.router.navigate(['/doctor-list-dash']);
      }
    )
}


}
