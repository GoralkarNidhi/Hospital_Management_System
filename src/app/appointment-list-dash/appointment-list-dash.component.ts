import { Component } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list-dash',
  templateUrl: './appointment-list-dash.component.html',
  styleUrls: ['./appointment-list-dash.component.css']
})
export class AppointmentListDashComponent {

appointmentList:any;

constructor(private appointmentService:AddDoctorService,  private router:Router){

}



ngOnInit(): void {
  this.appointmentService.getAllAppointments().subscribe(
   (Response)=>{
     this.appointmentList=Response;
   }
  )

}


public updateAppointmentlist(appointmentid:number){
  this.router.navigate(['/update-appointment-list',appointmentid]);
}

public deleteAppointmentList(appointmentid:number){
  this.appointmentService.deleteAppointmentList(appointmentid).subscribe(
    (data:any)=>{
        alert("user deleted successfully....!");
        this.appointmentList=data;
        this.router.navigate(['/appointment-list-dash']);
    }
  )
}



}
