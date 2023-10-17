import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  search: string = '';
  isEmpty: boolean = false;

  constructor(
    private router: Router,
    private movieService: MovieService,
  ) {}

  ngOnInit() {
    this.fetchMovies();
  }

  onSearch() {
    if (this.search.length === 0) {
      this.fetchMovies();
    }

    this.movies = this.movies.filter((movie) =>
      movie.titleText.text.toLowerCase().includes(this.search.toLowerCase()),
    );

    if (this.movies.length === 0) {
      this.fetchMovies();
      this.isEmpty = true;
    } else this.isEmpty = false;
  }

  fetchMovies() {
    this.movieService
      .getMovies(this.nextUrl, this.search)
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
