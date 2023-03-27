import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from '../inicio/inicio.component';
import { SeriesComponent } from '../series/series.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeliculasComponent } from '../peliculas/peliculas.component';
import { IngresarComponent } from '../ingresar/ingresar.component';



@NgModule({
  declarations: [
    PeliculasComponent,
    IngresarComponent,
    InicioComponent,
    SeriesComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,






  ],
   exports: [

     IngresarComponent,

  ]
})
export class RoutesModule { }
