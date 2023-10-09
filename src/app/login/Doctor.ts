export class Doctor{
    doctorId: number;
    doctName: String;
    password: String;
    email: String;
    specialization: String;
    education: String;
    mobileNo: String;
    gender: String;
    department: String;

    constructor(
    doctorId: number,
    doctName: String,
    password: String,
    email: String,
    specialization: String,
    education: String,
    mobileNo: String,
    gender: String,
    department: String
    ) {

    this.doctorId = doctorId;
    this.doctName = doctName;
    this.password = password;
    this.email = email;
    this.specialization = specialization;
    this.education = education;
    this.mobileNo = mobileNo;
    this.gender = gender;
    this.department = department;
    }

}