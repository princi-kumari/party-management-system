import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormBuilderRoutingModule } from './dynamic-form-builder-routing.module';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    FormBuilderComponent,
    FormFieldComponent,
  
    
  ],
  imports: [
    CommonModule,
    DynamicFormBuilderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialExampleModule,
  ]
})
export class DynamicFormBuilderModule { }
