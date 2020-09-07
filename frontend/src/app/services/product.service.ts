import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import {Product} from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: Product;
  products: Product[];
  readonly URL_API = 'http://localhost:3000/producto/'

  constructor(private http : HttpClient) {
    this.selectedProduct = new Product();
   }
  getproducts(){
    return this.http.get(this.URL_API);
  }
  getProduct(idarticulo: String){
    return this.http.get(this.URL_API+ `/${idarticulo}`);
    
  }

  postProduct(codigo: string, stock: string, descripcion: string, producto: string,categoria:string, photo: File ){
    const fd = new FormData();
    
    fd.append('codigo', codigo );
    fd.append('stock', stock );
    fd.append('descripcion', descripcion );
    fd.append('producto', producto );
    fd.append('categoria',categoria);

    fd.append('image', photo);

    
    return this.http.post(this.URL_API,fd);
  }

  putProduct(product: Product) {
    return this.http.put(this.URL_API + `/${product.idarticulo}`, product);
  }

  deleteProduct(public_id: String){
    return this.http.delete(this.URL_API+ `/${public_id}`);

  }

}
