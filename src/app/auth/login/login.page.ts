import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordType: string = 'password';
  eye: string = 'Mostrar contraseña';
  constructor(private router: Router, private location: Location) { }
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.eye = this.eye === 'Mostrar contraseña' ? 'Ocultar contraseña' : 'Mostrar contraseña';
  }
  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
