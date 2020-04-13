let gridSize;
let rainbowMode = false;
const parentDiv = document.querySelector('#parent-div');
const clearGridButton = document.querySelector('#clear-grid');
const rainbowModeButton = document.querySelector('#rainbow-mode');
const randomColorButton = document.querySelector('#random-rgb');
clearGridButton.addEventListener('click',eraseGrid);
rainbowModeButton.addEventListener('click',rainbowModeOn);
randomColorButton.addEventListener('click',rainbowModeOff);

function rainbowModeOff () {
    return rainbowMode = false;
}
function rainbowModeOn () {
    return rainbowMode = true;
}

function getRandomColor(max) {
    return Math.floor(Math.random()*Math.floor(max));
}

function eraseGrid () {
for (var i=0;i<gridSize**2;i++) {
    const div = document.getElementById(`div-${i}`);
    parentDiv.removeChild(div);
}
gridSize = prompt("How much baby?");
createGrid(gridSize);
}

function createGrid(size) {
parentDiv.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr)`);
for (var i=0;i<size**2;i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseover', (e) => {
        if (rainbowMode == true) {
            e.target.setAttribute('style', `background-color: rgb(${getRandomColor(256)},${getRandomColor(256)},${getRandomColor(256)})`);
        }
        else {
            e.target.setAttribute('style', `background-color: red`);
        }});
        
    div.setAttribute('id',`div-${i}`);
    div.setAttribute('class','square');
    parentDiv.appendChild(div);
    gridSize = size;
}
}

createGrid(16);
