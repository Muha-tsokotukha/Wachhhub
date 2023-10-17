import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movies/movie.service';

@Component({
  selector: 'app-movie-detailed',
  templateUrl: './movie-detailed.component.html',
  styleUrls: ['./movie-detailed.component.css'],
})
export class MovieDetailedComponent {
  movie!: any;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.fetchMovie();
  }

  stringify() {
    return JSON.stringify(this.movie);
  }

  fetchMovie() {
    const id = location.pathname.split('/').pop() || 'tt0000081';

    this.movieService
      .getMovieDetails(id)
      .then((data: any) => {
        if (data && data.results) {
          this.movie = data.results;
        }
      })
      .catch((error) => {
        // Handle the error
      });
  }
}
