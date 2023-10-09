import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';
import { Router } from '@angular/router';
import { Doctor } from '../login/Doctor';


@Component({
  selector: 'app-doctor-appointment-list',
  templateUrl: './doctor-appointment-list.component.html',
  styleUrls: ['./doctor-appointment-list.component.css']
})
export class DoctorAppointmentListComponent implements OnInit {
  appointmentList:any;
  currentDoctor:any;

  // currentDoctor: Doctor = new Doctor(0, "", "", "", "","","","","");

  constructor(private addDoctorService:AddDoctorService,
    private router:Router){

  }

  ngOnInit(): void {
    this.currentDoctor=localStorage.getItem('currentDoctor');
    console.log("inside doctor appointment list component");
    // console.log(this.currentDoctor.doctorId);
    console.log(this.currentDoctor);
      this.addDoctorService.getAppointmentByDoctorId(this.currentDoctor).subscribe(
        (Response)=>{
          this.appointmentList=Response;
        }
      );
  }
  public deleteAppointmentList(appointmentid:number){
    this.addDoctorService.deleteAppointmentList(appointmentid).subscribe(
      (data:any)=>{
          alert("user deleted successfully....!");
          this.appointmentList=data;
          this.router.navigate(['/doctor-appointment-list']);
      }
    )
  }

  public logout(){
    sessionStorage.removeItem('currentDoctor');
    this.router.navigate(['/home']);
  }

}
