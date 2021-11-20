import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../estetica/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../consultas/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tienda/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'quienes-somos',
        loadChildren: () => import('../quienes-somos/quienes-somos.module').then(m => m.QuienesSomosPageModule )
      },
      {
        path: 'contacto',
        loadChildren: () => import('../contacto/contacto.module').then(m => m.ContactoPageModule )
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule )
      },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule )
      },
      {
        path: 'ubicacion',
        loadChildren: () => import('../ubicacion/ubicacion.module').then(m => m.UbicacionPageModule )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
