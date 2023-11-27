import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})

export class MensajeService{

    mensaje = new Subject();

    constructor(){}

    sendMensaje(product: Product): void{
        this.mensaje.next(product);

    }

    getMensaje():Observable<any>{
        return this.mensaje.asObservable();
    }

}