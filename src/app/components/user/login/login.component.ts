import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userData = {
    email: '',
    pass: '',
  };
  response: any;
  constructor(private userservice: UserService, private route: Router) {}

  ngOnInit() {}

  sendDataLogin() {
    this.userservice.postLogin(this.userData).subscribe((resp) => {
      this.response = resp;
      if (this.response.err === false) {
        this.route.navigate(['/folder/Inbox']);
      } else {
        console.log(this.response);
      }
    });
  }

  setEmail(email: string) {
    this.userData.email = email;
  }

  setPass(pass: string) {
    this.userData.pass = pass;
  }
}
