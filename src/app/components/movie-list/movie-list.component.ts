import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies!: any[];
  nextUrl!: string;


  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.movieService.getMovies(this.nextUrl)
      .then((data: any) => {
        if (data && data.results) {
          this.movies = [...(this.movies || []), ...data.results];
          this.nextUrl = data.next;
        }
      })
      .catch(error => {
        // Handle the error
      });
  }

  loadMore() {
    if (this.nextUrl) {
      this.fetchMovies();
    }
  }

  goToMovieDetail(movieId: string) {
    console.log(movieId)
    // Navigate to the movie detail page with the movie ID as a route parameter
    this.router.navigate(['/movies', movieId]);
  }

}
