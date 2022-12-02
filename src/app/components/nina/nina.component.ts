import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-nina',
  templateUrl: './nina.component.html',
  styleUrls: ['./nina.component.scss'],
})
export class NinaComponent implements OnInit {

  girlClothes: any= [
    {
      category: 'Zapatos',

      name: 'Girl nice',

      type: 'Zapatos',

      size: '6',

      color: 'Morado',

      serialNumber: '782093567198',

      photo: '',

      price: '$300MX',

    },
    {
        category: 'Vestido',
  
        name: 'Girl chic',
  
        type: 'Vestido',
  
        size: 'M',
  
        color: 'Rosa',
  
        serialNumber: '6792651972',
  
        photo: '',
  
        price: '$150MX',
  
    },
    {
        category: 'Playera',
  
        name: 'Girl star',
  
        type: 'Playera',
  
        size: 'S',
  
        color: 'Amarillo',
  
        serialNumber: '510925638791',
  
        photo: '',
  
        price: '$100MX',
  
    },
    {
        category: 'Pantalón',
  
        name: 'Girl flower',
  
        type: 'Pantalón',
  
        size: 'G',
  
        color: 'Gris',
  
        serialNumber: '401529835617',
  
        photo: '',
  
        price: '$250MX',
  
    },
    {

        category: 'Calcetines',
  
        name: 'Girl star',
  
        type: 'Calcetines',
  
        size: 'M',
  
        color: 'Negro',
  
        serialNumber: '5016273083622',
  
        photo: '',
  
        price: '$30MX',
  
    },
    {

        category: 'Top',
  
        name: 'Girl light',
  
        type: 'Top',
  
        size: 'G',
  
        color: 'Blanco',
  
        serialNumber: '118372240521',
  
        photo: '',
  
        price: '$100MX',
  
    },
    {

        category: 'Botas',
  
        name: 'Girl heart',
  
        type: 'Botas',
  
        size: '10',
  
        color: 'Café',
  
        serialNumber: '339746102253',
  
        photo: '',
  
        price: '$300MX',
  
    },
    {

        category: 'Calzones',
  
        name: 'Girl beauty',
  
        type: 'Calzones',
  
        size: 'S',
  
        color: 'Rojo',
  
        serialNumber: '448275330914',
  
        photo: '',
  
        price: '$50MX',
  
    },
    {

        category: 'Camisa',
  
        name: 'Girl tree',
  
        type: 'Camisa',
  
        size: 'M',
  
        color: 'Naranja',
  
        serialNumber: '660263990153',
  
        photo: '',
  
        price: '$150MX',
  
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
    {

        category: 'Short',
  
        name: 'Girl cute',
  
        type: 'Short',
  
        size: 'M',
  
        color: 'Azul marino',
  
        serialNumber: '779253774810',
  
        photo: '',
  
        price: '$150MX',
  
    }

  ]
  id ='63531cf17ec375a6b31ddc81';
  listClothes: any;

  constructor(private clotheService: ClothesService) { }

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
}
