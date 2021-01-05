import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";

  constructor(
    private service:SharedService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  loginProcess() {
    var val = {
      "username": this.email,
      "password": this.password}

      this.service.login(val).subscribe
      (
        res => {
          console.log(res),
          localStorage.setItem('token', res.data.token)
          this.router.navigate(['/checklist'])
        },
        err  => console.log(err)
      )

  }

}
