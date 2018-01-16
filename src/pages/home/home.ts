import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement;
  map: any;
  markers=[];
  constructor(public navCtrl: NavController) {
    this.markers = [
      {
        "latitude": -23.511836, 
        "longitude": -46.713803,
        "name": "Agua Fria",
        "icon" : "pizza.png"
      },
      {
        "latitude": -23.454101, 
        "longitude": -46.535629,
        "name": "Guarulhos",
        "icon" : "pizza.png"
      },
      {
        "latitude": -23.535364, 
        "longitude": -46.575686,
        "name": "Tatuapé",
        "icon" : "burger.png"
      }
    ]
  }

  ionViewDidLoad(){
    this.addMap()
  }

  addMap() {

    let latLng = new google.maps.LatLng(-23.528744, -46.591411);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.addMarkersToMap()
  }

  addMarkersToMap() {
    for(let marker of this.markers) {
      var position = new google.maps.LatLng(marker.latitude, marker.longitude);
      var dogwalkMarker = new google.maps.Marker({position: position, title: marker.title, icon: { url : '/assets/imgs/' + marker.icon },});
      dogwalkMarker.setMap(this.map);
    }
  }
}
