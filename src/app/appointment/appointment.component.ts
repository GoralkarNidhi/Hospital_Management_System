import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';
import { Appointment } from './appoinment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})



export  class AppointmentComponent implements OnInit {

 appointment: Appointment = new Appointment("","","","","","","",new Date());

    patientList:any;
    doctorList:any;
    namelist:any;
    eventValue:any;
    

    currentDate = new Date();
    constructor(private doctorService:AddDoctorService){
    }

  ngOnInit(): void {

      this.doctorService.getAllDoctors().subscribe(
      (Response) => {
        this.doctorList=Response;
      }
      )

      this.doctorService.getAllPatients().subscribe(
        (Response) => {
          this.patientList=Response;
        }
      )

  }
  public addAppointment(){
    console.log(this.appointment);
    this.doctorService.addAppointment(this.appointment,this.eventValue).subscribe(
      (Response) => {
        alert("appointment is success...!");

      }
    )
  }

  public readId(event:any){
    this.eventValue = event.target.value;
    console.log(this.eventValue);
  }

}
