import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-bebe',
  templateUrl: './bebe.component.html',
  styleUrls: ['./bebe.component.scss'],
})
export class BebeComponent implements OnInit {

  babyClothes: any= [
    {
      category: 'Mameluco',

      name: 'Baby moon',

      type: 'Mameluco',

      size: 'S',

      color: 'Verde',

      serialNumber: '219941207842',

      photo: '',

      price: '$140MX',

    },
    {
        category: 'Pañalero',
  
        name: 'Baby chic',
  
        type: 'Pañalero',
  
        size: 'S',
  
        color: 'Blanco',
  
        serialNumber: '098207094765',
  
        photo: '',
  
        price: '$60MX',
  
    },
    {
        category: 'Playera',
  
        name: 'Baby star',
  
        type: 'Playera',
  
        size: 'M',
  
        color: 'Azul',
  
        serialNumber: '651865523765',
  
        photo: '',
  
        price: '$45MX',
  
    },
    {
        category: 'Pantalón',
  
        name: 'Baby cow',
  
        type: 'Pantalón',
  
        size: 'S',
  
        color: 'Gris',
  
        serialNumber: '128745239762',
  
        photo: '',
  
        price: '$60MX',
  
    },
    {

        category: 'Calcetines',
  
        name: 'Baby sky',
  
        type: 'Calcetines',
  
        size: 'S',
  
        color: 'Rosa',
  
        serialNumber: '187356029654',
  
        photo: '',
  
        price: '$20MX',
  
    },
    {

        category: 'Babero',
  
        name: 'Baby light',
  
        type: 'Babero',
  
        size: 'S',
  
        color: 'Amarillo',
  
        serialNumber: '753620984617',
  
        photo: '',
  
        price: '$35MX',
  
    },
    {

        category: 'Zapatos',
  
        name: 'Baby heart',
  
        type: 'Zapatos',
  
        size: '5',
  
        color: 'Negro',
  
        serialNumber: '673094658261',
  
        photo: '',
  
        price: '$300MX',
  
    },
    {

        category: 'Gorro',
  
        name: 'Baby cold',
  
        type: 'Gorro',
  
        size: 'M',
  
        color: 'Café',
  
        serialNumber: '562093561983',
  
        photo: '',
  
        price: '$40MX',
  
    },
    {

        category: 'Guantes',
  
        name: 'Baby tree',
  
        type: 'Guantes',
  
        size: 'S',
  
        color: 'Morado',
  
        serialNumber: '983620946712',
  
        photo: '',
  
        price: '$30MX',
  
    },
    {

        category: 'Pechera',
  
        name: 'Baby cowboy',
  
        type: 'Pechera',
  
        size: 'M',
  
        color: 'Azul claro',
  
        serialNumber: '162093640913',
  
        photo: '',
  
        price: '$150MX',
  
    },
    {

        category: 'Botas',
  
        name: 'Baby Christmas',
  
        type: 'Botas',
  
        size: '1',
  
        color: 'Gris',
  
        serialNumber: '015398501749',
  
        photo: '',
  
        price: '$250MX',
  
    },
    {

        category: 'Huaraches',
  
        name: 'Baby beach',
  
        type: 'Huaraches',
  
        size: '3',
  
        color: 'Blanco',
  
        serialNumber: '015298728496',
  
        photo: '',
  
        price: '$150MX',
  
    },
    {

        category: 'Toalla',
  
        name: 'Baby water',
  
        type: 'Toalla',
  
        size: 'G',
  
        color: 'Rojo',
  
        serialNumber: '104729473013',
  
        photo: '',
  
        price: '$200MX',
  
    },
    {

        category: 'Cobija',
  
        name: 'Baby night',
  
        type: 'Cobija',
  
        size: 'G',
  
        color: 'Beige',
  
        serialNumber: '395764830912',
  
        photo: '',
  
        price: '$250MX',
  
    },
    {

        category: 'Moño',
  
        name: 'Baby cute',
  
        type: 'Moño',
  
        size: 'M',
  
        color: 'Naranja',
  
        serialNumber: '490265836217',
  
        photo: '',
  
        price: '$20MX',
  
    }

  ]
  id ='6377a9cc40d22b48c158cb2d';
  listClothes: any;

  constructor(private clotheService: ClothesService) { }

  ngOnInit() {
    this.getBabyClothe();
  }

  getBabyClothe(){
    this.clotheService.getClotheCategory(this.id).subscribe((resp)=>{
      this.listClothes = resp;
      this.listClothes = this.listClothes.clotheFilter;
      console.log(this.listClothes);
    });
  }
}
