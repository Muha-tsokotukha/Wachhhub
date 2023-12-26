import { Component } from '@angular/core';
import { LoginService } from "src/app/services/login.service";
import { MovieService } from 'src/app/services/movies/movie.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-movie-detailed',
  templateUrl: './movie-detailed.component.html',
  styleUrls: ['./movie-detailed.component.css'],
})
export class MovieDetailedComponent {
  movie!: any;

  constructor(private movieService: MovieService, private ownService: LoginService, private message: NzMessageService) {}

  ngOnInit() {
    this.fetchMovie();
  }

  stringify() {
    return JSON.stringify(this.movie);
  }

  createBasicMessage(info: string): void {
    this.message.info(info);
  }

  fetchMovie() {
    const id = location.pathname.split('/').pop() || 'tt0000081';

    this.movieService
      .getMovieDetails(id)
      .then((data: any) => {
        if (data && data.results) {
          this.movie = data.results;
        }
        this.fetchPost();
      })
      .catch((error) => {
        // Handle the error
      });

  }

  fetchPost() {
    const id = location.pathname.split('/').pop() || '1';

    this.ownService
      .getPostDetails(id)
      .subscribe((data: any) => {
        if (data.length > 0 && data[0]) {
          this.movie = {...this.movie, ...data[0]};
          console.log(this.movie);
        }else{
          this.movie = {...this.movie, likes: 0};
        }
      }, (error) => {
        this.movie = {...this.movie, likes: 0};
        console.log(error);
      });
  }

  likePost() {
    const id = location.pathname.split('/').pop() || '1';
    const likedIds = localStorage.getItem('likedIds') || '';
    const unlikedIds = localStorage.getItem('unlikedIds') || '';
    const unlikedIdsArray = unlikedIds.split(',');
    const ids = likedIds.split(',');

    if(ids.includes(id)){
      this.createBasicMessage('You already liked this post!');
      return;
    }

    localStorage.setItem('unlikedIds', unlikedIdsArray.filter((item) => item !== id).join(','));
    localStorage.setItem('likedIds', [...ids, id].join(','));

    this.ownService
      .likePost(id)
      .subscribe((data: any) => {
        this.movie.likes = data.likes;
      });
  }

  unlikePost() {
    const id = location.pathname.split('/').pop() || '1';
    const likedIds = localStorage.getItem('likedIds') || '';
    const likedIdsArray = likedIds.split(',');
    const unlikedIds = localStorage.getItem('unlikedIds') || '';
    const ids = unlikedIds.split(',');

    if(ids.includes(id)){
      this.createBasicMessage('You already unliked this post!');
      return;
    }

    localStorage.setItem('likedIds', likedIdsArray.filter((item) => item !== id).join(','));
    localStorage.setItem('unlikedIds', [...ids, id].join(','));

    this.ownService
      .unlikePost(id)
      .subscribe((data: any) => {
        this.movie.likes = data.likes;
      });
  }

  shareOnTelegram() {
    const text = `Посмотрите на этот фильм: ${this.movie.titleText.text}`;
    const shareUrl = location.href; // URL of the current page

    // Encode both URL and text
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(text);

    // Create the final URL for Telegram
    const telegramUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;

    // Debugging: log the final URL to the console
    console.log("Telegram Share URL:", telegramUrl);

    // Open the URL
    window.open(telegramUrl, '_blank');
  }

}
