import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';
import { CarritoComponent } from '../carrito/carrito.component';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-nina',
  templateUrl: './nina.component.html',
  styleUrls: ['./nina.component.scss'],
})
export class NinaComponent implements OnInit {

 
  id ='63531cf17ec375a6b31ddc81';
  listClothes: any;

  constructor(
    private clotheService: ClothesService,
    private modalCtrl : ModalController    
    ) { }

  ngOnInit() {
    this.getGirlClothe();
  }

  getGirlClothe(){
    this.clotheService.getClotheCategory(this.id).subscribe((resp)=>{
      this.listClothes = resp;
      this.listClothes = this.listClothes.clotheFilter;
      console.log(this.listClothes);
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CarritoComponent,
    });
    modal.present();
  }

}
