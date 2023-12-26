import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from 'src/app/services/movies/movie.service';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
    comments: any = [];
    commentInput: string = '';

    constructor(private movieService: MovieService) {
        this.fetchMovieComments();
    }

    fetchMovieComments() {
        const id = location.pathname.split('/').pop() || 'tt0000081';

        this.movieService.getMovieComments(id).then((data: any) => {
            if (data && data.results) {
                this.comments = data.results;
            }
            console.log(data);
        });
    }

    leaveComment() {
        const author = JSON.parse(localStorage.getItem('user') || '')?.name || 'dimash1234';
        const postId = location.pathname.split('/').pop() || 'tt0000081';

        this.movieService
            .createMovieComment({
                author,
                body: this.commentInput,
                postId,
            })
            .then(() => (this.commentInput = ''))
            .catch(() => console.log('error'))
            .finally(() => this.fetchMovieComments());
    }

    clearComment() {
        this.commentInput = '';

        console.log(this.comments);
    }
}
