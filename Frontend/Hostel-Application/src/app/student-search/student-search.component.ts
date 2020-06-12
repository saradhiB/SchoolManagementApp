import { Component, OnInit } from '@angular/core';
import { StudentSearchService } from './student-search.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {
  model: any;
  studentsearch: any;
  data: any;
  name: any;
  school: any;
  mobile: any;

  studentName: any;
  schoolName: any;
  studentMobile: any;
  showresult: Boolean = false;
  final:Boolean=false;


  constructor(private studentSearchService: StudentSearchService) { }

  ngOnInit() {
  }



  //   searchStudentData(formValid){
  //     debugger 
  //     let reqbody = {

  //       name : this.studentsearch.name

  //    }

  //    console.log("response")

  //    this.studentSearchService.searchData(reqbody).subscribe(
  //      res => {

  //     if (res.result) {
  //       console.log("get data")
  //       this.data=res;

  //   } else {

  //   }
  // this.data=res;

  // });
  // }



  searchStuData(formValid) {
    console.log(this.studentName)
    if (formValid) {
      this.studentSearchService.getStudentDetails(this.studentName, this.schoolName, this.studentMobile).subscribe(res => {
        if (res.result) {
          this.data = res.result;
          this.showresult = true;
          this.final=false;
        }
        else {
          this.showresult = false;
          this.final=true;
          
        }
  

      });
    }

  }


  cleartable(){
    this.showresult = false;
    this.final=false;
  }



}
