import { Component, OnInit } from '@angular/core';
import { Patient } from '../login/Patient';
import { PatientService } from '../patient.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  patient: Patient = new Patient(0,"", "", "", "", 0, "","");


  ngOnInit(): void { }

  constructor(private patientservice: PatientService) { }

  public patientRegister() {
    //   this.patientservice.patientRegister(this.patient).subscribe(
    //     (data: any) => { console.log("Register Successfully!") }
    //   );
    // }
    this.patientservice.patientRegister(this.patient)
      .pipe(
        catchError((error) => {
          // Handle the error here, e.g., show an error message to the user
          console.error('Registration failed:', error);
          // Return an observable with an error message
          return throwError('Registration failed. Please try again later.');
        })
      )
      .subscribe(
        (data: any) => {
          // Registration was successful, provide user feedback here
          console.log('Registration Successful!', data);
          alert("Registration Successful......!");
          // You can redirect to the login page or show a success message
        }
      );

  }




}

