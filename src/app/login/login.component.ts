import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http'
import {HttpClientModule} from '@angular/common/http'

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
  public displayName: string;
  public photoURL: string;
  public emailVerified: boolean;
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
