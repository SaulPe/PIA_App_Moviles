import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private toastController: ToastController) { }
  async enviarConsulta() {
  const toast = await this.toastController.create({
  message: 'Consulta Solicitada',
  duration: 2000
  });
  toast.present();
  }
  consulta=[
    {id:1,nombre:'Baño y secado',img:'assets/consultas/vacunacion.jpg',desc:'Bañar a tu mascota es muy importante pero sin un buen secado, no sirve para nada. Nosotros ofrecemos un servicio de baño y secado 2 en 1.'},
    {id:2,nombre:'Corte de pelo',img:'assets/consultas/veterinaria.jpg',desc:'Ofrecemos nuestro servicio de corte de pelo para que tu mascota tenga mas estilo y se vea cool.'},
    {id:3,nombre:'Masaje relajante',img:'assets/consultas/esterilizacion.jpg',desc:'Tu mascota tambien necesita su tiempo de relajación, por eso ofrecemos nuestro servicio de masaje relajante para que tu mascota se sienta mas descansada.'},
  ];

}
