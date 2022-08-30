import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { SingleExhibitionComponent } from './single-exhibition/single-exhibition.component';
import { CreateExhibitionComponent } from './exhibitions/create-exhibition/create-exhibition.component';

const routes: Routes = [
  { path: '', redirectTo: '/exhibitions', pathMatch: 'full' },
  { path: 'exhibitions', component: ExhibitionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'single-exhibition', component: SingleExhibitionComponent },
  { path: 'exhibitions/create-exhibition', component: CreateExhibitionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
