import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  public title: string = 'Contador';
  private contador: number = 0;

  public incrementar(): void {
    this.contador = this.contador + 1; // this.contador+=1;
  }

  public decrementar(): void {
    this.contador = this.contador - 1; // this.contador-=1;
  }

  public resetear(): void {
    this.contador = 0;
  }

  get getContador(): number {
    return this.contador;
  }
}
