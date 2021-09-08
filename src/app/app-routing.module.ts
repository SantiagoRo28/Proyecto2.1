import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { CargaComponent } from './carga/carga.component';
import { ListasComponent } from './listas/listas.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: 'lista', component: ListasComponent},
  { path: 'carga', component: CargaComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: ListasComponent},
  { path: '', component: CargaComponent},
  { path: '', component: LoginComponent},
  { path: 'tipo', component: ListasComponent},
  {path: 'tipo', component: CargaComponent},
  {path: 'tipo', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
