import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Producto } from '../classes/producto';
import { Marca } from '../classes/marca';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  addProduct(dataProduct) {
    return this.afs.collection('producto').add(dataProduct);
  }

  deleteProduct(idProduct) {
    return this.afs.collection('productos').doc(idProduct).delete();
  }

  deleteProductStorage(idProduct, imageName) {
    return this.storage.ref(`imagesProducts/${idProduct}/${imageName}`).delete();
  }

  updateProduct(idProduct, dataProduct) {
    return this.afs.collection('productos').doc(idProduct).update(dataProduct);
  }

  updateAprobado(idProducto, publicado) {
    this.afs.doc('productos/' + idProducto).update({publicado});
  }

  updateDestacado(idProducto, destacado) {
    this.afs.doc('productos/' + idProducto).update({destacado});
  }

  getAllProducts() {
    return this.afs.collection('productos', ref => ref
    .orderBy('fechaCreacion', 'desc')
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Producto;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getProducts() {
    return this.afs.collection('productos', ref => ref
    .where('publicado', '==', true)
    // .orderBy('nombre', 'asc')
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Producto;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getProductsHome() {
    return this.afs.collection('productos', ref => ref
    .where('publicado', '==', true)
    .where('destacado', '==', true)
    // .limit(4)
    // .orderBy('nombre', 'asc')
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Producto;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getMarcas() {
    return this.afs.collection('marcas', ref => ref
    // .where('publicado', '==', true)
    .orderBy('orden', 'asc')
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Marca;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getCategorias() {
    return this.afs.collection('categorias', ref => ref
    // .where('publicado', '==', true)
    // .orderBy('orden', 'asc')
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Marca;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getAnimales() {
    return this.afs.collection('animales', ref => ref
    // .where('publicado', '==', true)
    .orderBy('nombre', 'desc')
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Marca;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  // Perros

  getProductosPerros() {
    return this.afs.collection('productos', ref => ref
    .where('familia.perro', '==', true)
    .orderBy('marca', 'asc')
    ).valueChanges();
  }

  getProductosPerrosAlimentoSeco() {
    return this.afs.collection('productos', ref => ref
    .where('familia.perro', '==', true)
    .where('categoria', '==', 'Alimento Seco')
    .where('publicado', '==', true)
    .orderBy('marca', 'asc')
    .orderBy('fechaCreacion', 'asc')
    ).valueChanges();
  }

  getProductosPerrosAlimentoHumedo() {
    return this.afs.collection('productos', ref => ref
    .where('familia.perro', '==', true)
    .where('categoria', '==', 'Alimento Húmedo')
    .where('publicado', '==', true)
    .orderBy('marca', 'asc')
    .orderBy('fechaCreacion', 'asc')
    ).valueChanges();
  }

  getProductosPerrosNutraceuticos() {
    return this.afs.collection('productos', ref => ref
    .where('familia.perro', '==', true)
    .where('categoria', '==', 'Nutracéuticos')
    .where('publicado', '==', true)
    .orderBy('marca', 'asc')
    .orderBy('fechaCreacion', 'asc')
    ).valueChanges();
  }

  getProductosPerrosAntipulgas() {
    return this.afs.collection('productos', ref => ref
    .where('familia.perro', '==', true)
    .where('categoria', '==', 'Antipulgas')
    .where('publicado', '==', true)
    .orderBy('marca', 'asc')
    .orderBy('fechaCreacion', 'asc')
    ).valueChanges();
  }

  getProductosPerrosVacunas() {
    return this.afs.collection('productos', ref => ref
    .where('familia.perro', '==', true)
    .where('categoria', '==', 'Vacunas')
    .where('publicado', '==', true)
    .orderBy('marca', 'asc')
    .orderBy('fechaCreacion', 'asc')
    ).valueChanges();
  }

  // Gatos

  getProductosGatos() {
    return this.afs.collection('productos', ref => ref
    .where('familia.gato', '==', true)
    .orderBy('marca', 'asc')
    ).valueChanges();
  }

  getProductosGatosAlimentoSeco() {
    return this.afs.collection('productos', ref => ref
    .where('familia.gato', '==', true)
    .where('categoria', '==', 'Alimento Seco')
    .where('publicado', '==', true)
    .orderBy('marca', 'asc')
    .orderBy('fechaCreacion', 'asc')
    ).valueChanges();
  }

  getProductosGatosAlimentoHumedo() {
    return this.afs.collection('productos', ref => ref
    .where('familia.gato', '==', true)
    .where('categoria', '==', 'Alimento Húmedo')
    .where('publicado', '==', true)
    .orderBy('marca', 'asc')
    .orderBy('fechaCreacion', 'asc')
    ).valueChanges();
  }

  getProductosGatosNutraceuticos() {
    return this.afs.collection('productos', ref => ref
    .where('familia.gato', '==', true)
    .where('categoria', '==', 'Nutracéuticos')
    .where('publicado', '==', true)
    .orderBy('marca', 'asc')
    .orderBy('fechaCreacion', 'asc')
    ).valueChanges();
  }

  getProductosGatosAntipulgas() {
    return this.afs.collection('productos', ref => ref
    .where('familia.gato', '==', true)
    .where('categoria', '==', 'Antipulgas')
    .where('publicado', '==', true)
    .orderBy('marca', 'asc')
    .orderBy('fechaCreacion', 'asc')
    ).valueChanges();
  }

  getProductosGatosHigieneCuidado() {
    return this.afs.collection('productos', ref => ref
    .where('familia.gato', '==', true)
    .where('categoria', '==', 'Higiene y cuidado')
    .where('publicado', '==', true)
    .orderBy('marca', 'asc')
    .orderBy('fechaCreacion', 'asc')
    ).valueChanges();
  }

  getProductosGatosVacunas() {
    return this.afs.collection('productos', ref => ref
    .where('familia.gato', '==', true)
    .where('categoria', '==', 'Vacunas')
    .where('publicado', '==', true)
    .orderBy('marca', 'asc')
    .orderBy('fechaCreacion', 'asc')
    ).valueChanges();
  }

}
