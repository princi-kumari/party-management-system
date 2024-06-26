import { NgModule } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
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
