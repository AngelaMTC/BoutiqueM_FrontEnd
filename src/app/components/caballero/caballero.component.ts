import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Clothes } from 'src/app/models/clothes';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-caballero',
  templateUrl: './caballero.component.html',
  styleUrls: ['./caballero.component.scss'],
})
export class CaballeroComponent implements OnInit {

  clothesList: [] = [];
  caballeroClothes: any;
  idClothe: any;
  filterCaballeroClothes: any;
  clothes: any;

  constructor(
    private serviceClothes: ClothesService,
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getCaballeroClothes();
  }

  refreshClothes(){
    window.location.reload();
  }

  searchClothes(event) {
    const text = event.target.value;
    this.filterCaballeroClothes = this.clothesList;
    if (text && text.trim() !== '') {
      this.filterCaballeroClothes = this.filterCaballeroClothes.filter((clothes: any) =>
        (clothes.name.toLowerCase().indexOf(text.toLowerCase()) > -1)
      );
      console.log('Search:', this.filterCaballeroClothes);
    }
  }


  public getCaballeroClothes() {
    this.serviceClothes.getClothes().subscribe((caballeroClothes: any) => {
      this.clothesList = caballeroClothes.clothes;
      this.filterCaballeroClothes = caballeroClothes.clothes; 
      console.log('>>>>:', caballeroClothes.clothes);
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
      this.caballeroClothes = data;
    });
    this.refreshClothes();
  }

  async updateSZ(id: any) {
    
  }

  deleteSubZone(id: Clothes) {
    this.serviceClothes.deleteClothe(id).subscribe(zone => {
      this.getCaballeroClothes();
    });
    this.refreshClothes();
  }
}

