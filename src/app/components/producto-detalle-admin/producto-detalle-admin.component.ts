import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'src/app/classes/producto';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-producto-detalle-admin',
  templateUrl: './producto-detalle-admin.component.html',
  styleUrls: ['./producto-detalle-admin.component.scss']
})
export class ProductoDetalleAdminComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductoDetalleAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto,
    private fs: FirebaseService
  ) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close();
  }

}
