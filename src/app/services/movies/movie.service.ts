import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '95f33f78f3msh0b794b4f7b0e667p1fed64jsne673bd642b87';

  constructor() {}

  async getMovies(pageUrl: string = '/titles', genre?: string) {
    const options = {
      method: 'GET',
      url: `https://moviesdatabase.p.rapidapi.com${pageUrl}`,
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
      ...(genre && {
        params: { genre },
      }),
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  getMovieDetails(movieId: string): Observable<any> {
    const options = {
      method: 'GET',
      url: `https://moviesdatabase.p.rapidapi.com/titles/${movieId}`,
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };

    return new Observable((observer) => {
      axios
        .request(options)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
