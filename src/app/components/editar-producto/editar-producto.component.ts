import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Producto } from '../../classes/producto';
import * as firebase from 'firebase/app';
import { FileValidator } from 'ngx-material-file-input';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  formProduct: FormGroup;
  // tipos = [
  //   'Presentación única',
  //   'Presentación múltiple'
  // ];

  deshabilitado = false;
  selectedFile: FileList;
  nameItem: any;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  // 1 MB
  readonly maxSize = 1048576;
  actualSize: any;

  animales;
  categorias;
  marcas;
  tipos;
  medidas;

  selectedImage;
  meta: Observable<any>;

  constructor(
    public dialogRef: MatDialogRef<EditarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto,
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    private fs: FirebaseService,
    private ds: DataService,
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
     // const selectedImage = this.storage.ref(`imagesProducts/${this.data.id}/${this.data.imageName}`)
     const selectedImage = this.storage.ref('imagesProducts/7CDiCRsE5Kc2CS1QGFpm/Pronature_03AdultoCordero.jpg');
     this.meta = selectedImage.getMetadata();
     console.log(this.meta);
  }

  ngOnInit(): void {
    this.formProduct = this.fb.group({
      familia: this.data.familia,
      categoria: [this.data.categoria, Validators.required],
      marca: [this.data.marca, Validators.required],
      nombre: [this.data.nombre, Validators.required],
      image: [ '', [Validators.required, FileValidator.maxContentSize(this.maxSize)]],
      publicado: [this.data.publicado],
      fechaActualizacion: [firebase.firestore.Timestamp.fromDate(new Date())],
      tipo: [this.data.tipo],
      precio: [this.data.precio],
      presentaciones: this.fb.array([]),
      // presentaciones: this.fb.array([
      //   this.fb.group({
      //     presentacion: [''],
      //     medida: [''],
      //     precio: ['']
      //   })
      // ])
    });


     this.data.presentaciones.forEach( x => {
      (this.formProduct.controls['presentaciones'] as FormArray).push(this.fb.group(x));
     });


    this.animales = this.fs.getAnimales();
    this.categorias = this.fs.getCategorias();
    this.marcas = this.fs.getMarcas();
    this.tipos = this.ds.tipos;
    this.medidas = this.ds.medidas;

    // console.log(this.data);
    // console.log(this.data.id);

   

  }


  onSubmit() {
    if (this.formProduct.valid) {
      this.editarAviso();
      this.deshabilitado = true;
    } else {
      this.validateAllFormFields(this.formProduct);
    }
  }

  editarAviso() {
    this.fs.updateProduct(this.data.id, this.formProduct.value)
    .then(() => {
      this.dialogRef.close();
      this.snackBar.open('Producto actualizado', 'CERRAR', {
        duration: 3000,
      });
    });
  }

  detectFiles(event) {
    this.selectedFile = event.target.files[0];
    this.nameItem = event.target.files[0].name;
    console.log(this.nameItem);
  }

  uploadFileAndCrearProducto() {
    const myTest = this.afs.collection('productos').ref.doc();
    console.log(myTest.id);

    const file = this.selectedFile;
    const filePath = `imagesProducts/${myTest.id}/${this.nameItem}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().toPromise().then( (url) => {
          this.downloadURL = url;
          myTest.update({
            familia: this.formProduct.value.familia,
            categoria: this.formProduct.value.categoria,
            marca: this.formProduct.value.marca,
            nombre: this.formProduct.value.nombre,
            image: this.downloadURL,
            publicado: this.formProduct.value.publicado,
            fechaCreacion: this.formProduct.value.fechaCreacion,
            tipo: this.formProduct.value.tipo,
            precio: this.formProduct.value.precio,
            presentaciones: this.formProduct.value.presentaciones
          });
          this.dialogRef.close();
          console.log( this.downloadURL );
        }).catch(err => { console.log(err); } );
      })
    )
    .subscribe();
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  agregarPresentacion() {
    // tslint:disable-next-line:no-string-literal
    (this.formProduct.controls['presentaciones'] as FormArray).push(
      this.fb.group({
        presentacion: [''],
        medida: [''],
        precio: ['']
      })
    );
  }

  eliminarPresentacion(index: number): void {
    // tslint:disable-next-line:no-string-literal
    // (this.formProduct.controls['presentaciones']as FormArray).removeAt(index);
    const control = this.formProduct.controls.presentaciones as FormArray;
    control.removeAt(index);
  }

  cancelar() {
    this.dialogRef.close();
  }

  errorImagen() {
    return this.formProduct.controls.image.hasError('required') ? 'La imagen es necesaria' :
    this.formProduct.controls.image.hasError('maxContentSize') ? 'El peso de la imagen no debe exceder a 1 MB' : '';
  }



}
