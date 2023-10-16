import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailedComponent } from './pages/movie-detailed/movie-detailed.component';
import {MovieListComponent} from "./components/movie-list/movie-list.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
