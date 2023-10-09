import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-patient-list',
  templateUrl: './update-patient-list.component.html',
  styleUrls: ['./update-patient-list.component.css']
})
export class UpdatePatientListComponent  implements OnInit {

  patientid:number=0;
  patient:any;

constructor(private updateDoctorService:AddDoctorService, private activateRoute:ActivatedRoute,
  private router:Router){

}

ngOnInit(): void {
    this.patientid = this.activateRoute.snapshot.params['patientId'];
    this.updateDoctorService.getPatientById(this.patientid).subscribe(
      (data:any)=> {
        this.patient = data;
      }
    )
}

public updatePatientlist(){
  this.updateDoctorService.updatePatientList(this.patientid, this.patient).subscribe(
    (data:any)=>{
      this.patient = data;
      console.log("data updated successfully");
      alert("Updated Successfully....!");
      this.router.navigate(['/doctor-list-dash']);
    });   
}

public deletePatientlist(){
  this.updateDoctorService.deleteDoctorList(this.patientid).subscribe(
    (data:any)=>{
      this.patient = data;
      console.log("data updated successfully");
      alert("Updated Successfully....!");
      this.router.navigate(['/doctor-list-dash']);
    });   
}

}
