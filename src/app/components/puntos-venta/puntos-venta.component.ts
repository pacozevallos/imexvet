import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-puntos-venta',
  templateUrl: './puntos-venta.component.html',
  styleUrls: ['./puntos-venta.component.scss']
})
export class PuntosVentaComponent implements OnInit {

  puntosVenta;

  constructor(
    private ds: DataService
  ) { }

  ngOnInit(): void {
    this.puntosVenta = this.ds.puntosVenta;
  }

}
