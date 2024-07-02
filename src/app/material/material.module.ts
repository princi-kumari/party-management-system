import {NgModule} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';  // Ensure this is imported
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule ,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,  // Ensure this is imported
    MatButtonModule,
    MatFormFieldModule
   
    
  ]
})
export class MaterialExampleModule {}
