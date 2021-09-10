import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

export interface Viedojuegos{
  titulo: string;
  tipo: string;
  duracion: string;
  imagen: string;
  creador: string;
}


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {
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
  ngOnInit(): void {
    this.listarVideojuegos();
    }

navigateToLogin(){
  this._router.navigate(['login'])
};

public listarVideojuegos(): void {
  this.firestore.collection<Viedojuegos>('videojuegos').valueChanges().subscribe(result=>{
    this.listaVideojuegos = result
  })
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