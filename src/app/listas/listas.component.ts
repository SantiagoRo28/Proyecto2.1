import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

export interface Viedojuegos{
  titulo: string;
  tipo: string;
  duracion: string;
  imagen: File;
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
public imagenDelVideojuego: File;
public id: number;

constructor(
  private _router: Router,
 private firestore: AngularFirestore,
 private auth: AngularFireAuth,
) {
}
  ngOnInit(): void {
    this.listarVideojuegos();
    }

navigateToLogin(){
  this._router.navigate(['login'])
  this.auth.signOut();
};

public listarVideojuegos(): void {
//, ref=> ref.where("id.tipo","==","id"
  this.firestore.collection<Viedojuegos>('videojuegos').valueChanges().subscribe(result=>{
    this.listaVideojuegos = result
  })
};

public subirImagen(): void{
  
};

public agregarVideojuego(): void {
  


this.firestore.collection('videojuegos')
.doc(this.videojuegosActual)
.set({
  titulo: this.videojuegosActual,
  tipo: this.tipoDeVideojuego,
  duracion: this.duracionDeVideojuego + " Hrs",
  fechaAlta: new Date(),
  imagen: this.imagenDelVideojuego,
  creador: this.creadorDelVideojuego,
})};

public borrarVideojuego(): void {
  
  this.firestore.collection('videojuegos')
  .doc(this.videojuegosActual)
  .delete()};

}