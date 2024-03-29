document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })

})

function handleClick(event) {
   // console.log(event.target)

    let square = event.target;
    let position = square.id;
    
    if (handleMove(position)) {

        setTimeout (()=> {
            alert('O jogo acabou, o vencedor foi ' + playerTime)
        }, 15)
    }
    updateSquares()
}

function updateSquares() {

    let squares = document.querySelectorAll('.square') 

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position]
        
        if (symbol != '') {
            square.innerHTML = `<div class=${symbol}></div>`;
        }
        
    })
}

function restart() {
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;
    
    let squares = document.querySelectorAll('.square');
    
    squares.forEach((square) => {
        square.innerHTML = "";
    }) 
}




