import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-nina',
  templateUrl: './nina.component.html',
  styleUrls: ['./nina.component.scss'],
})
export class NinaComponent implements OnInit {

 
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
