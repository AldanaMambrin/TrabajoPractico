const fs = require ("fs")
let sucursales = {
    bd: "./data/theaters.json",
    titulo : "Nuestras Salas:",
    leerJSON : function () {
        let salasjson = fs.readFileSync (this.bs, 'utf-8');
        let salas = JSON.parse (salasjson);
        return salas
    },
    listarsalas: function () {
        let salas  = this.leerJSON ()
        let sala=[] 
        salas.theaters.forEach (function (a) {
            sala.push (a)
        })

        return sala
    
    }
}
module.exports = sucursales;