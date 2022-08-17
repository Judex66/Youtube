import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.scss'],
})
export default class RegistrComponent implements OnInit {
  emailControl: FormControl = new FormControl();

  passswordControl: FormControl = new FormControl();

  nicknameControl: FormControl = new FormControl();

  ngOnInit(): void {
    this.emailControl = new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]);
    this.passswordControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.nicknameControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  }

  validCheck():boolean {
    return this.passswordControl.valid && this.emailControl.valid;
  }

  addName() {
    localStorage.setItem('token', JSON.stringify(this.emailControl.value));
  }
}
