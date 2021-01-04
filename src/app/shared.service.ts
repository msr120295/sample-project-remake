import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://reqres.in/api"

  constructor(private http:HttpClient) { }

  login(val:any) {
    return this.http.post(this.APIUrl+'/login', val)
  }

}
