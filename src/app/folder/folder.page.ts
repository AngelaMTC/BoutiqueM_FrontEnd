import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../services/clothes.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  listOfClothes: any;

  constructor(private clotheService: ClothesService) {}

  ngOnInit() {
    this.getClothes();
  }

  getClothes() {
    this.clotheService.getClothes().subscribe((resp) => {
      this.listOfClothes = resp.clothes;
      console.log(this.listOfClothes);
    });
  }
}
