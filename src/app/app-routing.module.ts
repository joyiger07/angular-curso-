import { Component, ComponentRef, NgModule } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutModule } from './layout/layout.module';
import { CardsComponent } from './shared/components/cards/cards.component';
import { SharedModule } from './shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';



const routes: Routes = [
  {path:"inicio", component: InicioComponent},
  {path:"peliculas", component: PeliculasComponent},
  {path:"series", component: SeriesComponent},
  {path:"ingresar", component:CardsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
