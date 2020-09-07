export class Proveedor {
    constructor(id_proveedor = '', proveedor_nombre = '', email = '', telefono = '', direccion = '', nombre_beneficiario = '', n_cuenta = '', cedula = '', banco= '') {
            this.id_proveedor = id_proveedor,
                this.proveedor_nombre = proveedor_nombre,
            this.email = email,
            this.telefono = telefono,
            this.direccion = direccion,
            this.nombre_beneficiario = nombre_beneficiario,
            this.n_cuenta = n_cuenta,
            this.cedula = cedula,
            this.banco = banco
    }
    id_proveedor: string;
    proveedor_nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    nombre_beneficiario: string;
    n_cuenta: string;
    cedula: string;
    banco: string;
}

