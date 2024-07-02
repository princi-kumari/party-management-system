import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './Modules/main/main.module';
import { DynamicFormBuilderModule } from './Modules/dynamic-form-builder/dynamic-form-builder.module';
import { API_ROUTES } from './utils/routes';

const routes: Routes = [
  // {
  //   path:'',
  //   loadChildren:()=>import('./Modules/main/main.module').then((m)=>MainModule)
  // },
  {
    path:'',
    loadChildren:()=>import('./Modules/dynamic-form-builder/dynamic-form-builder.module').then((m)=>DynamicFormBuilderModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
