import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
})
export class ConsultaComponent {
  private valorBusqueda: string = '';

  get getValorBusqueda(): string {
    return this.valorBusqueda;
  }

  public guardarValorBusqueda(event: any) {
    const { value } = event.target;
    console.info(value);
    this.valorBusqueda = value;
  }
}
