import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieServiceService } from '../../Service/movie-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone:true,
  imports : [ReactiveFormsModule , CommonModule,ReactiveFormsModule, RouterLink,]
})
export class SearchComponent implements OnInit {

  serchResult: any = []
  constructor( private service : MovieServiceService) {}
  baseUrl = this.service.baseUrl


  ngOnInit(): void {

  }

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  })

  submitForm() {
    console.log(this.searchForm.value, 'searchForm#');
    this.service.serachMovie(this.searchForm.value).subscribe((res) => {
      console.log(res, 'SearchMovie#')
      this.serchResult = res.results
    })
  }

  
}


