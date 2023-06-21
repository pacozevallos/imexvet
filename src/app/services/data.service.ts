import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  links = [
    { nombre: 'Inicio', url: '/' },
    { nombre: 'Nosotros', url: '/nosotros' },
    // { nombre: 'Productos', url: '/productos' },
    { nombre: 'Productos para Perros', url: '/productos/perros' },
    { nombre: 'Productos para Gatos', url: '/productos/gatos' },
    { nombre: 'Catálogo', url: '/catalogo' },
    { nombre: 'Puntos de venta', url: '/puntosVenta' },
    { nombre: 'Contacto', url: '/contacto' },
  ];

  slides = [
    {
      logo: 'https://firebasestorage.googleapis.com/v0/b/imexvetperu-36f06.appspot.com/o/logosMarcas%2FlogoFirtsChoice.png?alt=media&token=e413091a-5649-4a04-b46c-4e6ede493666',
      logoSize: '120',
      logoClase: 'logoBox',
      subtitulo: 'Alimento Ultra Premium desarrollado por expertos en nutrición, libres de maíz, trigo y soja.',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/imexvetperu-36f06.appspot.com/o/slides%2F1FirstChoice.jpg?alt=media&token=ab5cbdcf-1809-4dae-8d87-c0bd4b75399c',
    },
    {
      logo: 'https://firebasestorage.googleapis.com/v0/b/imexvetperu-36f06.appspot.com/o/logosMarcas%2FlogoOrigens.png?alt=media&token=b3ea6f9a-72df-4eca-8b10-00e00fc90883',
      logoSize: '80',
      logoClase: 'logoWide',
      subtitulo: 'El primer alimento húmedo para gatos elaborado 100 % con filete de atún.',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/imexvetperu-36f06.appspot.com/o/slides%2F2Origens.jpg?alt=media&token=4c7e1b0f-1344-4314-99f9-dc5e4b6ebd5e',
    },
    {
      categoria: 'Enfoque',
      logo: 'https://firebasestorage.googleapis.com/v0/b/imexvetperu-36f06.appspot.com/o/logosMarcas%2FlogoPronatureOriginal.png?alt=media&token=3c999b2d-87ef-4476-9b80-9d1d3e925c9d',
      logoSize: '80',
      logoClase: 'logoWide',
      subtitulo: 'Alimento Super Premium inspirado por la naturaleza y el amor por los animales.',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/imexvetperu-36f06.appspot.com/o/slides%2F3PronatureOriginal.jpg?alt=media&token=c6138ade-97ba-4c8f-a665-278e8593b8a8',
    }
  ];

  animales = [
    {
      valor: 'perro',
      nombre: 'Perro',
      icon: 'assets/images/iconPerro.svg',
      backColor: '#E31E26',
      link: 'productos/perros'
    },
    {
      valor: 'gato',
      nombre: 'Gato',
      icon: 'assets/images/iconGato.svg',
      backColor: '#2F3985',
      link: 'productos/gatos'
    },
  ];


  tipos = [
    'Presentación única',
    'Presentación múltiple'
  ];

  medidas = [
    'Gr.',
    'Kg.',
    'Ml.',
    'Tab.'
  ];

  // puntosVenta = [
  //   {
  //     nombreComercial: 'Amazonas Pet Shop',
  //     ciudad: 'Arequipa',
  //     distrito: 'Arequipa',
  //     direccion: 'Av. Venezuela s/n Mercado Productores El Palomar, Tienda 48-50, Cercado, Arequipa',
  //     telefono: '(054)28-1955'
  //   },
  //   {
  //     nombreComercial: 'Clinivet',
  //     ciudad: 'Chiclayo',
  //     distrito: 'chiclayo',
  //     direccion: 'CC. Real Plaza, Chiclayo',
  //     telefono: '(074)23-6808'
  //   },
  //   {
  //     nombreComercial: 'Hospital Veterinario Sophis Vet',
  //     ciudad: 'Chiclayo',
  //     distrito: 'chiclayo',
  //     direccion: 'Calle Andres Avelino Cáceres 086 Urb. Ana de los Angeles, Chiclayo',
  //     telefono: '(074)32-6814'
  //   },
  // ];

  puntosVenta = [
    {
      nombre: 'SUPERPET',
      web: 'https://superpet.pe/',
      facebook: 'https://www.facebook.com/superpet.pe/'
    },
    {
      nombre: 'PET PLAZA',
      web: 'https://petplaza.pe/',
      facebook: 'https://www.facebook.com/petplaza.pe/'
    },
    {
      nombre: 'ANIMAL REVOLUTION',
      web: 'https://www.animalrevolution.com.pe/',
      facebook: 'https://www.facebook.com/animalrevolutionperu/'
    },
    {
      nombre: 'PROVET',
      web: 'https://provet.pe/',
      facebook: 'https://www.facebook.com/provet.pe/'
    },
    {
      nombre: 'MASCOTA VELOZ',
      web: 'https://mascotaveloz.pe/',
      facebook: 'https://www.facebook.com/mascotavelozpe/'
    },
    {
      nombre: 'VILLAVET',
      web: '',
      facebook: 'https://www.facebook.com/villavetperu/'
    },
    {
      nombre: 'KITCAN PETSHOP',
      web: 'https://www.kitcanpetshop.pe/',
      facebook: 'https://www.facebook.com/kitcanpetshop/'
    },
    {
      nombre: 'MISTER PET',
      web: 'http://misterpet.pe/',
      facebook: 'https://www.facebook.com/misterpet.pe/'
    },
    {
      nombre: 'EL GATUARIO',
      web: 'https://gatuario.com/',
      facebook: 'https://www.facebook.com/Gatuario/'
    },
    {
      nombre: 'DE TODO PET',
      web: '',
      facebook: 'https://www.facebook.com/De-Todo-Pet-1012715475468066/?tn-str=k*F'
    },
    {
      nombre: 'VETERINARIA AGROSUNI',
      web: 'https://www.agrosuni.com/',
      facebook: 'https://www.facebook.com/Agrosuni/'
    },
    {
      nombre: 'PETS CANADA',
      web: '',
      facebook: 'https://www.facebook.com/petscanada15/'
    },
    {
      nombre: 'PEDRITO PET SHOP',
      web: '',
      facebook: ''
    },
    {
      nombre: 'CANISSUR VETERINARIA',
      web: '',
      facebook: 'https://www.facebook.com/canissurveterinaria'
    },
    {
      nombre: 'VETERINARIA RUBIO',
      web: 'https://veterinariarubio.com.pe/',
      facebook: 'https://www.facebook.com/Veterinaria-Rubio-120214934762743/'
    },
    {
      nombre: 'MIAU 100% GATOS PET SHOP',
      web: 'https://veterinariarubio.com.pe/',
      facebook: 'https://www.facebook.com/miaugatos/'
    },
    {
      nombre: 'PETKING',
      web: 'https://www.petking.pe/',
      facebook: 'https://www.facebook.com/PetKingpe/'
    },
    {
      nombre: 'Guau - Pet Shop Lima',
      web: '',
      facebook: 'https://www.facebook.com/guaupetshowroom/'
    },
    {
      nombre: 'Pet Lovers Market Perú',
      web: '',
      facebook: 'https://www.facebook.com/Petloversmarketperu/'
    },
    {
      nombre: 'Naricitas Petshop',
      web: '',
      facebook: 'https://www.facebook.com/NaricitasPetShop/'
    },
    {
      nombre: 'PET STOP PERU',
      web: '',
      facebook: 'https://www.facebook.com/PETSTOPPERU/'
    },
    {
      nombre: 'PATTY PETSHOP',
      web: '',
      facebook: 'https://www.facebook.com/PattyPetShopsac/'
    },
  ];

  constructor() { }
}
