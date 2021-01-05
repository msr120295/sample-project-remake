import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://18.139.50.74:8080"

  constructor(private http:HttpClient) { }

  login(val:any) {
    return this.http.post<any>(this.APIUrl+'/login', val)
  }


}
