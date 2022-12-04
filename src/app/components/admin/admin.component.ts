import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';
import { AlertController } from '@ionic/angular';
import { CategorysService } from 'src/app/services/category.service';
import { TypeClothesService } from 'src/app/services/typeClothe.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  types: any;
  categories: any;
  clothe = {
    category: '',
    name: '',
    type: '',
    size: '',
    color: '',
    serialNumber: '',
    photo: '',
    precio: '',
  };

  constructor(
    private sClothe: ClothesService,
    private sCategory: CategorysService,
    private sType: TypeClothesService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.getTypes();
    this.getCategories();
  }

  getTypes() {
    this.sType.getTypeClothe().subscribe((resp) => {
      this.types = resp;
      this.types = this.types.cont.typeClothe;
    });
  }

  getCategories() {
    this.sCategory.getCategory().subscribe((resp) => {
      this.categories = resp;
      this.categories = this.categories.cont.category;
    });
  }

  setcategory(category: string) {
    this.clothe.category = category;
  }

  setname(name: string) {
    this.clothe.name = name;
  }

  settype(type: string) {
    this.clothe.type = type;
  }

  setsize(size: string) {
    this.clothe.size = size;
  }

  setcolor(color: string) {
    this.clothe.color = color;
  }

  setserialNumber(serialNumber: string) {
    this.clothe.serialNumber = serialNumber;
  }

  setphoto(photo: string) {
    this.clothe.photo = photo;
  }

  setprecio(precio: string) {
    this.clothe.precio = precio;
  }

  saveClothe(){
    this.sClothe.createClothe(this.clothe).subscribe(resp=>{
      console.log(resp);
      if(resp.err===false){
        this.alertCtrl.create({
          header: 'Producto registrado con exito',
        }).then(res=>{
          res.present();
        });
      }
    });
  }
}
