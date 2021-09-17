import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { CargaComponent } from './carga/carga.component';
import { ListasComponent } from './listas/listas.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';


const routes: Routes = [
  { path: 'lista', component: ListasComponent, canActivate:[AuthGuardGuard]},
  { path: 'carga', component: CargaComponent, canActivate:[AuthGuardGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', component: ListasComponent, canActivate:[AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
