import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://18.139.50.74:8080"

  constructor(private http:HttpClient) { }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg'
  //   })
  // }

  login(val:any) {
    return this.http.post<any>(this.APIUrl+'/login', val)
  }

  //untuk akses json token
  logging_in() {
    return !!localStorage.getItem('token')
  }

  //getToken
  getToken() {
    return localStorage.getItem('token')
  }

  getChecklist() {
    return this.http.get<any>(this.APIUrl + '/checklist')
  }

  deleteChecklist(id) {
    return this.http.delete<any>(this.APIUrl + '/checklist/' + id)
  }


}
