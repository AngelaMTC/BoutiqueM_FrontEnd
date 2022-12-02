import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.scss'],
})
export class OtrosComponent implements OnInit {
  
  id ='6377a9d740d22b48c158cb2e';
  listClothes: any;

  otrosList: any = [
    {
      category: 'Donitas',

      name: 'Donitas Candy',

      type: 'Otros',

      size: '-',

      color: 'Verde',

      serialNumber: '219941207842',

      photo: '',

      price: '$14MX',

    },
    {
        category: 'Bolitas',
  
        name: 'Bolitas Candy',
  
        type: 'Otros',
  
        size: '-',
  
        color: 'Blanco',
  
        serialNumber: '098207094765',
  
        photo: '',
  
        price: '$10MX',
  
    },
    {
        category: 'Moño',
  
        name: 'Baby Moño',
  
        type: 'Otros',
  
        size: '-',
  
        color: 'Azul',
  
        serialNumber: '651865523765',
  
        photo: '',
  
        price: '$45MX',
  
    },
    {
        category: 'Listón',
  
        name: 'Baby lilie',
  
        type: 'Otros',
  
        size: '-',
  
        color: 'Gris',
  
        serialNumber: '128745239762',
  
        photo: '',
  
        price: '$30MX',
  
    },
    {

        category: 'Clip Corazón',
  
        name: 'Clip Heart',
  
        type: 'Otros',
  
        size: '-',
  
        color: 'Rosa',
  
        serialNumber: '187356029654',
  
        photo: '',
  
        price: '$20MX',
  
    },
    {

        category: 'Moño Bubbles',
  
        name: 'Baby Bubbles',
  
        type: 'Otros',
  
        size: '-',
  
        color: 'Amarillo',
  
        serialNumber: '753620984617',
  
        photo: '',
  
        price: '$35MX',
  
    },
    {

        category: 'Frasada',
  
        name: 'Frasada',
  
        type: 'Otros',
  
        size: 'Individual',
  
        color: 'Rosa',
  
        serialNumber: '673094658261',
  
        photo: '',
  
        price: '$120MX',
  
    },
    {

        category: 'Frasada',
  
        name: 'Frasada',
  
        type: 'Otros',
  
        size: 'Individual',
  
        color: 'Azul',
  
        serialNumber: '673094658261',
  
        photo: '',
  
        price: '$120MX',
  
    },
    {

        category: 'Frasada',
  
        name: 'Frasada',
  
        type: 'Otros',
  
        size: 'Individual',
  
        color: 'Verde',
  
        serialNumber: '673094658261',
  
        photo: '',
  
        price: '$120MX',
  
    },
    {

        category: 'Frasada',
  
        name: 'Frasada',
  
        type: 'Otros',
  
        size: 'Individual',
  
        color: 'Amarillo',
  
        serialNumber: '673094658261',
  
        photo: '',
  
        price: '$120MX',
  
    },
    {

        category: 'Moño',
  
        name: 'Baby Moño',
  
        type: 'Otros',
  
        size: '-',
  
        color: 'Rosa',
  
        serialNumber: '651865523765',
  
        photo: '',
  
        price: '$45MX',
  
    },
    {

        category: 'Moño',
  
        name: 'Baby Moño',
  
        type: 'Otros',
  
        size: '-',
  
        color: 'Amarillo',
  
        serialNumber: '651865523765',
  
        photo: '',
  
        price: '$45MX',
  
    },
    {

        category: 'Moño',
  
        name: 'Baby Moño',
  
        type: 'Otros',
  
        size: '-',
  
        color: 'Verde',
  
        serialNumber: '651865523765',
  
        photo: '',
  
        price: '$45MX',
  
    },
    {

        category: 'Maquillaje',
  
        name: 'Pegamento de Pestañas',
  
        type: 'Maquillaje',
  
        size: '-',
  
        color: 'Blanco',
  
        serialNumber: '395764830912',
  
        photo: '',
  
        price: '$70MX',
  
    },
    {

        category: 'Maquillaje',
  
        name: 'Pegamento de Pestañas',
  
        type: 'Maquillaje',
  
        size: '-',
  
        color: 'Negro',
  
        serialNumber: '395764830912',
  
        photo: '',
  
        price: '$70MX',
  
    }

  ]
  
  constructor(private clotheService: ClothesService) { }

  ngOnInit() {
    this.getOthersClothe();
  }

  getOthersClothe(){
    this.clotheService.getClotheCategory(this.id).subscribe((resp)=>{
      this.listClothes = resp;
      this.listClothes = this.listClothes.clotheFilter;
      console.log(this.listClothes);
    });
  }
}
