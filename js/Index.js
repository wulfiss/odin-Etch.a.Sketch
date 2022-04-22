function createGrid(divGrid, numbDiv = 256){
    for(let i = 0; i < numbDiv; i++){
        let canvasDiv = document.createElement('div');
        canvasDiv.classList.add('canvasDiv');
        canvas.appendChild(canvasDiv);
    }
}

function drawingCanvas(){
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
}

const clearCanvas = () =>{
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
}

let canvas = document.querySelector('#canvas');
let $hundredPx = document.querySelector('#hundredPx');

createGrid(canvas);
drawingCanvas();

$hundredPx.addEventListener('click', () =>{
    clearCanvas();
    createGrid(canvas, 4096);
    canvas.style.setProperty('grid-template-columns', 'repeat(64, 1fr)');

    drawingCanvas();

})
