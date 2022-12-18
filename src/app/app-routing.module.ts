import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './mains/home/home.component';


const routes: Routes = [
  {path: '', loadChildren:() => import('./mains/home/home.module').then((m) => m.HomeModule)},
  {path: 'home', loadChildren:() => import('./mains/home/home.module').then((m) => m.HomeModule)},

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
