import { Component } from '@angular/core';
import { Doctor } from '../login/Doctor';
import { AddDoctorService } from '../add-doctor.service';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
   doctor: Doctor = new Doctor(0, '', '', '', '', '', '', '', '');

  constructor(private addDoctorService: AddDoctorService) {}

  ngOnInit(): void {}

  public addDoctor() {
    console.log(this.doctor);
    this.addDoctorService.addDoctor(this.doctor).subscribe(
      (Response)=> {
        alert("doctor added successfully...!");
      },
      error=>{
        console.log(error);
      }
    )
  }



  }



