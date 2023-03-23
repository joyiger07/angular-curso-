import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { CommonModule } from '@angular/common';



  @NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        InicioComponent,     
        SeriesComponent,
       
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      SharedModule,
      FormsModule,
      HttpClientModule,
      CommonModule,
     
    
      
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { 
  
  }
