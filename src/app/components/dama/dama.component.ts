import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';
import { ModalController } from '@ionic/angular';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-dama',
  templateUrl: './dama.component.html',
  styleUrls: ['./dama.component.scss'],
})
export class DamaComponent implements OnInit {

  id = '6377a9a840d22b48c158cb2b';
  listClothes: any;
  constructor(
    private modalCtrl: ModalController,
    private clotheService: ClothesService
  ) {}

  ngOnInit() {
    this.getDamaClothe();
  }

  getDamaClothe() {
    this.clotheService.getClotheCategory(this.id).subscribe((resp) => {
      this.listClothes = resp;
      this.listClothes = this.listClothes.clotheFilter;
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CarritoComponent,
    });
    modal.present();
  }
}
