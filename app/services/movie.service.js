"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        console.log('MovieService Initialized...');
    }
    MovieService.prototype.getPopular = function () {
        return this.http.get('https://yts.ag/api/v2/list_movies.json')
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.getInTheaters = function () {
        return this.http.get('https://yts.ag/api/v2/list_movies.json')
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.searchMovies = function (searchStr) {
        console.log(searchStr);
        return this.http.get("https://yts.ag/api/v2/list_movies.json?query_term=" + searchStr)
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.getMovie = function (id) {
        console.log("movie fucking service " + id);
        var jan = "https://yts.ag/api/v2/movie_details.json?movie_id=" + id;
        console.log(jan);
        return this.http.get(jan)
            .map(function (res) { return res.json(); });
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map