import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BebeComponent } from './components/bebe/bebe.component';
import { CaballeroComponent } from './components/caballero/caballero.component';
import { CarritolistaComponent } from "./components/carritolista/carritolista.component";
import { DamaComponent } from './components/dama/dama.component';
import { NinaComponent } from './components/nina/nina.component';
import { NinoComponent } from './components/nino/nino.component';
import { OtrosComponent } from './components/otros/otros.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { EditpasswordComponent } from './components/user/editpassword/editpassword.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path:'carritolista',
    component:CarritolistaComponent 
  },
  {
    path: 'dama',
    component:DamaComponent
  },
  {
    path: 'caballero',
    component:CaballeroComponent
  },
  {
    path: 'niña',
    component:NinaComponent
  },
  {
    path: 'niño',
    component: NinoComponent
  },
  {
    path: 'bebe',
    component: BebeComponent
  },
  {
    path: 'otros',
    component: OtrosComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'editpassword',
    component: EditpasswordComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
