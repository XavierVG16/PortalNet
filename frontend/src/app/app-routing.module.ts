import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CategoryComponent } from './components/category/category.component'
import { Category } from './models/category';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProdutFormComponent } from './components/products/produt-form/produt-form.component';
import { EscritorioComponent } from './components/escritorio/escritorio.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import {ContratoComponent} from './components/contrato/contrato.component';

import { ErrorComponent } from './components/error/error.component';


import { from } from 'rxjs';

const routes: Routes = [

  {
    path: 'inicio',
    component: EscritorioComponent
  },
  {
    path: 'servicios',
    component: CategoryComponent
  },
  {
    path: 'proveedores',
    component: ProveedorComponent
  },
  {
    path:'equipos',
    component: EquipoComponent
  },
  {
    path:'contratos',
    component: ContratoComponent
  },
  {
    path: 'product',
    component: ProductListComponent

  },
  {
    path: 'produt/add',
    component: ProdutFormComponent
  },
  {
    path: '**',
    component: ErrorComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
