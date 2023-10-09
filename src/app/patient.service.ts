import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './commonurl';
import { Patient } from './login/Patient';
import { Doctor } from './login/Doctor';
import { Admin } from './login/Admin';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  adminLogin(patient: Patient) {
    throw new Error('Method not implemented.');
  }


  constructor(private httpClient: HttpClient) { }
  
  public patientRegister(patient: Patient) { 
      return this.httpClient.post(`${baseUrl}/patient/add`, patient)

    }
  
  public patient_Login(patient: Patient) { 
    console.log("inside patient login serive");
      return this.httpClient.post(`${baseUrl}/patient/login`, patient)

    }

    public admin_Login(admin: Admin) { 
      console.log("inside admin login service");
      return this.httpClient.post(`${baseUrl}/admin/login`, admin)

    }


    public doctor_Login(doctor: Doctor) { 
      console.log("inside doctor login service")
      return this.httpClient.post(`${baseUrl}/doctor/login/add`, doctor)

    }
  

  
  }
