import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // public appPages = [
  //   { title: 'Dama', icon: 'mail' },
  //   { title: 'Caballero', icon: 'paper-plane' },
  //   { title: 'Niña', url: '/components/Niña', icon: 'heart' },
  //   { title: 'Niño', url: '/components/Niño', icon: 'archive' },
  //   { title: 'Bebé', url: '/components/Bebe', icon: 'trash' },
  //   { title: 'Otros', url: '/components/Otros', icon: 'warning' },
  // ];
  public labels = ['Promociones', 'Descuentos', 'Premios', 'Contacto'];
  constructor() {}
}
