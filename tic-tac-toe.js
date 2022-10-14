document.addEventListener("DOMContentLoaded", function () {
    let gameState = [];
    const x_Class = "x";
    const o_Class = "o";
    let xTurn = true;

    let boardSquares = document.getElementById("board").querySelectorAll('div');

    var count;

    for (count = 0; count < boardSquares.length; count++) {
        boardSquares[count].setAttribute("class", "square");
    }

    boardSquares.forEach(cell => {
        cell.addEventListener('click', clickFunction, { once: true })
    })

    function clickFunction(e) {
        console.log("Clicked thing")
        const cell = e.target;
        let currentClass = xTurn == true ? x_Class : o_Class

        placeMark(cell, currentClass)

        gameState.push(cell)
        console.log(cell)
        
        xTurn = !xTurn;

    }

    function placeMark(cell, currentClass) {
        if (currentClass == x_Class) {
            cell.classList.add("X");
            cell.innerHTML = "X";
        }

        else if (currentClass == o_Class) {
            cell.innerHTML = "O";
            cell.classList.add("O");
        }
    }

    boardSquares.forEach(function (cell, index) {
        cell.addEventListener('mouseover', function (e) {
            e.target.classList.add('hover');
        });

        cell.addEventListener('mouseout', function(e) {
            e.target.classList.remove('hover');
          });
    });

});