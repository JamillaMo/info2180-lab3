document.addEventListener("DOMContentLoaded", function () {
    let boardSquares = document.getElementById("board").querySelectorAll('div');

    var count;

    for (count = 0; count < boardSquares.length; count++) {
        boardSquares[count].setAttribute("class", "square");
    }

    let state = [];
});