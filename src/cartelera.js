const fs = require ('fs');
const cartelera = { 
    bd: "./data/movies.json",
    titulo :  "En Cartelera" , 
    leerJSON: function () {
     let moviesJson = fs.readFileSync (this.bd , 'utf-8'); 
     let movies = JSON.parse (moviesJson);
     return movies;
    },
    cantidad : function() {
        return this.leerJSON ().total_movies 
    }, 
    listarPelis: function() {
        let movies = this.leerJSON();
        let titleMovies = []
        movies.movies.forEach(function(movie) {
            titleMovies.push(movie)
        })
        titleMovies.sort()
        return titlemovies
    }
}
module.exports = cartelera; 