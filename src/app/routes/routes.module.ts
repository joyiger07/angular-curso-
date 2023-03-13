import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from '../inicio/inicio.component';
import { SeriesComponent } from '../series/series.component';
import { IngresarComponent } from '../ingresar/ingresar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    
    SeriesComponent,
    IngresarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InicioComponent,
    SeriesComponent,
    IngresarComponent,
  ]
})
export class RoutesModule { }
