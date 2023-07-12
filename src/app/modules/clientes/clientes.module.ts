import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorComponent } from './contador/contador.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [CommonModule],
  exports: [ContadorComponent, HeroesComponent],
  declarations: [ContadorComponent, HeroesComponent],
  providers: [],
})
export class ClientesModule {}
