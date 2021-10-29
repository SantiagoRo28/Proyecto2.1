import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http'
import {HttpClientModule} from '@angular/common/http'



export class LoginObject {

 username: string;
 password: string;
   email: string;
   id: string;


  constructor() {}

  login() {
    console.log(this.username);
    console.log(this.password);
    console.log(this.email);
  }
}

export interface Viedojuegos{
  titulo: string;
  tipo: string;
  duracion: string;
  imagen: string;
  creador: string;
}

export class Session {
  public token: string;
  public user: User;
}

export class User {
  public id: number;
  public name: string;
  public surname: string;
  public email: string;
  public username: string;
  public password?: string;
}

export interface Viedojuegos{
  titulo: string;
  tipo: string;
  duracion: string;
  imagen: string;
  creador: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  email: string;

  constructor(
    private _router: Router,
    private _activatedRoute:ActivatedRoute,
    private auth: AngularFireAuth,
  ) {

   }
   
  ngOnInit(): void {
  }


  public login ():void {
    this.auth.signInWithEmailAndPassword(this.email,this.password).then(()=>{
      this._router.navigateByUrl("lista");
    }).catch(()=>{
      alert("Email o contraseña incorrecta")
    })
    
  };

}
