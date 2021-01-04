import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";

  constructor(private service:SharedService) { }

  ngOnInit(): void {
  }

  loginProcess() {
    var val = {
      "email": this.email,
      "password": this.password}

      this.service.login(val).subscribe(res=>{
        if (res.hasOwnProperty("token") == true) {
          console.log("login berhasil dengan value token " +  res["token"])
        } else {
          alert('password yang anda masukkan salah')
        }

      })

  }

}
