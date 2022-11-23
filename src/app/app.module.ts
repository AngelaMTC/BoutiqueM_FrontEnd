import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { DamaComponent } from './components/dama/dama.component';
import { NinaComponent } from './components/nina/nina.component';
import { NinoComponent } from './components/nino/nino.component';
import { OtrosComponent } from './components/otros/otros.component';
import { BebeComponent } from './components/bebe/bebe.component';
import { CaballeroComponent } from './components/caballero/caballero.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DamaComponent,
    NinaComponent,
    NinoComponent,
    OtrosComponent,
    BebeComponent,
    CaballeroComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
