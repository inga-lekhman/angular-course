import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-popular-movies-page',
  standalone: true,
  templateUrl: './popular-movies-page.component.html',
  styleUrl: './popular-movies-page.component.scss',
  imports: [HeaderComponent, RouterLink, RouterModule]
})
export class PopularMoviesPageComponent implements OnInit {
  constructor(private router: Router) {

  }
  favoriteMovieListIds: string[] = [];
  watchLaterMovieListIds: string[] = [];


  ngOnInit() {
    //some logic with addToFav addToWatch
    this.favoriteMovieListIds = ['3', '4'];
    this.watchLaterMovieListIds = ['2', '5'];
  }

}
