import { Component,Input,OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-principal-item',
  templateUrl: './principal-item.component.html',
  styleUrls: ['./principal-item.component.css']
})
export class PrincipalItemComponent implements OnInit{

  @Input() product!: Product;


  constructor(
    private mensajeService: MensajeService
  ){}

  ngOnInit(): void {
  }


  addToCart():void{
    this.mensajeService.sendMensaje(this.product);
  }

}
