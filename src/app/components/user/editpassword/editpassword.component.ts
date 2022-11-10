import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.scss'],
})
export class EditpasswordComponent implements OnInit {
  passwords = {
    oldPass: '',
    newPass: '',
    confirmPass: '',
  };
  constructor() {}

  ngOnInit() {}
  setOldPassword(pass: string) {
    this.passwords.oldPass = pass;
  }
  setNewPassword(pass: string) {
    this.passwords.newPass = pass;
  }
  setConfirmPassword(pass: string) {
    this.passwords.confirmPass = pass;
  }
  sendDataPass() {
    if (String(this.passwords.newPass) === String(this.passwords.confirmPass)) {
      console.log('contraseñas iguales');
    } else {
      console.log('contraseñas diferentes');
    }
  }
}
