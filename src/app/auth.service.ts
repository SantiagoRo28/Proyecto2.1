import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
