import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{ProductService} from '../../../services/product.service';
import {CategoryService} from '../../../services/category.service';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-produt-form',
  templateUrl: './produt-form.component.html',
  styleUrls: ['./produt-form.component.css']
})
export class ProdutFormComponent implements OnInit {
  photoSelected: string | ArrayBuffer;
  file: File;

  constructor(public productService: ProductService ,public categoryService: CategoryService , public router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.productService.selectedProduct = new Product();
    }
  }
  getCategories() {
    this.categoryService.getCategories()
      .subscribe(res => {
        this.categoryService.categories = res as Category[];
      });
  }
  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }


c
    


  addProduct(form?: NgForm){
    if(form.valid){
    const {idarticulo, codigo, stock, descripcion, producto, categoria} = form.value;
    const data =  {idarticulo, codigo, stock, descripcion, producto,categoria};
    this.router.navigate(['product'])
     this.productService.postProduct(codigo, stock, descripcion, producto, categoria,  this.file)
     .subscribe(res =>{
      


     })
      
          
        
    }else{
      console.log('dsfd')
    }
  
  }


}
