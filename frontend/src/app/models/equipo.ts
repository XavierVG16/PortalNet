export class Equipo {
    constructor(idequipo = '',equipo = '', caantidad = '', precio = '', serie='', _proveedor_nombre=''){
        this.idequipo = idequipo,
        this.equipo = equipo,
        this.cantidad= this.cantidad,
        this.serie = serie,
        this._proveedor_nombre = _proveedor_nombre
    }
idequipo: string;
    equipo: string;
    cantidad: string;
    precio: string;
    serie: string;
    _proveedor_nombre: string;
}
