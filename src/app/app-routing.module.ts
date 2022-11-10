import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BebeComponent } from './components/bebe/bebe.component';
import { CaballeroComponent } from './components/caballero/caballero.component';
import { DamaComponent } from './components/dama/dama.component';
import { NinaComponent } from './components/nina/nina.component';
import { NinoComponent } from './components/nino/nino.component';
import { OtrosComponent } from './components/otros/otros.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
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
