import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Clothes } from 'src/app/models/clothes';

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

  constructor(
    private serviceClothes: ClothesService,
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getDamaClothes();
  }

  refreshClothes(){
    window.location.reload();
  }

  public getDamaClothes() {
    this.serviceClothes.getClothes().subscribe((damaClothes: any) => {
      this.clothesList = damaClothes.data;
      this.filterdamaClothes = damaClothes.data; 
      console.log('>>>>:', damaClothes);
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
}

