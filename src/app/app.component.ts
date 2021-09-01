import { Component, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Viedojuegos{
  titulo: string;
  tipo: string;
  duracion: string;
  imagen: string;
  creador: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Input()
export class AppComponent {
  title = 'my-app';
public animeFavorito = 'Dragon Ball';
public listaVideojuegos: Viedojuegos[] = [];
public listaTipos: any[] = [];
public listaDuracion: any[] = [];
public videojuegosActual: string="";
public tipoDeVideojuego: string="";
public duracionDeVideojuego: number;
public creadorDelVideojuego: string;
public imagenDelVideojuego: string;
public borrarVideojuego(videojuegoAborrar:number){
  this.listaVideojuegos.splice(videojuegoAborrar, 1)
  this.listaTipos.splice(videojuegoAborrar,1)
};
constructor(
 private firestore: AngularFirestore
) {
}


public agregarVideojuego(): void {
  
  this.firestore.collection('videojuegos').add({
    titulo: this.videojuegosActual,
    horas: this.duracionDeVideojuego,
    fechaAlta: new Date()
  }).then();

this.firestore.collection('videojuegos')
.doc(this.videojuegosActual)
.set({
  titulo: this.videojuegosActual,
  genero: this.tipoDeVideojuego,
  horas: this.duracionDeVideojuego,
  fechaAlta: new Date()
})
};
}
