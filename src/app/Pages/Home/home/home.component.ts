import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../../Service/movie-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  bannerList: any[] = []
  baseUrl: any = "https://image.tmdb.org/t/p/original/"
  trendingMovie: any = [];


  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  scienceFictionMovieResult: any = [];
  thrillernMovieResult: any = [];

  constructor(private service: MovieServiceService) { }

  ngOnInit(): void {
    this.bannerData()
    this.trndingData()


        this.actionMovie()
    this.adventureMovie()
    this.animationMovie()
    this.comedyMovie()
    this.documentaryMovie()
    this.scienceFictionMovie()
    this.thrillerMovie()

  }

  bannerData() {
    this.service.bannerApiData().subscribe((res: any) => {
      this.bannerList = res.results
      console.log("Succeed")
            console.log(res, "Banner")
    })
  }

  trndingData() {
    this.service.trendingMoviesData().subscribe((res) => {
      console.log(res)

      this.trendingMovie = res.results
    })
  }


  //Action
  actionMovie() {
    this.service.fetchActionMovie().subscribe((res: any) => {
      this.actionMovieResult = res.results
    })
  }


   //Adventure
  adventureMovie() {
    this.service.fetchAdventureMovie().subscribe((res: any) => {
      this.adventureMovieResult = res.results
    })
  }

   //Animation
  animationMovie() {
    this.service.fetchAnimationMovie().subscribe((res: any) => {
      this.animationMovieResult = res.results
    })
  }

   //Comedy
  comedyMovie() {
    this.service.fetchComeddyMovie().subscribe((res: any) => {
      this.adventureMovieResult = res.results
    })
  }

   //Documentary
  documentaryMovie() {
    this.service.fetchDocumentaryMovie().subscribe((res: any) => {
      this.documentaryMovieResult = res.results
    })
  }


   //Science Fiction
  scienceFictionMovie() {
    this.service.fetchScienceFictionMovie().subscribe((res: any) => {
      this.scienceFictionMovieResult = res.results
    })
  }


  //Thriller
 thrillerMovie() {
    this.service.fetchThrillerMovie().subscribe((res: any) => {
      this.thrillernMovieResult = res.results
    })
  }

}

