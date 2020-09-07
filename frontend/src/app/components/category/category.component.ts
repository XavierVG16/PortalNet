import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../models/category';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(public categoryService:CategoryService, private toastr: ToastrService) { 
    
  }
  filterPost = '';

  pageActual: number=1;
  ngOnInit(): void {
    this.getCategories();
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.categoryService.selectedCategory = new Category();
    }
  }
  getCategories() {
    this.categoryService.getCategories()
      .subscribe(res => {
        this.categoryService.categories = res as Category[];
      });
  }
  addCategory(form?: NgForm) {
    if(form.valid){
      console.log(form.value);
  
      if(form.value.idplan_servicio) {
        this.categoryService.putCategory(form.value)
          .subscribe(res => {
            this.resetForm(form);
            this.getCategories();
            this.toastr.success('Actualizado con éxito!','Servicio', {
              timeOut: 2000
            });
            
          });
      } else {
        this.categoryService.postCategory(form.value)
        .subscribe(res => {
          this.getCategories();
          this.resetForm(form);
          this.toastr.success('Guardado con éxito!','Servicio', {
            timeOut: 2000
          });
          //M.toast({html: 'Save successfully'});
        });
      }

    }else {
      this.toastr.error('Complete los campos','Por favor!', { timeOut: 2000 });
    }
  
    
   
    
  }

  editCategory(category: Category) {
    this.categoryService.selectedCategory = category;
  }

  deleteCategory(_id: string, form: NgForm) {
    if(confirm('Seguro que deseas eliminar la categoria?')) {
      this.categoryService.deleteCategory(_id)
        .subscribe(res => {
          this.getCategories();
          this.resetForm(form);
          this.toastr.success('Eliminado con éxito!','Servicio', {timeOut: 2000 });
          //M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

}
