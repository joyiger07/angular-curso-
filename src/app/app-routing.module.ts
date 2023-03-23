import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent  } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';



const routes: Routes = [
      {
        path:"inicio",
        component: InicioComponent
          },
      {
        path:"peliculas",
        component: PeliculasComponent
          },
      {
        path:"series",
        component: SeriesComponent
      },
      {
        path:"ingresar",
        component:IngresarComponent
        },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule {}
