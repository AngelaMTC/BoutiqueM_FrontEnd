/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../../services/clothes.service';

@Component({
  selector: 'app-nino',
  templateUrl: './nino.component.html',
  styleUrls: ['./nino.component.scss'],
})
export class NinoComponent implements OnInit {

  id ='6352c24690ebeea5509ca0ba';
  listClothes: any;

  constructor(private clotheService: ClothesService) { }

  ngOnInit() {
    this.getBoyClothe();
  }

  getBoyClothe(){
    this.clotheService.getClotheCategory(this.id).subscribe((resp)=>{
      this.listClothes = resp;
      this.listClothes = this.listClothes.clotheFilter;
      console.log(this.listClothes);
    });
  }
}
