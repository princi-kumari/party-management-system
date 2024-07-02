import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { API_ROUTES } from 'src/app/utils/routes';
import { FormFieldComponent } from './form-field/form-field.component';

const routes: Routes = [
  {
    path:'',
    component:FormBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicFormBuilderRoutingModule { }
