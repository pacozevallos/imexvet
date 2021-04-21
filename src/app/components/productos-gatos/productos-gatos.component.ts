import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-productos-gatos',
  templateUrl: './productos-gatos.component.html',
  styleUrls: ['./productos-gatos.component.scss']
})
export class ProductosGatosComponent implements OnInit {

  productosGatos;
  productosGatosAlimentoSeco;
  productosGatosAlimentoHumedo;
  productosGatosNutraceuticos;
  productosGatosAntipulgas;
  productosGatosVacunas;
  productosGatosHigieneCuidado;

  constructor(
    private fs: FirebaseService
  ) { }

  ngOnInit(): void {
    this.fs.getProductosGatosAlimentoSeco().subscribe( res => {
      this.productosGatosAlimentoSeco = res;
    });
    this.fs.getProductosGatosAlimentoHumedo().subscribe( res => {
      this.productosGatosAlimentoHumedo = res;
    });
    this.fs.getProductosGatosNutraceuticos().subscribe( res => {
      this.productosGatosNutraceuticos = res;
    });
    this.fs.getProductosGatosAntipulgas().subscribe( res => {
      this.productosGatosAntipulgas = res;
    });
    this.fs.getProductosGatosVacunas().subscribe( res => {
      this.productosGatosVacunas = res;
    });
    this.fs.getProductosGatosHigieneCuidado().subscribe( res => {
      this.productosGatosHigieneCuidado = res;
    });
  }

}
