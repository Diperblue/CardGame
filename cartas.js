let cartas = require('./json/cartas.json')

function getRandomInt(max) { // gerá um número aleatoria
    return Math.floor(Math.random() * max + 1)
}

function embaralharCartas(cartas){ // emberalhar as cartas do nype
    let toRemoveAdd = undefined;
    for(var a = 0;a<cartas.length;a++){
        // console.log('A: ', a, 'LIST: ', cartas[a].cartas)
        for(var b = 0;b<cartas[a].cartas.length;b++){
            toRemoveAdd = cartas[a].cartas[getRandomInt(cartas[a].cartas.length-1)] // a carta
            cartas[a].cartas.splice(cartas[a].cartas.indexOf(toRemoveAdd), 1) // a carta sendo removida
            cartas[a].cartas.splice(
                getRandomInt(cartas[a].cartas.length-1),
                 0,
                  toRemoveAdd
                ) // a carta sendo adicionada
            // console.log('B: ', b, 'LIST: ', cartas[a].cartas)
        }
    }
    return cartas
} // retorna a var, com as cartas embaralhadas

function embaralharNypes(cartas){ // embaralha os nypes
    let toRemoveAdd = undefined
    for(var a = 0;a<cartas.length;a++){
        toRemoveAdd = cartas[getRandomInt(cartas.length-1)]
        cartas.splice(cartas.indexOf(toRemoveAdd), 1)
        cartas.splice(
            getRandomInt(cartas.length),
            0,
            toRemoveAdd
        )
    }
    return cartas
}

function embaralharGeral(cartas){ // utiliza as duas funções de embaralhemento
    return embaralharNypes(embaralharCartas(cartas))
}

function roubarCarta(baralhoDisponivel){
    let a = getRandomInt(baralhoDisponivel.length-1)    
    return {
        "nype": baralhoDisponivel[a],
        "numero": baralhoDisponivel[a].carta[getRandomInt(baralhoDisponivel[a].carta.length-1)]
    }
}

function darCartas(baralho, q){
    let nypeA = []
    let cartasA = []
    let removeCarta = []
    for(var f=0;f<q;f++){
    }
    for(var a=0;a<q;a++){
       removeCarta.push(getRandomInt(baralho.length)) // pegando o nype
       nypeA.push(removeCarta[removeCarta.length-1]) // mandando o nype pro NypeA( lista com os nypes a ser dado )
    }
    for(var b=0;b<nypeA.length;b++){ // -> trabalho com a lista de num(-> endereços)
        cartasA.push(
            {
                "nype": baralho[b].nype,
                "numero": getRandomInt(baralho[b].cartas.length)
            }
        )
    }
    return [ cartasA, removeCarta ] 
}

module.exports = { embaralharGeral, darCartas }