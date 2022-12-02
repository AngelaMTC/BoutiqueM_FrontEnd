import { Component, OnInit } from '@angular/core';
import { Style } from '@capacitor/status-bar';
import { ModalController } from '@ionic/angular';
import { CompraExitosaComponent } from '../compra-exitosa/compra-exitosa.component';

@Component({
  selector: 'app-carritolista',
  templateUrl: './carritolista.component.html',
  styleUrls: ['./carritolista.component.scss'],
})
export class CarritolistaComponent implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CompraExitosaComponent,
    });
    modal.present();
  }
}
