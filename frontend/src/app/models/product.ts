export class Product {
    constructor(idarticulo='',categoria ='',codigo = '', producto = '', stock='', descripcion='', imageURL='', public_id='',nombre='') {
        this.idarticulo= idarticulo,
        this.categoria=categoria,
        this.codigo=codigo,
        this.producto= producto,
        this.stock =stock,
        this.descripcion= descripcion,
        this.imageURL = imageURL,
        this.public_id = public_id,
        this.nombre= nombre     
 
    }

    idarticulo: String;
    categoria: String;
    codigo: String;
    producto: String;
    stock: String;
    descripcion: String;
    imageURL: String;
    public_id:String;
    nombre: String

}
