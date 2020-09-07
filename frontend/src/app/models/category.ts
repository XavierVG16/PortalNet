export class Category {
    constructor(idplan_servicio = '', nombre_plan = '', descripcion = '', precio = '', cantidad_megas = '', subida_kbps = '', bajada_kbps = '') {
            this.idplan_servicio = idplan_servicio,
            this.nombre_plan = nombre_plan,
            this.descripcion = descripcion,
            this.precio = precio,
            this.cantidad_megas = cantidad_megas,
            this.subida_kbps = subida_kbps,
            this.bajada_kbps = bajada_kbps

    }

    idplan_servicio: String;

    nombre_plan: string;
    descripcion: string;
    precio: string;
    cantidad_megas: string;
    subida_kbps: string;
    bajada_kbps: string;

}
