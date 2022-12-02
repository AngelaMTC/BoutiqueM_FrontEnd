import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Clothes } from 'src/app/models/clothes';
import { CategorysService } from 'src/app/services/category.service';

@Component({
  selector: 'app-dama',
  templateUrl: './dama.component.html',
  styleUrls: ['./dama.component.scss'],
})
export class DamaComponent implements OnInit {

  // clothesList: [] = [];
  damaClothes: any;
  idClothe: any;
  filterdamaClothes: any;
  clothes: any;

  clothesList: any = [
    {
      category: 'Vestido',
      name: 'Vestido Diamond',
      type: 'Vestido',
      size: 'M',
      color: 'Rosa',
      serialNumber: '118742237832',
      photo: '',
      price: '$210MX',
    },
    {
      category: 'Pantalón',
      name: 'Pantalón Levis',
      type: 'Pantalón',
      size: '9',
      color: 'Mezclilla Azul Claro',
      serialNumber: '32893983232',
      photo: '',
      price: '$230MX',
    },
    {
      category: 'Short',
      name: 'Short Vins',
      type: 'Short',
      size: '7',
      color: 'Negro',
      serialNumber: '13938237',
      photo: '',
      price: '$150MX',
    },
    {
      category: 'Falda',
      name: 'Falda Girly',
      type: 'Falda',
      size: 'M',
      color: 'Azul',
      serialNumber: '8237874287',
      photo: '',
      price: '$200MX',
    },
    {
      category: 'Suéter',
      name: 'Suéter Frutas',
      type: 'Suéter',
      size: 'G',
      color: 'Variado',
      serialNumber: '278427824',
      photo: '',
      price: '$350MX',
    },
    {
    category: 'Blusa',

    name: 'Girl pink',

    type: 'Blusa',

    size: 'S',

    color: 'Azul claro',

    serialNumber: '440926470122',

    photo: '',

    price: '$130MX',
  
    },
{

  category: 'Scrunchies',

    name: 'Girl fast',

      type: 'Scrunchies',

        size: 'S',

          color: 'Café',

            serialNumber: '991522738493',

              photo: '',

                price: '$20MX',
  
    },
{

  category: 'Huaraches',

    name: 'Girl beach',

      type: 'Huaraches',

        size: '13',

          color: 'Negro',

            serialNumber: '002647193622',

              photo: '',

                price: '$200MX',
  
    },
{

  category: 'Toalla',

    name: 'Girl water',

      type: 'Toalla',

        size: 'G',

          color: 'Rojo',

            serialNumber: '448362772935',

              photo: '',

                price: '$250MX',
  
    },
{

  category: 'Bra',

    name: 'Girl night',

      type: 'Bra',

        size: '28',

          color: 'Beige',

            serialNumber: '662933720174',

              photo: '',

                price: '$250MX',
  
    },
  ]

id = '6377a9a840d22b48c158cb2b';
listClothes: any;
constructor(
  private serviceClothes: ClothesService,
  private modalCtrl: ModalController,
  private activatedRoute: ActivatedRoute,
  private clotheService: ClothesService
) { }

ngOnInit() {
  // this.getDamaClothes();
  // this.getDamaClothe();
}

  // refreshClothes() {
  //   window.location.reload();
  // }

  // searchClothes(event) {
  //   const text = event.target.value;
  //   this.filterdamaClothes = this.clothesList;
  //   if (text && text.trim() !== '') {
  //     this.filterdamaClothes = this.filterdamaClothes.filter((clothes: any) =>
  //       (clothes.name.toLowerCase().indexOf(text.toLowerCase()) > -1)
  //     );
  //     console.log('Search:', this.filterdamaClothes);
  //   }
  // }

  // // filter(function(creature) {
  // //   return creature.habitat == "Ocean";

  // getDamaClothe() {
  //   this.clotheService.getClotheCategory(this.id).subscribe((resp) => {
  //     this.listClothes = resp;
  //     this.listClothes = this.listClothes.clotheFilter;
  //     console.log(this.listClothes);
  //   });
  // }
  // public getDamaClothes() {
  //   this.serviceClothes.getClothes().subscribe((damaClothes: any) => {
  //     let filter = damaClothes.clothes.filter(function (dama) {
  //       return dama.name == 'Niño';
  //     });
  //     this.clothesList = damaClothes.clothes;
  //     this.filterdamaClothes = damaClothes.clothes;
  //     console.log('>>>>:', filter);
  //   });
  // }

  // public createSubZone(name: any, subName: any, spaces: any, status: any) {
  //   const id = this.activatedRoute.snapshot.paramMap.get('idZone');
  //   const zoneId = parseInt(id, 10);
  //   // const idZone = parseInt(this.idZone, 10);
  //   const info = {
  //     name,
  //     subName,
  //     zoneId,
  //     spaces,
  //     status
  //   };

  //   this.serviceClothes.createClothe(info).subscribe(data => {
  //     this.damaClothes = data;
  //   });
  //   this.refreshClothes();
  // }

  // async updateSZ(id: any) {

  // }

  // deleteSubZone(id: Clothes) {
  //   this.serviceClothes.deleteClothe(id).subscribe(zone => {
  //     this.getDamaClothes();
  //   });
  //   this.refreshClothes();
  // }
}

