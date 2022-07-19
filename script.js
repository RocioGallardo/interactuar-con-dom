
class Plato{
    constructor(id, titulo, imagen, ingredientes,){
        this.id = id
        this.titulo = titulo
        this.imagen = imagen
        this.ingredientes = ingredientes
    }
}

const plato1 = new Plato(1, "Mousse de espárragos", "./assets/mousse.jpeg", ["Mantequilla","Puerro","Cebolla","Esparragos blancos en conserva escurrridos", "Caldo de verduras", "Gelatina en láminas","Clara de huevo XL","Sal","Pimienta negra molida","Queso rallado para decorar","Espárragos trigueros finos (para decorar)","Jamón serrano en lonchas"])
const plato2 = new Plato(2, "Zamburiñas picantitas con salsa de tomate y jengibre", "./assets/zamburinas.jpeg", ["Zamburiñas", "Tomate triturado", "Puerro", "1 diente de ajo", "1 trocito de guindilla", "1 trozo de jengibre", "Perejil picado"])
const plato3 = new Plato(3,"Sabayón con frutos rojos","./assets/sabayon.jpeg", ["Yemas de huevo", "Azúcar", "Vino marsala seco","Vino blanco seco"])
const plato4 = new Plato(4,"Vieiras rellenas al estilo de Julia Child","./assets/vieiras.jpeg", ["Vieiras", "Mantequilla", "Cebolla dulce","chalota","1 Diente de ajo pequeño", "Aceite de oliva","Laurel","Vino blanco","Queso para gratinar","Pan rallado","Pimienta negra","Sal"])
const plato5 = new Plato(5,"Pollo en reducción de balsámico y verduras","./assets/pollo.jpeg", ["Pechugas de pollo", "Judías verdes","Tomates cherry","Mostaza","Aceto balsámico","Tomillo seco","Mantequilla","Aceite de oliva","Sal","Pimienta negra molida"])
const plato6 = new Plato(6,"Tarta de crêpes con fresas y nata","./assets/tarta.jpeg", ["Harina","Leche","Huevo","Aceite de oliva virgen extra", "Azúcar","Sal","Nata para montar","Extracto de vainilla","Fresas","Azúcar molido para espolvorear"])


const platos = [plato1,plato2,plato3,plato4,plato5,plato6]



const divPlatos = document.getElementById("divPlatos")








for (let plato of platos){
    divPlatos.innerHTML += `
    <div class="div-plato">
    <h3>${plato.titulo}</h3>
    <img src="${plato.imagen}" alt="">
    <ul id="ul${plato.id}">
    </ul>
    </div>
    `
}
const ul1 = document.getElementById("ul1")
for (let i = 0 ; i<platos[0].ingredientes.length; i++){
    ul1.innerHTML += `
    <li>${platos[0].ingredientes[i]}</li>
    `
}
const ul2 = document.getElementById("ul2")
for (let i = 0 ; i<platos[1].ingredientes.length; i++){
    ul2.innerHTML += `
    <li>${platos[1].ingredientes[i]}</li>
    `
}
const ul3 = document.getElementById("ul3")
for (let i = 0 ; i<platos[2].ingredientes.length; i++){
    ul3.innerHTML += `
    <li>${platos[2].ingredientes[i]}</li>
    `
}
const ul4 = document.getElementById("ul4")
for (let i = 0 ; i<platos[3].ingredientes.length; i++){
    ul4.innerHTML += `
    <li>${platos[3].ingredientes[i]}</li>
    `
}
const ul5 = document.getElementById("ul5")
for (let i = 0 ; i<platos[4].ingredientes.length; i++){
    ul5.innerHTML += `
    <li>${platos[4].ingredientes[i]}</li>
    `
}
const ul6 = document.getElementById("ul6")
for (let i = 0 ; i<platos[5].ingredientes.length; i++){
    ul6.innerHTML += `
    <li>${platos[5].ingredientes[i]}</li>
    `
}







/* 

console.log(platos[0].ingredientes)
console.log(platos[0].ingredientes.length)
console.log(platos[0].ingredientes[0])






const ul = document.getElementById("ul")
    for(let i = 0 ; i<platos[0].ingredientes.length; i++){
        ul.innerHTML += `
        <li>${plato.ingredientes[i]}</li>
        `
    } */

/* for (let plato of platos){
    divPlatos.innerHTML += `
    <div class="div-plato">
    <h3>${plato.titulo}</h3>
    <img src="${plato.imagen}" alt="">
    <ul id="ul">`
    const ul = document.getElementById("ul")
    for (let ingrediente of plato.ingredientes) {
        ul.innerHTML +=`
        <li>${ingrediente}</li>
        `
    } 
    `</ul>
    </div>
    ` 
} */




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