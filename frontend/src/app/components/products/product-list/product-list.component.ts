import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../..//models/category'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public productService:ProductService, public categoryService: CategoryService,private toastr: ToastrService) { }
  pageActual: number=1;

  ngOnInit(): void {
    this.getproducts();
    this.getCategories();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.productService.selectedProduct = new Product();
    }
  }
  getproducts() {
    this.productService.getproducts()
      .subscribe(res => {
        this.productService.products = res as Product[];
      });

  }
  editproduct(product : Product){
    this.productService.selectedProduct = product;
  }
  getCategories() {
    this.categoryService.getCategories()
      .subscribe(res => {
        this.categoryService.categories = res as Category[];
      });
  }

  add(form?: NgForm){
    if(form.valid){
      if(form.value.idarticulo) {
        console.log(form.value.idarticulo)
        this.productService.putProduct(form.value)
          .subscribe(res => {
            this.getproducts();
            this.toastr.success('Actualizado con éxito!','Producto', {timeOut: 2000 });
           
          });
      } else {
        
          console.log('error')
          //M.toast({html: 'Save successfully'});
        
      }

    }else{ this.toastr.error('Complete los campos','Por favor!', { timeOut: 2000 }); }
 
   
      
   
  }



  deleteProduct(_id: String, form: NgForm){
    if(confirm('Esta seguro que desea eliminar el producto?'))
    {
      this.productService.deleteProduct(_id)
      .subscribe(res =>{
        this.getproducts();
        this.toastr.success('Eliminado con éxito!','Producto', {timeOut: 2000 });


      })
    }
  }
}
