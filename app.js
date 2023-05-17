let readline = require('readline')
let resp = undefined

function main() {
    // Começando a verdade - 14:30 -> 15:30
    // começar o jogo
    let BaralhoDisponivel = require('./json/cartas.json') // Iniciando baralho
    let BaralhoFuncoes = require('./cartas')
    BaralhoDisponivel = BaralhoFuncoes.embaralharGeral(BaralhoDisponivel) // embaralhando cartas
    
}

// criando leitor
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question(
    "Este é um jogo de cartas em nodejs, quer jogar!?\n\t1 - jogar contra robo\n\t0 - sair\nESCOLHA: ",
    function(answer){
        if(parseInt(answer) == 0){
            process.exit(console.log("Ok, muito obrigado, senhorKK"))
        } else {
            main()
        }
    }
)