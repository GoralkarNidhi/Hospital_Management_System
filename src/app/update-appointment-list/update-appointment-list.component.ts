import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-appointment-list',
  templateUrl: './update-appointment-list.component.html',
  styleUrls: ['./update-appointment-list.component.css']
})
export class UpdateAppointmentListComponent implements OnInit {

  appointmentid:number=0;
  appointment:any;


constructor(private updateDoctorService:AddDoctorService, private activateRoute:ActivatedRoute,
  private router:Router){

}

ngOnInit(): void {
    this.appointmentid = this.activateRoute.snapshot.params['doctorId'];
    this.updateDoctorService.getAppointmenyById(this.appointmentid).subscribe(
      (data:any)=> {
        this.appointment = data;
      }
    )
}

public updatePatientList(){
  this.updateDoctorService.updateDoctorList(this.appointmentid, this.appointment).subscribe(
    (data:any)=>{
      this.appointment = data;
      console.log("data updated successfully");
      alert("Updated Successfully....!");
      this.router.navigate(['/doctor-list-dash']);
    });   
}

public deletedoctorlist(){
  this.updateDoctorService.deleteDoctorList(this.appointmentid).subscribe(
    (data:any)=>{
      this.appointment = data;
      console.log("data updated successfully");
      alert("Updated Successfully....!");
      this.router.navigate(['/doctor-list-dash']);
    });   
}

}

