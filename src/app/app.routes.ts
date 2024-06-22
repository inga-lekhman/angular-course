import { Routes } from '@angular/router';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { PopularMoviesPageComponent } from './pages/popular-movies-page/popular-movies-page.component';
import { AppComponent } from './app.component';
import { FavoriteMovieComponent } from './pages/favorite-movie-page/favorite-movies.component';
import { WatchLaterPageComponent } from './pages/watch-later-page/watch-later-page.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'movie/:id', component: MovieDetailsPageComponent },
    { path: 'now-playing', component: PopularMoviesPageComponent },
    { path: 'top-rate', component: PopularMoviesPageComponent },
    { path: 'popular', component: PopularMoviesPageComponent },

    //   приклад використання дочірніх роутів
    //  {
    //     path: 'popular',
    //     component: PopularMoviesPageComponent,
    //     // children: [
    //     //     { path: 'favorite', component: FavoriteMovieComponent },
    //     //     { path: 'watch-list', component: WatchLaterPageComponent },
    //     // ],
    // },
    { path: 'favorite', component: FavoriteMovieComponent, outlet: 'header' },
    { path: 'watch-list', component: WatchLaterPageComponent, outlet: 'header' },
];
