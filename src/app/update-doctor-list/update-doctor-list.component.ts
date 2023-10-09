import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../login/Doctor';

@Component({
  selector: 'app-update-doctor-list',
  templateUrl: './update-doctor-list.component.html',
  styleUrls: ['./update-doctor-list.component.css']
})
export class UpdateDoctorListComponent implements OnInit {

  doctorid:number=0;
  doctor:any;
constructor(private updateDoctorService:AddDoctorService, private activateRoute:ActivatedRoute,
  private router:Router){

}

ngOnInit(): void {
    this.doctorid = this.activateRoute.snapshot.params['doctorId'];
    this.updateDoctorService.getDoctorById(this.doctorid).subscribe(
      (data:any)=> {
        this.doctor = data;
      }
    )
}

public updatedoctorlist(){
  this.updateDoctorService.updateDoctorList(this.doctorid, this.doctor).subscribe(
    (data:any)=>{
      this.doctor = data;
      console.log("data updated successfully");
      alert("Updated Successfully....!");
      this.router.navigate(['/doctor-list-dash']);
    });   
}

public deletedoctorlist(){
  this.updateDoctorService.deleteDoctorList(this.doctorid).subscribe(
    (data:any)=>{
      this.doctor = data;
      console.log("data updated successfully");
      alert("Updated Successfully....!");
      this.router.navigate(['/doctor-list-dash']);
    });   
}

}
