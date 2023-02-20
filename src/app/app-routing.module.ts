import { Component, ComponentRef, NgModule } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutModule } from './layout/layout.module';
import { CardsComponent } from './shared/components/cards/cards.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {path:"inicio", component: HeaderComponent},
  {path:"peliculas", component: CardsComponent},
  {path:"series", component: LayoutModule},
  {path:"ingresar", component: FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
