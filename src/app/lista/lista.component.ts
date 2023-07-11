import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  public name: string = 'Ney';
  public lastName: string = 'Palma';
  public age: number = 44;

  public limpiarFormulario(): void {
    this.name = '';
    this.lastName = '';
    this.age = 0;
  }
}
