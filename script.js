var gridContainer = document.getElementById('container');
var eraser = document.querySelector('.eraser-btn');
var black = document.querySelector('.black-btn');
var random = document.querySelector('.random-btn');
var colorPicker = document.querySelector('.input');
var newBtn = document.querySelector('.new-button');

var currentMode = 'black'; // Default mode

const slider = document.getElementById('slider');
const gridSizeLabel = document.getElementById('grid-size');

function createGrid(size) {
    // Clear previous grid
    gridContainer.textContent = '';

    // Calculate item size percentage
    const itemSize = 100 / size;

    // Create new grid items
    for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.flex = `1 0 ${itemSize}%`;
    div.style.height = `${itemSize}%`;
    div.addEventListener('mouseover', changeColor);
    gridContainer.appendChild(div);
    }
}

// Initialize grid
createGrid(slider.value);

// Update grid on slider change
slider.addEventListener('input', () => {
    const size = slider.value;
    gridSizeLabel.textContent = `${size} x ${size}`;
    createGrid(size);
});

function changeColor() {
    if (currentMode === 'black') {
    this.style.backgroundColor = 'black';
    } else if (currentMode === 'eraser') {
    this.style.backgroundColor = 'white';
    } else if (currentMode === 'random') {
    this.style.backgroundColor = randomColor();
    } else if (currentMode === 'color-picker') {
    this.style.backgroundColor = colorPicker.value;
    }
}

function randomColor() {
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    return colors[Math.floor(Math.random() * colors.length)];
}

eraser.addEventListener('click', function() {
    currentMode = 'eraser';
});

black.addEventListener('click', function() {
    currentMode = 'black';
});

random.addEventListener('click', function() {
    currentMode = 'random';
});

colorPicker.addEventListener('input', function() {
    currentMode = 'color-picker';
});

newBtn.addEventListener('click', function() {
    var gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function(item) {
    item.style.backgroundColor = 'white';
    });
});
