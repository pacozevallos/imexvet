import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  productosHome;
  animales;
  slides;
  marcas;

  constructor(
    private fs: FirebaseService,
    private ds: DataService
    ) { }

  ngOnInit(): void {
    this.productosHome = this.fs.getProductsHome();
    this.animales = this.ds.animales;
    this.slides = this.ds.slides;
    this.marcas = this.fs.getMarcas();

  }

}
