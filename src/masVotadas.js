const fs = require  ("fs");
let votadas = {
    bd : "./data/movies.json",
    titulo: "Mas Votadas", 
    leerJSON : function () {
        let moviesJson = fs.readFileSynck (this.bd, 'utf-8');
        let movies = JSON.parse (moviesJson); 
        return movies

    },
    listado: function () {
        let movie = this.leerJSON ()
        let voto = movie.movie.filter (function (x){
            return x.vote_averege >7
    
        }) 
        return voto
        
    },

     promedio: function(){
        let movies = this.filtrarPelis()
        let rating = []
        movies.forEach(movie => {
            rating.push(movie.vote_average) 
        });
        let ratingSumado = rating.reduce(function(acum,num){
            return acum + num
        })
        return (ratingSumado / movies.length)
        }
     }

module.exports = votadas 