import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  mascotas = [
    { id: 1, nombre: 'Pitbull', img: 'https://zpsiegopunktuwidzenia.pl/wp-content/uploads/sites/9/2019/09/pitbull-cena-rasa-historia-wychowanie-zdrowie-blog-o-psach.jpeg', sonidos: 'assets/adopcion/pitbull.mp3' },
    { id: 2, nombre: 'Doberman', img: 'https://hauever.pl/wp-content/uploads/2021/04/joshua-daniel-63S5P1AW_Dg-unsplash.jpg', sonidos: 'assets/adopcion/doberman.mp3' },
    { id: 3, nombre: 'Gato minskin', img: 'https://curiosfera-animales.com/wp-content/uploads/2017/11/gato-egipcio-o-esfinge.jpg', sonidos: 'assets/adopcion/gatominskin.mp3' },
  ];
  tienda = [
    { id: 4, nombre: 'Gato Habana', img: 'https://www.gaticoscalenticos.com/wp-content/uploads/2020/07/habana.jpg', sonidos: 'assets/compra/gatoh.mp3' },
    { id: 5, nombre: 'Border Collie', img: 'https://www.dekowizja.pl/img2/1000/77673545/naklejka-dwuletni-border-collie.jpg', sonidos: 'assets/compra/border.mp3' },
    { id: 6, nombre: 'Pastor Australiano', img: 'https://t2.ea.ltmcdn.com/es/razas/7/6/5/img_567_pastor-ganadero-australiano-o-boyero-australiano_0_600.jpg', sonidos: 'assets/compra/australiano.mp3' }
  ];
  sonidoanimal(mascota) {
    let sonido = new Audio();
    sonido.src = mascota.sonidos;
    sonido.load();
    sonido.play();
  }
}
