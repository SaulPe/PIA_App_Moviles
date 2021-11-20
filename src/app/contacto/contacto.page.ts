/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage  {
  constructor(private toastController: ToastController) { }
  async enviarCita() {
    const toast = await this.toastController.create({
      message: 'Su consulta ha sido enviada.',
      duration: 2000
    });
    toast.present();
  }
}