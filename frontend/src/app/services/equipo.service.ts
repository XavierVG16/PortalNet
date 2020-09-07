import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
selectedEquipo: Equipo;
equipos : Equipo[];
  readonly URL_API = 'http://localhost:3000/equipo/';

  constructor(private http: HttpClient) { 
    this.selectedEquipo = new Equipo();
  }
  getEquipos() {
    return this.http.get(this.URL_API);
  }

  postEquipo(equipo: Equipo) {
    return this.http.post(this.URL_API, equipo);
  }

  putEquipo(equipo: Equipo) {
    return this.http.put(this.URL_API + `/${equipo.idequipo}`, equipo);
  }

  deleteEquipo(idequipo: string) {
    return this.http.delete(this.URL_API + `/${idequipo}`);
  }
}
