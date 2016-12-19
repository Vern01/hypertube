import { Component } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
    moduleId: module.id,
    selector: 'movies',
    templateUrl: 'movies.component.html'
})
export class MoviesComponent { 
    popularList:Array<Object>;
    theatersList:Array<Object>;
    searchStr: string;
    searchRes:Array<Object>;
    
    constructor(private _movieService: MovieService){
        this._movieService.getPopular().subscribe(res => {
            this.popularList = res.data.movies;

            //this is to check that it has the objects returned from yts api
            console.log(res.data.movies);
        });
        
        //these need to be populated correctly still, just using same data from above to silence errors
        this._movieService.getInTheaters().subscribe(res => {
            this.theatersList = res.data.movies;
        });
    }
    
    searchMovies(){
        this._movieService.searchMovies(this.searchStr).subscribe(res => {
            this.searchRes = res.data.movies;
        });
    }
}
