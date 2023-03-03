import { Component } from '@angular/core';


interface movieSerie {
  id: number | string;
  name: string;
  description: string;
  image: string;
  rating: number;
  category: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  movies_series: movieSerie[] = [
   
{
  id: 1,
  name: "Knock at the Cabin (2023)",
  description: "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
  image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
  rating: 0,
  category: "Pelicula",
},
     
{
  id: 2,
  name: "El último baile de Magic Mike (2023)",
  description: "Mike Lane vuelve a subir al escenario después de un largo paréntesis, luego de un negocio que fracasó, dejándolo en la ruina y tomando trabajos de barman en Florida. Para lo que espera sea un último hurra, Mike se dirige a Londres con una rica dama de la alta sociedad que lo atrae con una oferta que no puede rechazar... y una agenda propia. Con todo en juego, una vez que Mike descubra lo que ella realmente tiene en mente, ¿podrán él (y la lista de nuevos y atractivos bailarines que tendrá que poner en forma) lograrlo? ",
  image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9a9pyJZRhUWUSBT8BQqWihtqbI8.jpg",
  rating: 0,
  category: "Pelicula"
}, 
      
{
  id: 3,
  name: "La tierra errante II (2023)",
  description: "description",
  image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/pR858ihc6Ls9xohpdRJVjV787ml.jpg",
  rating: 0,
  category: "Pelicula"
},
  
{
  id: 4,
  name: "Missing (2023)",
  description: "When her mother disappears while on vacation in Colombia with her new boyfriend, June’s search for answers is hindered by international red tape. Stuck thousands of miles away in Los Angeles, June creatively uses all the latest technology at her fingertips to try and find her before it’s too late. But as she digs deeper, her digital sleuthing raises more questions than answers... and when June unravels secrets about her mom, she discovers that she never really knew her at all.",
  image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jYXJW19PMEUrpyavEHrnnlItQn1.jpg",
  rating: 0,
  category: "Pelicula"
},
  
{
  id: 5,
  name: "Serie de medianoche: Pollo a la luz de la luna (2023)",
  description: "Moonlight Chicken cuenta la historia de Jim, un tipo normal que se gana la vida vendiendo arroz con pollo hainanés, que conoce a Wen, un cliente borracho en su restaurante. La noche que los une a ambos crea un sentimiento difícil de entender. Ninguno de los dos puede dejar de pensar el uno en el otro a pesar de que Wen es un hombre tomado. Todo en su vida no es lo mismo después de eso. ",
  image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yeHpjQvq881PhmeNgyMHwcf1ZfJ.jpg ",
  rating: 0,
  category: "Serie"
},
  
{
  id: 6,
  name: "El Chavo: La serie animada (2006)",
  description: "El Chavo Animado es una serie animada mexicana basada en una serie de televisión de imagen real del mismo nombre, creada por Roberto Gómez Bolaños.",
  image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/98rkR62d1SeEi18p5Z46kqlNGzM.jpg ",
  rating: 0,
  category: "Serie"
},
  
{
  id: 7,
  name: "Cuentos escolares la serie (2022)",
  description: "Horrores indescriptibles deambulan por los pasillos de la escuela secundaria en esta antología que presenta historias de fantasmas dirigidas por experimentados directores de terror tailandeses.",
  image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3OwFUerRIahvfnV7ADcJm8xX5fx.jpg ",
  rating: 0,
  category: "Serie"
},
  
{
  id: 8,
  name: "Batman: la serie animada (1992)",
  description: "Prometiendo vengar el asesinato de sus padres, Bruce Wayne dedica su vida a acabar con el crimen en Gotham City como el vigilante enmascarado Batman ",
  image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lBomQFW1vlm1yUYMNSbFZ45R4Ox.jpg",
  rating: 0,
  category: "Serie"
}
   

  ]
  // auxiliarmovies_series: movieSerie[]= this.movies_series

selected: string = 'Todos';

// parabuscar: string = "";
// change(value: string){
//   console.log("viejo valor del selected", this.selected);
//   this.selected = value;
//   console.log("nuevo valor del selected", this.selected);
// }
// buscar(value: string) {
//   console.log(value);
//   this.auxiliarmovies_series = []
//   for(let movie of this.movies_series) {}
// }
 cambiarCategoria(value: string) {
    console.log("viejo valor del selected", this.selected);
   this.selected = value;
   console.log("nuevo valor del selected", this.selected);
  }

}
