import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-movie-detailed',
  templateUrl: './movie-detailed.component.html',
  styleUrls: ['./movie-detailed.component.css'],
})
export class MovieDetailedComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const movieId = params['id']; // 'id' should match the parameter name in your route configuration

      if (movieId) {
        this.fetchMovieDetails(movieId);
      }
    });
  }

  fetchMovieDetails(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe((data) => {
      this.movie = data.results;
    });
  }
}
