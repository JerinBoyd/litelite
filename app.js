const resetBtn = document.querySelector('#reset');
const gridSizeForm = document.querySelector('#grid-size');
const main = document.querySelector('main');
const colorPicker = document.querySelector('#color-picker')

//eventListeners
resetBtn.addEventListener('click', clearGrid);
gridSizeForm.addEventListener('submit', changeGrid);
changeGrid();

//functions
function changeBoxColor(e){ 
    const element = e.target; // this runs where the event originated 
    element.style.backgroundColor = colorPicker.value;

}

function toggleRed(e){
    const element = e.target;
    element.classList.toggle('red');

}

function clearGrid(e){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        box.style.backgroundColor = '';
    });

}

function changeGrid(e){
    if(e) {
        e.preventDefault();
    }
    const gridSizeValue = +gridSizeForm.querySelector('input:checked').value;
    const grid = makeGrid(gridSizeValue);
    main.innerHTML = '';
    grid.forEach((row) => {
         main.appendChild(row);
    })
}

function makeGrid(size){
    const rows = [];
    for(let i = 0; i < size; i += 1){
        const row = document.createElement('div');
        row.classList.add('row');
        const column = document.createElement('div');
        column.classList.add('col-md-12');
        row.appendChild(column);
        for(let i = 0; i < size; i += 1){
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('click', changeBoxColor);
            column.appendChild(box);

    
       }
       rows.push(row);
  
    }
    return rows;
 
}
