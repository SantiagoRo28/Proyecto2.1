import { Component, OnInit } from '@angular/core';
import {Injectable} from "@angular/core";
import { Router } from '@angular/router';



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

  constructor() { }

  ngOnInit(): void {
  }

}
