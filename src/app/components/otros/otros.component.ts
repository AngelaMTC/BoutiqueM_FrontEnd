import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';
import { CarritoComponent } from '../carrito/carrito.component';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.scss'],
})
export class OtrosComponent implements OnInit {
  id = '6377a9d740d22b48c158cb2e';
  listClothes: any;

  constructor(
    private clotheService: ClothesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getOthersClothe();
  }

  getOthersClothe() {
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
