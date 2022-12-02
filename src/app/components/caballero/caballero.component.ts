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

  caballeroList: any= [
    {
      category: 'Zapatos',

      name: 'Converse',

      type: 'Zapatos',

      size: '6',

      color: 'Normal',

      serialNumber: '782093567198',

      photo: '',

      price: '$900MX',

    },
    {
        category: 'Pantalón',
  
        name: 'Levis',
  
        type: 'Pantalón',
  
        size: 'M',
  
        color: 'Azul Claro',
  
        serialNumber: '6792651972',
  
        photo: '',
  
        price: '$250MX',
  
    },
    {
        category: 'Playera',
  
        name: 'Star',
  
        type: 'Playera',
  
        size: 'S',
  
        color: 'Amarillo',
  
        serialNumber: '510925638791',
  
        photo: '',
  
        price: '$100MX',
  
    },
    {
        category: 'Pantalón',
  
        name: 'Boots',
  
        type: 'Pantalón',
  
        size: 'G',
  
        color: 'Gris',
  
        serialNumber: '401529835617',
  
        photo: '',
  
        price: '$250MX',
  
    },
    {

        category: 'Calcetines',
  
        name: 'Flamingo',
  
        type: 'Calcetines',
  
        size: 'M',
  
        color: 'Negro',
  
        serialNumber: '5016273083622',
  
        photo: '',
  
        price: '$30MX',
  
    },
    {

        category: 'Playera',
  
        name: 'Light',
  
        type: 'Playera',
  
        size: 'G',
  
        color: 'Blanco',
  
        serialNumber: '118372240521',
  
        photo: '',
  
        price: '$100MX',
  
    },
    {

        category: 'Botas',
  
        name: 'Norteño',
  
        type: 'Botas',
  
        size: '10',
  
        color: 'Café',
  
        serialNumber: '339746102253',
  
        photo: '',
  
        price: '$300MX',
  
    },
    {

        category: 'Calzones',
  
        name: 'Boxers',
  
        type: 'Calzones',
  
        size: 'S',
  
        color: 'Rojo',
  
        serialNumber: '448275330914',
  
        photo: '',
  
        price: '$50MX',
  
    },
    {

        category: 'Camisa',
  
        name: 'Eco',
  
        type: 'Camisa',
  
        size: 'M',
  
        color: 'Naranja',
  
        serialNumber: '660263990153',
  
        photo: '',
  
        price: '$150MX',
  
    },
    {

        category: 'Playera',
  
        name: 'Light',
  
        type: 'Playera',
  
        size: 'G',
  
        color: 'Verde',
  
        serialNumber: '118372240521',
  
        photo: '',
  
        price: '$100MX',
  
    },
    {

        category: 'Playera',
  
        name: 'Light',
  
        type: 'Playera',
  
        size: 'G',
  
        color: 'Negro',
  
        serialNumber: '118372240521',
  
        photo: '',
  
        price: '$100MX',
  
    },
    {

        category: 'Playera',
  
        name: 'Light',
  
        type: 'Playera',
  
        size: 'G',
  
        color: 'Morada',
  
        serialNumber: '118372240521',
  
        photo: '',
  
        price: '$100MX',
  
    },
    {

        category: 'Pantalón',
  
        name: 'Levis',
  
        type: 'Pantalón',
  
        size: 'M',
  
        color: 'Azul Fuerte',
  
        serialNumber: '6792651972',
  
        photo: '',
  
        price: '$250MX',
  
    },
    {

        category: 'Pantalón',
  
        name: 'Levis',
  
        type: 'Pantalón',
  
        size: 'M',
  
        color: 'Negro',
  
        serialNumber: '6792651972',
  
        photo: '',
  
        price: '$250MX',
  
    },
    {

        category: 'Bermuda',
  
        name: 'Macn',
  
        type: 'Short',
  
        size: 'M',
  
        color: 'Azul marino',
  
        serialNumber: '779253774810',
  
        photo: '',
  
        price: '$150MX',
  
    }

  ]
  
  clothesList: [] = [];
  caballeroClothes: any;
  idClothe: any;
  filterCaballeroClothes: any;
  clothes: any;
  id ='6377a9b540d22b48c158cb2c';
  listClothes: any;

  constructor(
    private serviceClothes: ClothesService,
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getGentlemanClothe();
  }

  getGentlemanClothe(){
    this.serviceClothes.getClotheCategory(this.id).subscribe((resp)=>{
      this.listClothes = resp;
      this.listClothes = this.listClothes.clotheFilter;
      console.log(this.listClothes);
    });
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

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CarritoComponent,
    });
    modal.present();
  }
}

