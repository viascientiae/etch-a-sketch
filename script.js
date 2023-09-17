const container = document.getElementById('container');

for (let i = 0; i < 16 * 16; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.setAttribute('class', 'square');
    container.appendChild(gridSquare);
    gridSquare.addEventListener('mouseover', hoverEffect);
}

function hoverEffect(event) {
    event.target.setAttribute('class', 'hover');
    }