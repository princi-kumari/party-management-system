import { NgModule } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './user/users.component';
import { MaterialExampleModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialExampleModule
  ]
})
export class MainModule { }
