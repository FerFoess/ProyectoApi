import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/models/cart-item-model';
import { Product } from 'src/app/models/product';
import { MensajeService } from 'src/app/services/mensaje.service';
import { StorageService } from 'src/app/services/storage.service';
import { IPayPalConfig } from 'ngx-paypal';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItemModel[] = [];
  total = 0;
  public payPalConfig?: IPayPalConfig;

  constructor(
    private mensajeService: MensajeService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.initConfig();
    // Verificar si hay un carrito existente en el servicio de almacenamiento
    if (this.storageService.existCart()) {
      this.cartItems = this.storageService.getCart();
    }

    this.getItem(); // Obtener el ítem del mensaje (producto)
    this.total = this.getTotal(); // Calcular el total del carrito
  }

  // Configuración de PayPal
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'MEX',
      clientId: environment.clientId,
      createOrderOnClient: (data) => ({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: '9.99',
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: '9.99',
                },
              },
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: '9.99',
                },
              },
            ],
          },
        ],
      }),
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

  // Obtener un ítem (producto) del servicio de mensaje
  getItem(): void {
    this.mensajeService.getMensaje().subscribe((product: Product) => {
      let exist = false;
      this.cartItems.forEach((item) => {
        if (item.productId === product.id) {
          exist = true;
          item.qty++;
        }
      });
      if (!exist) {
        const cartItem = new CartItemModel(product);
        this.cartItems.push(cartItem);
      }
      this.total = this.getTotal(); // Recalcular el total después de agregar un ítem
      this.storageService.setCart(this.cartItems); // Actualizar el carrito en el almacenamiento
    });
  }

  // Calcular el total del carrito
  getTotal(): number {
    let total = 0;
    this.cartItems.forEach((item) => {
      total += item.qty * item.productPrecio;
    });
    return +total.toFixed(2); // Devolver el total con dos decimales
  }

  // Vaciar el carrito
  emptyCart(): void {
    this.cartItems = [];
    this.total = 0;
    this.storageService.clear(); // Limpiar el almacenamiento
  }

  // Eliminar un ítem del carrito
  deleteItem(i: number): void {
    if (this.cartItems[i].qty > 1) {
      this.cartItems[i].qty--;
    } else {
      this.cartItems.splice(i, 1);
    }
    this.total = this.getTotal(); // Recalcular el total después de eliminar un ítem
    this.storageService.setCart(this.cartItems); // Actualizar el carrito en el almacenamiento
  }
}
