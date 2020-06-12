import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import { StudentformService } from './studentform.service';
@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {
  model: any;
 student:any={};
data:any;

  showResult: boolean=false;

  constructor(private studentformService : StudentformService) { }

  ngOnInit() {
    
  }

 

  saveData(){
     debugger 
     let reqbody = {
      
      studentName : this.student.studentName,
      dateofbirth : this.student.dob,
      schoolName : this.student.schoolName,
      promatedClass: this.student.promotedClass,
      fatherName : this.student.fatherName,
      motherName : this.student.motherName,
      occupation : this.student.occupation,
      mobileNumber : this.student.mobileNumber,
      commonAddressvo  : {
      doorNO : this.student.doorNumber,
      streetname : this.student.streetName,
      locality : this.student.locality
      
    }
     }
    console.log("response")
      this.studentformService.saveStudent(reqbody).subscribe(response => { 

        if (response.result) {
          console.log("get data")
          this.data=response;
          this.showResult=true;
      } else {
        this.showResult=false;
      }
 this.data=response;

 });
  }


clear(){
  this.showResult=false
}

 }