import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
declare let google: any;

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage {
  map: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('map',{read:ElementRef,static:false}) mapRef: ElementRef;

  constructor() {}
  ionViewDidEnter(){
   this.showMap();
  }
  showMap(){
    const location = new google.maps.LatLng(25.72557580237452, -100.31518785149306);
    const options =
    {
      center: location,
      zoom: 20,
      diseableDefaultUI:true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }
}
