import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  marcas;

  constructor(
    private fs: FirebaseService
  ) { }

  ngOnInit(): void {
    this.marcas = this.fs.getMarcas();
  }

}
