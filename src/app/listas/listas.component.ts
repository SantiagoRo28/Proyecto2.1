import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireStorage} from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';

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
public imagenDelVideojuego: any;
public id: number;

constructor(
  private _router: Router,
 private firestore: AngularFirestore,
 private auth: AngularFireAuth,
 private storage: AngularFireStorage,
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

public seleccionarImagen(event: any): void{
  this.imagenDelVideojuego = event.target.files;
};

public async agregarVideojuego(): Promise<void> {
  

//const filePath = this.storage.ref("juegos/imagenes/" + this.tipoDeVideojuego + "/" + this.imagenDelVideojuego.name)

let urlImage = '';
if(this.imagenDelVideojuego && this.imagenDelVideojuego.length > 0) {
  const uploadFile = this.imagenDelVideojuego[0];

  const path = "juegos/imagenes/" + this.tipoDeVideojuego + "/" + this.videojuegosActual + ".png";
  const uploadTask = this.storage.upload(path,uploadFile);
  const ref = this.storage.ref(path);
  const uploadPercent = uploadTask.percentageChanges();

  // upload image, save url
  await uploadTask;
  console.log('Image uploaded!');
  urlImage = await ref.getDownloadURL().toPromise();
}

this.firestore.collection('videojuegos')
.doc(this.videojuegosActual)
.set({
  titulo: this.videojuegosActual,
  tipo: this.tipoDeVideojuego,
  duracion: this.duracionDeVideojuego + " Hrs",
  fechaAlta: new Date(),
  imagen: urlImage,
  creador: this.creadorDelVideojuego,
})};
//imagen: this.imagenDelVideojuego,

public borrarVideojuego(videojuego: string): void {
  
  this.firestore.collection('videojuegos')
  .doc(videojuego)
  .delete()};

}