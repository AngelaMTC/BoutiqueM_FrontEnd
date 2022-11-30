import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothesService } from 'src/app/services/clothes.service';
import { Clothes } from 'src/app/models/clothes';
import { Category } from 'src/app/Models/category';
import { CategorysService } from 'src/app/services/category.service';
import { TypeClothesService } from 'src/app/services/typeClothe.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  clothe = new Clothes();
  clothes: any;
  listClothes: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sClothe: ClothesService,
    private sCategory: CategorysService,
    private sType: TypeClothesService
  ) { }

  ngOnInit() {
    this.getCategorys();
    this.getTypes();
  }

  refreshClothes() {
    window.location.reload();
  }
  getCategorys(){
    this.sCategory.getCategory().subscribe((resp: any[])=>{
      this.listClothes = resp;
      console.log('---',this.listClothes);
    });
  }

  getTypes(){
    this.sType.getTypeClothe().subscribe((resp)=>{
      this.listClothes = resp;
      this.listClothes = this.listClothes;
      console.log('<<<',this.listClothes);
    });
  }

  public createSubZone(category: any, name: any, type:any, size: any, color: any, serialNumber: any, photo: any, price:any) {
    const id = this.activatedRoute.snapshot.paramMap.get('idZone');
    const zoneId = parseInt(id, 10);
    // const idZone = parseInt(this.idZone, 10);
    const info = {
      category, name, type, size, color, serialNumber, photo, price
    };

    this.sClothe.createClothe(info).subscribe(data => {
      this.clothes = data;
    });
    this.refreshClothes();
  }

  btnCreateClothes(id: any) {
    console.log(id);
    this.createSubZone(
      this.clothe.category,
      this.clothe.name,
      this.clothe.type,
      this.clothe.size,
      this.clothe.color,
      this.clothe.serialNumber,
      this.clothe.photo,
      this.clothe.price,
    );
    // this.refreshZones();
    // this.modal.dismiss();
  }
  
}

