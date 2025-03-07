import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { SearchComponent } from './Pages/search/search.component';
import { MovieDetailsComponent } from './Pages/movie-details/movie-details.component';

export const routes: Routes = [
  {
    path : '', component : HomeComponent, title : 'Home'
  },
  {
    path : 'search' , component : SearchComponent , title : 'Search'
  },
  {
    path:'movies/:id', component : MovieDetailsComponent, title : 'MovieDetails'
  }
];
