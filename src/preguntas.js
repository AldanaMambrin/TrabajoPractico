const fs = require ("fs");
let faq = {
    bd: "./data/faqs.json ",
    titulo: "Preguntas Frecuentes", 
    leerJSON: function () {
        let faqjson = fs.readFileSync (this.bd, 'utf-8');
        let faq = JSON.parse (faqjson);
        return faq
    },
    listarfaq: function () {
        let preg = this.leerJSON ()
        let pregun = []
        pregun.faqs.forEach (function (b)
        {
            return pregun.push(b)
        })
        return pregunt 
    }
}
module.exports = faq 