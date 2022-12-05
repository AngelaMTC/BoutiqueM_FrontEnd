import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';
import { CarritoComponent } from '../carrito/carrito.component';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-bebe',
  templateUrl: './bebe.component.html',
  styleUrls: ['./bebe.component.scss'],
})
export class BebeComponent implements OnInit {
  id = '6377a9cc40d22b48c158cb2d';
  listClothes: any;

  constructor(
    private clotheService: ClothesService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.getBabyClothe();
  }

  getBabyClothe() {
    this.clotheService.getClotheCategory(this.id).subscribe((resp) => {
      this.listClothes = resp;
      this.listClothes = this.listClothes.clotheFilter;
    });
  }
}
