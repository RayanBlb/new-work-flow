import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'success', component: SuccessPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
