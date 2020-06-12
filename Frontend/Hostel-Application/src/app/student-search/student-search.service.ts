import { Injectable } from '@angular/core';
import { Http, RequestOptions, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';
import { Response } from '@angular/http/src/static_response';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpParams } from '@angular/common/http';

import 'rxjs/Rx';






@Injectable({
  providedIn: 'root'
})
export class StudentSearchService {

  json;
  formData;
  headers: any;
  baseRequestOptions;
  imageInput = [];
  myObj;
  enclosersData;
  url;

  constructor(private http: Http,

    private router: Router,
    private  httpClient: HttpClient,
   
    ) { }

  

  searchData(reqbody): Observable<any> { 
    return this.http.post('http://192.168.100.27:8787/searchStudentData',reqbody)
    }
    
    
    getStudentDetails(name:string, school:string,mobile:string) {
      // const options = new RequestOptions({ params: { name, school,mobile } });
    
      return this.http.get('http://192.168.100.27:8787/getUniqueData?name='+ name+'&school='+school+'&mobile='+mobile)

      .map((response: Response) => {
        const result = response.json();
        return result;
      });
    }
    
     
}
