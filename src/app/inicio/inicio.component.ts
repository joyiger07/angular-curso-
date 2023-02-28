import { Component } from '@angular/core';


interface moviesSeries {
  id: number | string;
  name: string;
  description: string;
  image: string | number;
  rating: number;
  category: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  movies_series: moviesSeries[] = [
   
{
  id: 1,
  name: "black widow",
  description: "lo mejor de lo mejor",
  image: 'http://www.w3.org/2000/svg',
  rating: 0,
  category: "peliculas",
},
     
{
  id: 2,
  name: "Momias (2023)",
  description: "lo mejor de lo mejor",
  image: "http://www.w3.org/2000/svg",
  rating: 0,
  category: "peliculas"
}, 
      
{
  id: 3,
  name: "La tierra errante II (2023)",
  description: "description",
  image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/pR858ihc6Ls9xohpdRJVjV787ml.jpg",
  rating: 0,
  category: "peliculas"
},
  
{
  id: 4,
  name: "Missing (2023) ",
  description: "When her mother disappears while on vacation in Colombia with her new boyfriend, June’s search for answers is hindered by international red tape. Stuck thousands of miles away in Los Angeles, June creatively uses all the latest technology at her fingertips to try and find her before it’s too late. But as she digs deeper, her digital sleuthing raises more questions than answers... and when June unravels secrets about her mom, she discovers that she never really knew her at all.",
  image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jYXJW19PMEUrpyavEHrnnlItQn1.jpg",
  rating: 0,
  category: "peliculas"
},
  
{
  id: 5,
  name: "Serie de medianoche: Pollo a la luz de la luna (2023)",
  description: "Moonlight Chicken cuenta la historia de Jim, un tipo normal que se gana la vida vendiendo arroz con pollo hainanés, que conoce a Wen, un cliente borracho en su restaurante. La noche que los une a ambos crea un sentimiento difícil de entender. Ninguno de los dos puede dejar de pensar el uno en el otro a pesar de que Wen es un hombre tomado. Todo en su vida no es lo mismo después de eso. ",
  image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yeHpjQvq881PhmeNgyMHwcf1ZfJ.jpg ",
  rating: 0,
  category: "serie"
},
  
{
  id: 6,
  name: "El Chavo: La serie animada (2006)",
  description: "El Chavo Animado es una serie animada mexicana basada en una serie de televisión de imagen real del mismo nombre, creada por Roberto Gómez Bolaños.",
  image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/98rkR62d1SeEi18p5Z46kqlNGzM.jpg ",
  rating: 0,
  category: "serie"
},
  
{
  id: 7,
  name: "Cuentos escolares la serie (2022)",
  description: "Horrores indescriptibles deambulan por los pasillos de la escuela secundaria en esta antología que presenta historias de fantasmas dirigidas por experimentados directores de terror tailandeses.",
  image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3OwFUerRIahvfnV7ADcJm8xX5fx.jpg ",
  rating: 0,
  category: "serie"
},
  
{
  id: 8,
  name: "Batman: la serie animada (1992)",
  description: "Prometiendo vengar el asesinato de sus padres, Bruce Wayne dedica su vida a acabar con el crimen en Gotham City como el vigilante enmascarado Batman ",
  image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lBomQFW1vlm1yUYMNSbFZ45R4Ox.jpg",
  rating: 0,
  category: "serie"
}
   

  ]

selected: string = 'Todos';
cambiarCategoria(value: string) {
  this.selected = value;
}

}
