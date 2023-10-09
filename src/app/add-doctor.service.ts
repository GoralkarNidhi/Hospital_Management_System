import { Injectable } from '@angular/core';
import { Doctor } from './login/Doctor';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './appointment/appoinment';
import { Patient } from './login/Patient';


@Injectable({
  providedIn: 'root'
})
export class AddDoctorService {
  doctorRegister(doctor: Doctor) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }

  

  public getAllDoctors() {
    return this.httpClient.get('http://localhost:8003/doctor/doctorlist');
  }

  public getAppointmentByDoctorId(doctorId: number) {
    return this.httpClient.get(`http://localhost:8003/appointments/getByDoctorId/${doctorId}`);
  }

  public getAdminById(id: number) {
    return this.httpClient.get(`http://localhost:8003/admin/${id}`);
  }

  public getAllPatients() {
    return this.httpClient.get('http://localhost:8003/patient/patientlist');
  }

  public getPatientById(id:number) {
    return this.httpClient.get(`http://localhost:8003/patient/${id}`);
  }

  public getAllAppointments() {
    
    return this.httpClient.get('http://localhost:8003/appointments/all');

  }

  public addDoctor(doctor: Doctor) {
    console.log(doctor);
    return this.httpClient.post('http://localhost:8003/doctor/add',doctor);
  }


  public addAppointment(appointment: Appointment, doctorId:number) {
    console.log(appointment);
    return this.httpClient.post(`http://localhost:8003/appointments/create/${doctorId}`, appointment);
  }


public  updateDoctorList(doctorid:number,doctor:Doctor){
  return this.httpClient.put(`http://localhost:8003/doctor/update/${doctorid}`, doctor);
}

public updatePatientList(id:number,patient : Patient){
  return this.httpClient.put(`http://localhost:8003/patient/update/${id}`, patient);
}


public getAppointmenyById(appointmentid:number){
  return this.httpClient.get(`http://localhost:8003/appointments/${appointmentid}`);
}

public getDoctorById(doctorid:number){
  return this.httpClient.get(`http://localhost:8003/doctor/${doctorid}`);
}

public deleteDoctorList(doctorid:number){
  return this.httpClient.delete(`http://localhost:8003/doctor/doctordelete/${doctorid}`);
}
public deletePatientList(patientid:number){
  return this.httpClient.delete(`http://localhost:8003/patient/patientlist/${patientid}`);
}

public deleteAppointmentList(appointmentid:number){
  return this.httpClient.delete(`http://localhost:8003/appointments/delete/${appointmentid}`);
}

public getCountByAppointmentId(doctorId:number){
  return this.httpClient.get(`http://localhost:8003/appointments/getCountByDoctorId/${doctorId}`);
}



}
