import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from'@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  api_key = '77d4bdd91e70e1c691bc265726ebb489';

  base_url = 'https://api.themoviedb.org/3';

  constructor(
    private _http: HttpClient,
  ) { }

  getTrending(): Observable <any> {
    return this._http.get(this.base_url + '/trending/all/week', {
      params: {
        api_key: this.api_key
      },

    })
  }
getMovies(): Observable <any> {
    return this._http.get(this.base_url + '/movie/popular', {
      params: {
        api_key: this.api_key
      },

    })
  }
  getSeries(): Observable <any> {
    return this._http.get(this.base_url + '/tv/popular', {
      params: {
        api_key: this.api_key
      },

    })
  }
}
