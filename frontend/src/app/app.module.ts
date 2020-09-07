import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
 
import { CategoryComponent } from './components/category/category.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProdutFormComponent } from './components/products/produt-form/produt-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ErrorComponent } from './components/error/error.component';
import { EscritorioComponent } from './components/escritorio/escritorio.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { ContratoComponent } from './components/contrato/contrato.component';




@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    FilterPipe,
    FooterComponent,
    ProductListComponent,
    ProdutFormComponent,
    NavigationComponent,
    ErrorComponent,
    EscritorioComponent,
    ProveedorComponent,
    EquipoComponent,
    ContratoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
