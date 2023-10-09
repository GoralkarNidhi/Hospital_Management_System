import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from './Patient';
import { Doctor } from './Doctor';
import { Admin } from './Admin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  patient: Patient = new Patient(0,"", "", "", "", 0, "","");
  doctor: Doctor = new Doctor(0, "", "", "", "","","","","");
  admin: Admin = new Admin(0,"","");
  doctorStatus: boolean = false;
  patientStatus: boolean = false;
  adminStatus: boolean = false;
  doctorid: any;
  adminid: any;
  patientid:any;

  
   ngOnInit(): void { }
  constructor(private router: Router, private patientService: PatientService) {}

public register(){
this.router.navigate(['/app-register']);
}
  public doctorAsLogin() {
    console.log("doctor login");
    this.patientService.doctor_Login(this.doctor).subscribe(
    (Response:any) =>{
      console.log(Response);
      this.doctorid = Response.doctorId;
      localStorage.setItem('currentDoctor',  this.doctorid);
      alert("Login Success!");
      if(Response != null)
      this.router.navigate(['/doctor-dashboard']);
      }, error => console.log("Something is wrong!"));//error is pre define obj
    }

    public adminAsLogin() {
      console.log("admin login");
      this.patientService.admin_Login(this.admin).subscribe(
        (Response:any)  => {
        console.log(Response);
        this.adminid = Response.adminId;
        console.log("admin as login");
        console.log(this.adminid);
        localStorage.setItem('currentAdmin',  this.adminid);
        if(Response != null){
        alert("Login Success!");
        this.router.navigate(['/admin-dashboard']);
        }
        }, error => console.log("Something is wrong!"));//error is pre define obj
      }
      public patientAsLogin() {
        console.log("patient login");
        this.patientService.patient_Login(this.patient).subscribe(
        (Response:any) => {
          console.log(Response);
          this.patientid  = Response.patientId;
          console.log("patient as login");
          console.log(this.patientid);
          localStorage.setItem('currentPatient',  this.adminid);
          if(Response != null){
          alert("Login Success!");
          this.router.navigate(['/patient-dashboard']);
          }
          }, error => console.log("Something is wrong!"));//error is pre define obj
        }

     public adminLogin() {
      this.adminStatus = true;
      this.doctorStatus = false;
      this.patientStatus = false;
    }
    public doctorLogin() {
      this.doctorStatus = true;
      this.adminStatus = false;
      this.patientStatus = false;
    }

    public patientLogin() {
      this.patientStatus = true;
      this.adminStatus = false;
      this.doctorStatus = false;
    }

  
}





// public adminAsLogin() {
//   this.patientService.admin_Login(this.admin).subscribe(
//     (response: any) => {
//       if (response && response.success === true) {
//         alert("Login Success!");
//         this.router.navigate(['/admin-dashboard']);
//       } else {
//         alert("Login Failed!"); // You can display a more specific message based on the response.
//       }
//     },
//     error => {
//       console.log("Something is wrong!");
//       // Handle error here, e.g., display an error message to the user.
//     }
//   );
// }