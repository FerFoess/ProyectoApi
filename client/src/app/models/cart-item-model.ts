import { Product } from "./product";

export class CartItemModel{
    productId: number;
    productNombre: string;
    productPrecio: number;
    qty: number;

    constructor(product: Product){
        this.productId = product.id;
        this.productNombre = product.nombre;
        this.productPrecio = product.precio;
        this.qty = 1;

    }
}