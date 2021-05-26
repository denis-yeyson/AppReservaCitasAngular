import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    InicioComponent
  ],
  imports: [BrowserModule,CommonModule,HttpClientModule,AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
