import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaComponent } from './lista/lista.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ConsultaComponent } from './consulta/consulta.component';

@NgModule({
  declarations: [AppComponent, ContadorComponent, ListaComponent, HeroesComponent, ConsultaComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
