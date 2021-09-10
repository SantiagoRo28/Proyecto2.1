import { Component, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
export class AppComponent {
  title = 'my-app';
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
  private _router: Router,
 private firestore: AngularFirestore
) {
}

navigateToLogin(){
  this._router.navigate(['login'])
};

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
  fechaAlta: new Date(),
  imagen: this.imagenDelVideojuego,
})
};
}
