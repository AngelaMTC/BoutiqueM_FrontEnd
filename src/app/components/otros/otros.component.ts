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
