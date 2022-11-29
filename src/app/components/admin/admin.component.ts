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

  constructor() { }

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

