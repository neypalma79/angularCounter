import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'Contador';
  public contador: number = 0;

  incrementar(): void {
    this.contador = this.contador + 1; // this.contador+=1;
  }

  decrementar(): void {
    this.contador = this.contador - 1; // this.contador-=1;
  }

  resetear(): void {
    this.contador = 0;
  }
}
