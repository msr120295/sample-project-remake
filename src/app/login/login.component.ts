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
      "username": this.email,
      "password": this.password}

      this.service.login(val).subscribe
      (
        res => console.log(res),
        err  => console.log(err)
      )

  }

}
