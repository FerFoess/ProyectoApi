import { Injectable } from '@angular/core'
import { CartItemModel } from '../models/cart-item-model';

@Injectable({
    providedIn: 'root'
})
export class StorageService{
    
    constructor(){}

    existCart():boolean{
        return localStorage.getItem('cart') != null;
    }

    setCart(cart: CartItemModel[]): void{
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    getCart(): CartItemModel[] {
        const cartString = localStorage.getItem('cart');
        if (cartString !== null) {
            return JSON.parse(cartString);
        } else {
            return [];
        }
    }
    

    clear():void {
        localStorage.removeItem('cart');
    }
}