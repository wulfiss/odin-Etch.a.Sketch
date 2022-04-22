function createGrid(divGrid, numbDiv = 256){
    for(let i = 0; i < numbDiv; i++){
        let canvasDiv = document.createElement('div');
        canvasDiv.classList.add('canvasDiv');
        canvas.appendChild(canvasDiv);
    }
}

let canvas = document.querySelector('#canvas');
let $hundredPx = document.querySelector('#hundredPx');

createGrid(canvas);

let canvasDivs = document.querySelectorAll('.canvasDiv')
let isDrawing = false;


canvas.addEventListener('mousedown', e =>{
    isDrawing = true;
})


canvasDivs.forEach(canvasDivs =>{
    canvasDivs.addEventListener('mousemove', e =>{
        if(isDrawing === true){
            canvasDivs.setAttribute('style', 'background: black');
        }
    })
})

window.addEventListener('mouseup', e =>{
    if(isDrawing === true){
        isDrawing = false;
    }
})

$hundredPx.addEventListener('click', () =>{
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }

    createGrid(canvas, 10000);
    canvas.style.setProperty('grid-template-columns', 'repeat(100, 1fr)');

})