import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/models/cart-item-model';
import { Product } from 'src/app/models/product';
import { MensajeService } from 'src/app/services/mensaje.service';
import { StorageService } from 'src/app/services/storage.service';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';

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
    private storageService: StorageService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.initConfig();
    if (this.storageService.existCart()) {
      this.cartItems = this.storageService.getCart();
    }

    this.getItem(); // Obtener el ítem del mensaje (producto)
    this.total = this.getTotal(); // Calcular el total del carrito
  }

  // Configuración de PayPal
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'MXN',
      clientId:
        'AQthlxwUaPw0CSTPLcu5qNPRA_-iVSth_fC8fVF4rv6MAKmgpN-Mk0C457pi6SjAudaioiBhkUFE5PGh',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'MXN',
                value: this.getTotal().toString(),
                breakdown: {
                  item_total: {
                    currency_code: 'MXN',
                    value: this.getTotal().toString(),
                  },
                },
              },
              items: this.getItemsList(),
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data: any, actions: any) => {
        this.spinner.show();
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
        this.spinner.hide()
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

  getItemsList(): any[] {
    const items: any[] = [];
    let item = {};
    this.cartItems.forEach((it: CartItemModel) => {
      item = {
        name: it.productNombre,
        quantity: it.qty,
        unit_amount: { value: it.productPrecio, currency_code: 'MXN' },
      };
      items.push(item);
    });
    return items;
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
