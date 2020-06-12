import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpRequest } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class StudentformService {

  
  constructor(private http: HttpClient

) { }
  saveStudent(reqbody): Observable<any> { 
    return this.http.post('http://192.168.100.27:8989/saveStudentData',reqbody) 
    } 
    
}
