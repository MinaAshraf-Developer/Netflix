import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../Service/movie-service.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  constructor(private service: MovieServiceService, private router: ActivatedRoute) { }

  getMovieDetails: any;
  video: any;
  cast: any;
  ///////////////////////


  ngOnInit(): void {
    let getparamId = this.router.snapshot.paramMap.get('id')
    this.getMovie(getparamId)

    this.getVideo(getparamId)

    this.getCast(getparamId)



  }

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((res => {
      console.log(res)
      this.getMovieDetails = res
    }))
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((res => {
      console.log(res, "Videoooooo")
      res.results.forEach((element:any) => {
        if (element.type == "Trailer") {
          this.video = element.key
        }
      });
    }))
  }



  getCast(id: any) {
    this.service.getMovieCast(id).subscribe((res: any) => {
      console.log(res, "caaaaaaaaaaaaaaastttttttt")
      this.cast = res.cast
    })
  }

  
}
