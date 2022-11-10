import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userData = {
    name: '',
    firstlastname: '',
    secondlastname: '',
    email: '',
    pass: '',
    dateofbirth: '',
  };
  constructor() {}

  ngOnInit() {}

  setName(name: string){
    this.userData.name = name;
  }
  setFirstLastName(firstlastname: string){
    this.userData.firstlastname = firstlastname;
  }
  setSecondLastName(secondlastname: string){
    this.userData.secondlastname = secondlastname;
  }
  setEmail(email: string){
    this.userData.email = email;
  }
  setPass(pass: string){
    this.userData.pass = pass;
  }
  setDate(dateofbirth: string){
    this.userData.dateofbirth = dateofbirth;
  }
  sendDataRegister(){
    console.log(this.userData);
  }
}
