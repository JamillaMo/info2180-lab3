document.addEventListener("DOMContentLoaded", function () {
    let count;
    let xGameState = [];
    let oGameState = [];
    let winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let boardSquares = document.getElementById("board").querySelectorAll('div');
    let xTurn = true;
    const x_Class = "x";
    const o_Class = "o";

    for (count = 0; count < boardSquares.length; count++) {
        boardSquares[count].setAttribute("class", "square");
    }

    boardSquares.forEach(cell => {
        cell.addEventListener('click', clickFunction, { once: true })
    })

    function clickFunction(e) {
        const cell = e.target;
        let currentClass = xTurn ? x_Class : o_Class

        placeMark(cell, currentClass)

        function getElementIndex(e) {
            var index = 0;
            while ((e = e.previousElementSibling)) {
                index++;
            }
            return index;
        }

        getElementIndex(cell);

        if (xTurn == true) {
            xGameState.push(getElementIndex(cell));
        }

        else {
            oGameState.push(getElementIndex(cell));
        }

        checkForWin();

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

        cell.addEventListener('mouseout', function (e) {
            e.target.classList.remove('hover');
        });
    });

    function checkForWin() {
        //If the elements in xGameState are in one of the win combinations
        for (count = 0; count < winCombinations.length; count++) {
            let win;
            //console.log("winner");
            //console.log(winCombinations[count].every(checkIfIn));
            win = winCombinations[count].every(checkIfIn);
            //console.log(winCombinations[count]);
            console.log(xTurn);

            if (win == true) /*and the textContent == "XXX" or "OOO" */ {
                boardSquares.forEach(function (cell, index) {
                    cell.removeEventListener('click', clickFunction, { once: true })

                    cell.addEventListener('mouseover', function (e) {
                        e.target.classList.replace('hover', 'active');
                    });
                });

                document.getElementById("status").setAttribute("class", "you-won");
                console.log("winner");
                console.log(boardSquares.forEach(function(cell) {
                    cell.textContent;
                }));
                
                //If all spaces are filled and there are no winners, there is a draw.

                if(xTurn == true) {
                    document.getElementById("status").textContent = "Congratulations! X is the winner!";
                }
                
                else if(xTurn == false) {
                    document.getElementById("status").textContent = "Congratulations! O is the winner!";
                }
            }

            // else if() {
            //     //
            // }

        }

        //Account for a draw
    }

    function checkIfIn(x) {
        if (xTurn == true) {
            //console.log(xGameState);
            return x in xGameState;
        }

        else if (xTurn == false) {
            //console.log(x);
            return x in oGameState;
        }
    }

});