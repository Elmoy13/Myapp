import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  passwordType: string = 'password';
  eye: string = 'Mostrar contraseña';
  registerForm: FormGroup;
  constructor(private router: Router, private location: Location, private formBuilder: FormBuilder, private alertController: AlertController) {


    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.eye = this.eye === 'Mostrar contraseña' ? 'Ocultar contraseña' : 'Mostrar contraseña';
  }
  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
  async onSubmit() {
    if (!this.registerForm.valid) {
    let errorMessage = '';
    const formControls = this.registerForm.controls;
    Object.keys(formControls).forEach(field => {
    const control = formControls[field];
    if (control instanceof FormControl) {
    if (!control.valid) {
    if (field === 'name') {
    errorMessage += 'El nombre es requerido.';
    } else if (field === 'email') {
    errorMessage += 'El correo electrónico es requerido y debe tener un formato válido.';
    } else if (field === 'password') {
    errorMessage += 'La contraseña es requerida y debe tener al menos 6 caracteres.';
    }
    }
    }
    });
    const alert = await this.alertController.create({
    header: 'Atención',
    message: errorMessage,
    buttons: ['OK']
    });
    await alert.present();
    } else {
    const alert = await this.alertController.create({
    header: 'Información',
    message: 'Registro completado con éxito',
    buttons: ['OK']
    });
    await alert.present();
    }
    }

  }


