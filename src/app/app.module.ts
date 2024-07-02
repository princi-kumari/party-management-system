import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
import { MaterialExampleModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormBuilderModule } from './Modules/dynamic-form-builder/dynamic-form-builder.module';
@NgModule({
  declarations: [
    AppComponent,
    ConfirmModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
