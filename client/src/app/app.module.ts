import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PrestamosListComponent } from './components/prestamos-list/prestamos-list.component';

// Services
import { YoutubeService } from './services/youtube.service';
import { PrestamosService } from './services/prestamos.service';
import { PrestamoFormComponent } from './components/prestamo-form/prestamo-form.component';
import { PrestamoEditComponent } from './prestamo-edit/prestamo-edit.component';
import { MultaFormComponent } from './components/multa-form/multa-form.component';
import { MultaListComponent } from './components/multa-list/multa-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationBComponent } from './components/navigation-b/navigation-b.component';
import { NavigationUComponent } from './components/navigation-u/navigation-u.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { RedesComponent } from './components/redes/redes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FacebookComponent } from './components/facebook/facebook.component';
import { YoutubePipe } from './Pipes/youtube.pipe';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { YouComponent } from './components/you/you.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { MapsModule } from './maps/maps.module';
import { PrincipalBooksComponent } from './components/principal-books/principal-books.component';
import { PrincipalListComponent } from './components/principal-list/principal-list.component';
import { PrincipalItemComponent } from './components/principal-item/principal-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';


//externals
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PrestamosListComponent,
    PrestamoFormComponent,
    PrestamoEditComponent,
    MultaFormComponent,
    MultaListComponent,
    BookFormComponent,
    BooksListComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
    LoginComponent,
    NavigationBComponent,
    NavigationUComponent,
    MapaComponent,
    RedesComponent,
    InicioComponent,
    FacebookComponent,
    YouComponent,
    YoutubePipe,
    NoticiasComponent,
    PrincipalBooksComponent,
    PrincipalListComponent,
    PrincipalItemComponent,
    CartComponent,
    CartItemComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    MapsModule,
    NgxPayPalModule,
    NgbModule,
    NgxSpinnerModule

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("1057703587536-jcpb246oe7qo54cbt0jq73d7lp97mdmq.apps.googleusercontent.com")
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('875179227556103')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
