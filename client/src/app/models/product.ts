export class Product {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imageUrl: string;

    constructor(id: number, nombre: string, descripcion: string, precio: number, imageUrl: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imageUrl = imageUrl;
    }
}
