import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Clothes } from 'src/app/models/clothes';
import { CategorysService } from 'src/app/services/category.service';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-dama',
  templateUrl: './dama.component.html',
  styleUrls: ['./dama.component.scss'],
})
export class DamaComponent implements OnInit {

  clothesList: [] = [];
  damaClothes: any;
  idClothe: any;
  filterdamaClothes: any;
  clothes: any;

  id ='6377a9a840d22b48c158cb2b';
  listClothes: any;
  constructor(
    private serviceClothes: ClothesService,
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    private clotheService: ClothesService
  ) { }

  ngOnInit() {
    // this.getDamaClothes();
    this.getDamaClothe();
  }

  refreshClothes(){
    window.location.reload();
  }

  searchClothes(event) {
    const text = event.target.value;
    this.filterdamaClothes = this.clothesList;
    if (text && text.trim() !== '') {
      this.filterdamaClothes = this.filterdamaClothes.filter((clothes: any) =>
        (clothes.name.toLowerCase().indexOf(text.toLowerCase()) > -1)
      );
      console.log('Search:', this.filterdamaClothes);
    }
  }

  // filter(function(creature) {
  //   return creature.habitat == "Ocean";

  getDamaClothe(){
    this.clotheService.getClotheCategory(this.id).subscribe((resp)=>{
      this.listClothes = resp;
      this.listClothes = this.listClothes.clotheFilter;
      console.log(this.listClothes);
    });
  }
  public getDamaClothes() {
    this.serviceClothes.getClothes().subscribe((damaClothes: any) => {
      let filter = damaClothes.clothes.filter(function(dama){
        return dama.name == 'Niño';
      });
      this.clothesList = damaClothes.clothes;
      this.filterdamaClothes = damaClothes.clothes;
      console.log('>>>>:', filter);
    });
  }

  public createSubZone(name: any, subName: any, spaces: any, status: any) {
    const id = this.activatedRoute.snapshot.paramMap.get('idZone');
    const zoneId = parseInt(id, 10);
    // const idZone = parseInt(this.idZone, 10);
    const info = {
      name,
      subName,
      zoneId,
      spaces,
      status
    };

    this.serviceClothes.createClothe(info).subscribe(data => {
      this.damaClothes = data;
    });
    this.refreshClothes();
  }

  async updateSZ(id: any) {
    
  }

  deleteSubZone(id: Clothes) {
    this.serviceClothes.deleteClothe(id).subscribe(zone => {
      this.getDamaClothes();
    });
    this.refreshClothes();
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CarritoComponent,
    });
    modal.present();
  }

}
