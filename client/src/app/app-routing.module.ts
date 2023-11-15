import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports para Libros
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';

// Imports para Prestamos
import { PrestamosListComponent } from './components/prestamos-list/prestamos-list.component';
import { PrestamoFormComponent } from './components/prestamo-form/prestamo-form.component';
import { PrestamoEditComponent } from './prestamo-edit/prestamo-edit.component';

// Imports para Multas
import { MultaListComponent } from './components/multa-list/multa-list.component'; 
import { MultaFormComponent } from './components/multa-form/multa-form.component'; 

// Imports para Usuarios
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component'; 
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component'; 

import { MapaComponent } from './components/mapa/mapa.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { RedesComponent } from './components/redes/redes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FacebookComponent } from './components/facebook/facebook.component';
import { YouComponent } from './components/you/you.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { MapScreenComponent } from './maps/screens/map-screen/map-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/usuarios', 
    pathMatch: 'full'
  },{path: 'noti',
    component: NoticiasComponent
      },
  
  // Rutas para Usuarios
  {
    path: 'usuarios', 
    component: UsuarioListComponent 
  },
  {
    path: 'usuarios/add', 
    component: UsuarioFormComponent 
  },
  {
    path:'maps',component: MapScreenComponent
  },
  {
    path: 'usuarios/edit/:idUsuario',
    component: UsuarioFormComponent 
  },

  // Rutas para Libros
  {
    path: 'books',
    component: BooksListComponent
  },
  {
    path: 'books/add',
    component: BookFormComponent
  },
  {
    path: 'books/edit/:id',
    component: BookFormComponent
  },

  // Rutas para Prestamos
  {
    path: 'prestamos',
    component: PrestamosListComponent
  },
  {
    path: 'prestamos/add',
    component: PrestamoFormComponent
  },
  {
    path: 'prestamos/edit/:id',
    component: PrestamoEditComponent
  },

  // Rutas para Multas
  {
    path: 'multas',
    component: MultaListComponent
  },
  {
    path: 'multas/add',
    component: MultaFormComponent
  },
  {
    path: 'multas/edit/:idMulta',
    component: MultaFormComponent
  },
  { path: 'mapa', component: MapaComponent },
  
  { path: 'login',component:LoginComponent},
  { path: 'red',component:RedesComponent},
  {path:'inicio',component:InicioComponent},
  {path:'face',component:FacebookComponent},
  {path:'you',component:YouComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }




