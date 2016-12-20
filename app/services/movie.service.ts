import {Injectable} from '@angular/core';
import {Jsonp, Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
    apikey: string;
    
    constructor(private http:Http){
        console.log('MovieService Initialized...');
    }
    
    getPopular(){
        return this.http.get('https://yts.ag/api/v2/list_movies.json')
            .map(res => res.json());
    }
    
    getInTheaters(){
        return this.http.get('https://yts.ag/api/v2/list_movies.json')
            .map(res => res.json());
    }
    
    searchMovies(searchStr:string){
        return this.http.get('https://yts.ag/api/v2/list_movies.json')
            .map(res => res.json());
    }
    
    getMovie(id:string){
        console.log(`movie fucking service ${id}`);
        var jan = `https://yts.ag/api/v2/movie_details.json?movie_id=${id}`;
        console.log(jan);
        return this.http.get(jan) 
            .map(res => res.json());
    }
}


