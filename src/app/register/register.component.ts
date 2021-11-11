import { Component, NgZone, OnInit } from '@angular/core';
import {Injectable} from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth, AngularFireAuthModule} from "@angular/fire/auth";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http'
import {HttpClientModule} from '@angular/common/http'
import { AngularFirestore } from '@angular/fire/firestore';



export class AuthService {
  userData: any;

  constructor(
    public asf: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }else{
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }
}

export class User {
  public id: number;
  public name: string;
  public surname: string;
  public email: string;
  public username: string;
  public password?: string;
}

export class Session {
  public token: string;
  public user: User;
}

export class LoginObject {

  public username: string;
  public password: string;

  constructor( object: any){
    this.username = (object.username) ? object.username : null;
    this.password = (object.password) ? object.password : null;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  username: string;
  password: string;
  email: string;

  constructor(
    private _router: Router,
    private _activatedRoute:ActivatedRoute,
    private auth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }
  register() {
    
    
    }
}
