import { Component, OnInit } from '@angular/core';
import { CategorysService } from 'src/app/services/category.service';

@Component({
  selector: 'app-nino',
  templateUrl: './nino.component.html',
  styleUrls: ['./nino.component.scss'],
})
export class NinoComponent implements OnInit {

  clothesList:[] = [];

  constructor(
    private sC: CategorysService
  ) { }

  ngOnInit(
  ) {
    this.getCategory();
  }

  public getCategory() {
    this.sC.getCategory().subscribe((damaClothes: any) => {
      this.clothesList = damaClothes;
      // this.filterdamaClothes = damaClothes.clothes; 
      console.log('ajhckasjb', damaClothes);
    });
  }

}
