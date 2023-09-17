const container = document.getElementById('container');

const btn = document.getElementById('button');
btn.addEventListener("click", resetGrid);

function createGrid(squaresPerSide = 16) {

    if (squaresPerSide > 100) {
        squaresPerSide = 100;
        alert("The input exceeds the maximum limit. Setting to 100.");
    }

    container.innerHTML = '';
    const squareSize = 640 / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;
        gridSquare.setAttribute('class', 'square');
        container.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', hoverEffect);
    }
}

function hoverEffect(event) {
    event.target.style.backgroundColor = `aqua`;
    }

function resetGrid(event) {
        let squaresPerSide = window.prompt("Enter number of squares per side (Max allowed 100).");
        createGrid(squaresPerSide);
    }

createGrid();