import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
})
export class ConsultaComponent {
  private valorBusqueda: string = '';
  private productos: Producto[] = [
    {
      nombre: 'martillo',
      marca: 'trouper',
      descripcion: 'martillo mango de goma',
      precio: 12,
    },
    {
      nombre: 'martillo',
      marca: 'bosch',
      descripcion: 'martillo mango de madera',
      precio: 20,
    },
    {
      nombre: 'taladro',
      marca: 'trouper',
      descripcion: 'con percutor',
      precio: 40,
    },
  ];
  public productosBusqueda: Producto[] = [];

  get getValorBusqueda(): string {
    return this.valorBusqueda;
  }

  public guardarValorBusqueda(event: any) {
    const { value } = event.target;
    this.valorBusqueda = value;
  }

  public getProductos(): void {
    this.productosBusqueda = this.productos.filter((producto) => {
      return producto.nombre.toUpperCase() === this.valorBusqueda.toUpperCase();
    });
  }
}

interface Producto {
  nombre: string;
  marca: string;
  descripcion: string;
  precio: number;
}
