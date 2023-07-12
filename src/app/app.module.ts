import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { ProductosModule } from './modules/productos/productos.module';
import { ClientesModule } from './modules/clientes/clientes.module';

@NgModule({
  declarations: [AppComponent, ListaComponent],
  imports: [BrowserModule, ProductosModule, ClientesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
