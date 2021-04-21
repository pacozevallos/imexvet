import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-productos-perros',
  templateUrl: './productos-perros.component.html',
  styleUrls: ['./productos-perros.component.scss']
})
export class ProductosPerrosComponent implements OnInit {

  productosPerros;
  productosPerrosAlimentoSeco;
  productosPerrosAlimentoHumedo;
  productosPerrosNutraceuticos;
  productosPerrosAntipulgas;
  productosPerrosVacunas;

  constructor(
    public fs: FirebaseService
  ) { }

  ngOnInit(): void {
    this.fs.getProductosPerrosAlimentoSeco().subscribe( res => {
      this.productosPerrosAlimentoSeco = res;
    });
    this.fs.getProductosPerrosAlimentoHumedo().subscribe( res => {
      this.productosPerrosAlimentoHumedo = res;
    });
    this.fs.getProductosPerrosNutraceuticos().subscribe( res => {
      this.productosPerrosNutraceuticos = res;
    });
    this.fs.getProductosPerrosAntipulgas().subscribe( res => {
      this.productosPerrosAntipulgas = res;
    });
    this.fs.getProductosPerrosVacunas().subscribe( res => {
      this.productosPerrosVacunas = res;
    });
  }

}
