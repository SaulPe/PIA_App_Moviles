/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Component, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
//import { NgForm } from '@angular/forms';
//import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private toastController: ToastController) { }
  estetica=[
    {id:1,nombre:'Baño y secado',img:'assets/estetica/baño.jpg',desc:'Bañar a tu mascota es muy importante pero sin un buen secado, no sirve para nada. Nosotros ofrecemos un servicio de baño y secado 2 en 1.'},
    {id:2,nombre:'Corte de pelo',img:'assets/estetica/corte.jpg',desc:'Ofrecemos nuestro servicio de corte de pelo para que tu mascota tenga mas estilo y se vea cool.'},
    {id:3,nombre:'Masaje relajante',img:'assets/estetica/masaje.jpg',desc:'Tu mascota tambien necesita su tiempo de relajación, por eso ofrecemos nuestro servicio de masaje relajante para que tu mascota se sienta mas descansada.'},
    {id:4,nombre:'Limpieza del canal auditivo',img:'assets/estetica/orejas.jpg',desc:'El aseo de las orejas de tu mascota es tan comun como el aseo de las nuestras, nuestro servicio de limpieza del canal auditivo puede hacer esta tarea muy facil.'},
    {id:5,nombre:'Recorte de uñas',img:'assets/estetica/uñas.jpg',desc:'Al igual que el aseo de orejas es muy común, lo mismo sucede con el corte de uñas, pero para este caso se necesita tener las herramientas indicadas. Con nuestro servicio de corte de uñas podemos ayudarte a cortar las uñas de tu mascota.'}
  ];
  async enviarCita() {
    const toast = await this.toastController.create({
      message: 'Su cita ha sido enviada.',
      duration: 2000
    });
    toast.present();
  }

}
