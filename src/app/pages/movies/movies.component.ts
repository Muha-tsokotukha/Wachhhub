import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movies/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies!: any[];
  nextUrl!: string;

  constructor(
    private router: Router,
    private movieService: MovieService,
  ) {}

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.movieService
      .getMovies(this.nextUrl)
      .then((data: any) => {
        if (data && data.results) {
          this.movies = [...(this.movies || []), ...data.results];
          this.nextUrl = data.next;
        }
      })
      .catch((error) => {
        // Handle the error
      });
  }

  loadMore() {
    if (this.nextUrl) {
      this.fetchMovies();
    }
  }

  goToMovieDetail(movieId: string) {
    console.log(movieId);
    // Navigate to the movie detail page with the movie ID as a route parameter
    this.router.navigate(['/movies', movieId]);
  }
}
