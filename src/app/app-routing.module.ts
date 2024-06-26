import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './Modules/main/main.module';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./Modules/main/main.module').then((m)=>MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
