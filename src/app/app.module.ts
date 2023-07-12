import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaComponent } from './lista/lista.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ProductosModule } from './modules/productos/productos.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaComponent,
    HeroesComponent,
  ],
  imports: [BrowserModule, ProductosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
