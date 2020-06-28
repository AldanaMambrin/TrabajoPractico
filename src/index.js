const homePage  = require("./homePage")
const contacto = require ("./contacto")
const sucursales = require ("./sucursales")
const masVotadas = require ("./masVotadas")
//const preguntas =  require ("./preguntas")//
const cartelera = require ("./cartelera")
//const { listarPelis } = require("./homePage");
//const { titulo } = require("./contacto.");//
let index = {
    homePage:function(res){
        res.write(homePage.titulo);
        res.write("\n")
        res.write("Total: " + homePage.cantidad()+"\n")
        let titulos=homePage.listarPelis()
        let i=0
        for (titulo of titulos){
            i++
            res.write(i+":"+ titulo)
            res.write("\n")
        }
        res.end();
    },
    cartelera:function(res) {
    res.write (cartelera.titulo + '\n\n');
    res.write ()
    res.write ( 'total'+ cartelera.cantidad)  
    res.write ('listado de peliculas')
    let listar = cartelera.listarPelis ()
    listar.forEach (function (lista){
        
    })
    res.end ()

    },
    masVotadas:function(res){
        res.write ("" + masVotadas.titulo + "\n")
        res.write ("Cantida:" + masVotadas.listado().length + "\n")
        res.write ("Promedio"+ masVotadas.promedio ())
        let lista = masVotadas.listado ()
        let i=0
        listar.foreach (function (x){
            i++
            res.write ( "" + i +"--" + x.vote_average + ":\n")
            res.write ("Voto:" + x.vote_averege + "\n")
            res.write ("Reseña:" + x.overview + " \n" )
        })
        res.end ()

    },
    sucursales:function(res){ 
        res.write (""+ sucursales.titulo)
        res.write ("" + sucursales + listasalas().length + "\n")
        let salas =  sucursales.listasalas ()
        let i = 0
        salas.forEach (function(a){
        i++
        res.write ("Sala" + i + a.name + "\n")
        res.write ("Ubicacion:" + a.address + "\n")

    
        })
        res.end ()

    },
    contacto:function(res){
    res.write (contacto.titulo)
    res.write (contacto.contenido)
    res.end ();
    },
    preguntas:function(res){
     
    }
} 
module.exports=index