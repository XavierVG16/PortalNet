import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Equipo} from '../../models/equipo';
import { EquipoService } from '../../services/equipo.service';
import { Proveedor } from '../../models/proveedor'
import {ProveedorService} from '../../services/proveedor.service'
  import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  constructor(public equipoService: EquipoService, public proveedorService: ProveedorService, private toastr: ToastrService) { }
  pageActual: number = 1;
  ngOnInit(): void {
    this.getEquipos();
    this.getProveedores();
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.equipoService.selectedEquipo = new Equipo();
    }
  }

  getEquipos() {
    this.equipoService.getEquipos()
      .subscribe(res => {
        this.equipoService.equipos = res as Equipo[];
      });
  }
  getProveedores() {
    this.proveedorService.getProveedores()
      .subscribe(res => {
        this.proveedorService.proveedores = res as Proveedor[];
      });
  }
  addEquipo(form?: NgForm) {
    if (form.valid) {
      console.log(form.value);

      if (form.value.idequipo) {
        this.equipoService.putEquipo(form.value)
          .subscribe(res => {
            this.resetForm(form);
            this.getEquipos();
            this.toastr.success('Actualizado con éxito!', 'Equipo', {
              timeOut: 2000
            });

          });
      } else {
        this.equipoService.postEquipo(form.value)
          .subscribe(res => {
            this.getEquipos();
            this.resetForm(form);
            this.toastr.success('Guardado con éxito!', 'Equipo', {
              timeOut: 2000
            });
            //M.toast({html: 'Save successfully'});
          });
      }

    } else {
      this.toastr.error('Complete los campos', 'Por favor!', { timeOut: 2000 });
    }




  }

  editEquipo(equipo: Equipo) {
    this.equipoService.selectedEquipo = equipo;
  }

  deleteCategory(_id: string, form: NgForm) {
    if (confirm('Seguro que deseas eliminar el equipo?')) {
      this.equipoService.deleteEquipo(_id)
        .subscribe(res => {
          this.getEquipos();
          this.resetForm(form);
          this.toastr.success('Eliminado con éxito!', 'Equipo', { timeOut: 2000 });
          //M.toast({html: 'Deleted Succesfully'});
        });
    }
  }


}
