/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private toastController: ToastController) { }
  async enviarCita() {
    const toast = await this.toastController.create({
      message: 'Su Registro ha sido exitoso. ¡Bienvenido!',
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
  }

}
