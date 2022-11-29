import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothesService } from 'src/app/services/clothes.service';
import { Clothes } from 'src/app/models/clothes';
import { Category } from 'src/app/Models/category';
import { CategorysService } from 'src/app/services/category.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  adminClothes: any; 
  clothe = new Clothes();
  clothesList: [] = [];
  clothes: any;
  categories: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceClothes: ClothesService,
    private sC: CategorysService
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  refreshClothes(){
    window.location.reload();
  }

  public getCategory() {
    this.sC.getCategory().subscribe((categories: any) => {
      this.clothesList = categories;
      // this.filtercategories = categories.clothes; 
      console.log('ajhckasjb', categories);
    });
  }

  public createClothes(
    category: any,
      name: any,
      type: any,
      size: any,
      color: any,
      serialNumber: any,
      photo: any,
      price: any
  ) {
    // const id = this.activatedRoute.snapshot.paramMap.get('idZone');
    // const zoneId = parseInt(id, 10);
    // const idZone = parseInt(this.idZone, 10);
    const info = {
      category,
      name,
      type,
      size,
      color,
      serialNumber,
      photo,
      price
    };

    this.serviceClothes.createClothe(info).subscribe(data => {
      this.adminClothes = data;
    });
    this.refreshClothes();
  }

  btnCreateClothes(){
    this.createClothes(
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
  }

}
