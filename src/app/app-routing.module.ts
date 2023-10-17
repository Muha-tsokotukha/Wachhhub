import { NgModule } from '@angular/core';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailedComponent } from './pages/movie-detailed/movie-detailed.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import {RoutedataService} from "./services/routedata.service";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailedComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'my-list',
    component: MyListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: RoutedataService } // Provide the custom route reuse strategy
  ]
})
export class AppRoutingModule {}
