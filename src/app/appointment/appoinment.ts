export class Appointment{
    fullName:String;
    address:String;
    department:String;
    doctName:String;
    emailId:String;
    mobileNo:String;
    patientType:String;
    date: Date;

    constructor(
        fullName:String,
        address:String,
        department:String,
        doctName:String,
        emailId:String,
        mobileNo:String,
        patientType:String,
        date: Date,
    ) {
        this.fullName = fullName;
        this.address = address;
        this.department = department;
        this.doctName = doctName;
        this.emailId = emailId;
        this.mobileNo = mobileNo;
        this.patientType = patientType;
        this.date = date;
    }

}