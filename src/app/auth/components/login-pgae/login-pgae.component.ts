import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-pgae',
  templateUrl: './login-pgae.component.html',
  styleUrls: ['./login-pgae.component.scss'],
})
export default class LoginPgaeComponent implements OnInit {
  nameControl: FormControl = new FormControl();

  passswordControl: FormControl = new FormControl();

  ngOnInit(): void {
    this.nameControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.passswordControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  }

  validCheck():boolean {
    return this.passswordControl.valid && this.nameControl.valid;
  }

  addName() {
    localStorage.setItem('token', JSON.stringify(this.nameControl.value));
  }
}
