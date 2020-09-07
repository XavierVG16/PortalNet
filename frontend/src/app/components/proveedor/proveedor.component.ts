import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from 'src/app/models/proveedor';
@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  constructor(public proveedorService: ProveedorService, private toastr: ToastrService) { }
  pageActual: number = 1;
  ngOnInit(): void {
    this.getProveedores();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.proveedorService.selectedProveedor = new Proveedor();
    }
  }
  getProveedores() {
    this.proveedorService.getProveedores()
      .subscribe(res => {
        this.proveedorService.proveedores = res as Proveedor[];
      });
  }
  addProveedor(form?: NgForm) {
    if (form.valid) {
      console.log(form.value);

      if (form.value.id_proveedor) {
        this.proveedorService.putProveedor(form.value)
          .subscribe(res => {
            this.resetForm(form);
            this.getProveedores();
            this.toastr.success('Actualizado con éxito!', 'Proveedor', {
              timeOut: 2000
            });

          });
      } else {
        this.proveedorService.postProveedor(form.value)
          .subscribe(res => {
            this.getProveedores();
            this.resetForm(form);
            this.toastr.success('Guardado con éxito!', 'Proveedor', {
              timeOut: 2000
            });
            //M.toast({html: 'Save successfully'});
          });
      }

    } else {
      this.toastr.error('Complete los campos', 'Por favor!', { timeOut: 2000 });
    }




  }

  editProveedor(proveedor: Proveedor) {
    this.proveedorService.selectedProveedor = proveedor;
  }

  deleteCategory(_id: string, form: NgForm) {
    if (confirm('Seguro que deseas eliminar el proveedor ?')) {
      this.proveedorService.deleteProveedor(_id)
        .subscribe(res => {
          this.getProveedores();
          this.resetForm(form);
          this.toastr.success('Eliminado con éxito!', 'Proveedor', { timeOut: 2000 });
          //M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

}
