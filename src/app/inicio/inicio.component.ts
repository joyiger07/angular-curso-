import { Component } from '@angular/core';
import { MoviesService } from '../servicios/movies.service';
import { Trending } from '../shared/components/Trending.interface';



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
  styleUrls: ['./inicio.component.css'],
  providers: [MoviesService]



})
export class InicioComponent {
  movies_series: any 

  selected: string = 'Todos';
  paraBuscar: string = '';

  constructor(
    private _moviesService: MoviesService
  ) {
    
  }
    
   ngOnInit() : void {
this.getTrendingAll();
}

getTrendingAll() {
  this._moviesService.getTrending().subscribe({
    next: (data) => {
      this.movies_series = data;
      for (const element of this.movies_series.results) {
        element.poster_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face/' + element.poster_path;
      }
    },
    error: (error) => {
      console.log(error);
    }
  })
}

getTv() {
  this._moviesService.getSeries().subscribe({
    next: (data) => {
      this.movies_series = data;
      for (const element of this.movies_series.results) {
        element.poster_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face/' + element.poster_path;
      }
    },
    error: (error) => {
      console.log(error);
    }
  })
}

getMovies() {
  this._moviesService.getMovies().subscribe({
    next: (data) => {
      this.movies_series = data;
      for (const element of this.movies_series.results) {
        element.poster_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face/' + element.poster_path;
      }
    },
    error: (error) => {
      console.log(error);
    }
  })
}
  cambiarCategoria(value: string) {
    console.log('viejo valor del selected', this.selected);
    this.selected = value;
    console.log('nuevo valor del selected', this.selected);
    if (value == 'tv') {
    this.getTv();
    } else if(value == 'movie') {
      this.getMovies();
    } else {
      this.getTrendingAll();
    }
  }

  buscar(value: string) {
    console.log(value);
  }
}
// auxiliarmovies_series: movieSerie[]= this.movies_series

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
