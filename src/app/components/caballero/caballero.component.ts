import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Clothes } from 'src/app/models/clothes';
import { ClothesService } from 'src/app/services/clothes.service';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-caballero',
  templateUrl: './caballero.component.html',
  styleUrls: ['./caballero.component.scss'],
})
export class CaballeroComponent implements OnInit {
  id ='6377a9b540d22b48c158cb2c';
  listClothes: any;

  constructor(
    private serviceClothes: ClothesService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.getGentlemanClothe();
  }

  getGentlemanClothe(){
    this.serviceClothes.getClotheCategory(this.id).subscribe((resp)=>{
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

