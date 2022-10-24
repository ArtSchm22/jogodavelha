const jogo = document.querySelector(".container")
const colunas = ["", "", "", "", "", "", "", "", "",]
const sequencia = [
    [0, 3, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
]

function game() {
    let msg = ""

    for (i in colunas) {
        msg += "<div onclick='jogoXeO(" + i + ")'>" + colunas[i] + "</div>"
        jogo.innerHTML = msg
    }
}

game()

const output = document.getElementById("output")
let xeo = true
let flag = 0

function verificar() {
    let fim = false

    for (i in sequencia) {
        if (colunas[sequencia[i][0]] == 'X' &&
            colunas[sequencia[i][1]] == 'X' &&
            colunas[sequencia[i][2]] == 'X') {
            fim = true
            output.innerHTML = ("Jogador X ganhou!")
        }
        else if (colunas[sequencia[i][0]] == 'O' &&
            colunas[sequencia[i][1]] == 'O' &&
            colunas[sequencia[i][2]] == 'O') {
            fim = true
            output.innerHTML = ("Jogador O ganhou!")
        }
        setTimeout(function () {
            if (fim === false && flag === 9) {
                output.innerHTML = ("Empate!")
                fim = true
            }
        }, 100)
    }
}

function jogoXeO(position) {
    if (colunas[position] == "" && xeo == true) {
        colunas[position] = "X"
        flag += 1
        xeo = false
    }
    else if (colunas[position] == "" && xeo == false) {
        colunas[position] = "O"
        flag += 1
        xeo = true
    }

    game()
    setTimeout(function () {
        verificar()
    }, 50)
}

function refreshGame() {
    document.location.reload()
}


