import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './components/public/public.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdminPedidosComponent } from './components/admin-pedidos/admin-pedidos.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminProductosComponent } from './components/admin-productos/admin-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PuntosVentaComponent } from './components/puntos-venta/puntos-venta.component';
import { ProductosPerrosComponent } from './components/productos-perros/productos-perros.component';
import { ProductosGatosComponent } from './components/productos-gatos/productos-gatos.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';


const routes: Routes = [
  {
    path: '', component: PublicComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'productos/perros', component: ProductosPerrosComponent },
      { path: 'productos/gatos', component: ProductosGatosComponent },
      { path: 'puntosVenta', component: PuntosVentaComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'catalogo', component: CatalogoComponent },
    ]
  },
  {
    path: 'adminImexvetTop2020', component: AdminComponent,
    children: [
      { path: 'pedidos', component: AdminPedidosComponent },
      { path: 'productos', component: AdminProductosComponent },
      { path: 'crearProducto', component: CrearProductoComponent }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
