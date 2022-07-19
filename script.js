
class Plato{
    constructor(id, titulo, imagen, ingredientes,){
        this.id = id
        this.titulo = titulo
        this.imagen = imagen
        this.ingredientes = ingredientes
    }
}

const plato1 = new Plato(1, "Mousse de espárragos", "./assets/mousse.jpeg", ["Mantequilla","Puerro","Cebolla","Esparragos blancos en conserva escurrridos", "Caldo de verduras", "Gelatina en láminas","Clara de huevo XL","Sal","Pimienta negra molida","Queso rallado para decorar","Espárragos trigueros finos (para decorar)","Jamón serrano en lonchas"])
const plato2 = new Plato(2, "Zamburiñas picantitas con salsa de tomate y jengibre", "./assets/zamburinas.jpeg", ["zamburiñas", "tomate triturado", "puerro", "1 diente de ajo", "1 trocito de guindilla", "1 trozo de jengibre", "perejil picado"])
const plato3 = new Plato(3,"Sabayón con frutos rojos","./assets/sabayon.jpeg", ["ingrediente1", "ingrediente2"])
const plato4 = new Plato(4,"Vieiras rellenas al estilo de Julia Child","./assets/vieiras.jpeg", ["ingrediente1", "ingrediente2"])
const plato5 = new Plato(5,"Pollo en reducción de balsámico y verduras","./assets/pollo.jpeg", ["ingrediente1", "ingrediente2"])
const plato6 = new Plato(6,"Tarta de crêpes con fresas y nata","./assets/tarta.jpeg", ["ingrediente1", "ingrediente2"])


const platos = [plato1,plato2,plato3,plato4,plato5,plato6]



const divPlatos = document.getElementById("divPlatos")



for (let plato of platos){
    divPlatos.innerHTML += `
    <div class="div-plato">
    <h3>${plato.titulo}</h3>
    <img src="${plato.imagen}" alt="">
    <ul id="ul">`
    const ul = document.getElementById("ul")
    for (let i = 0; i< plato.ingredientes.length; i++){
        ul.innerHTML +=`
        <li>${plato.ingredientes[i]}</li>
        `
    }
    `</ul>
    </div>
    ` 
}

const arrayIngredientes = platos[0]


/* for (let plato of platos){
    divPlatos.innerHTML += `
    <div class="div-plato">
    <h3>${plato.titulo}</h3>
    <img src="${plato.imagen}" alt="">
    <ul id="ul"></ul>
    </div>
    ` 
    const ul = document.getElementById("ul")
    for (let i = 0; i< plato.ingredientes.length; i++){
        ul.innerHTML +=`
        <li>${plato.ingredientes[i]}</li>
        `
    }
} */