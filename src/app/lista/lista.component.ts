import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  public name: string = 'Ney';
  public lastName: string = 'Palma';
  public age: number = 44;

  @Input()
  public item: string = '';

  @Input()
  public color: string = '';

  @Input()
  public habilitado: string = 'false';

  public limpiarFormulario(): void {
    this.name = '';
    this.lastName = '';
    this.age = 0;
  }

  public llenarFormulario(): void {
    this.name = 'Ney';
    this.lastName = 'Palma';
    this.age = 44;
  }
}
