function createGrid(divGrid, canvasSizeSlider = 16){
    let numbDiv = canvasSizeSlider * canvasSizeSlider;
    for(let i = 0; i < numbDiv; i++){
        let canvasDiv = document.createElement('div');
        canvasDiv.classList.add('canvasDiv');
        canvas.appendChild(canvasDiv);
    }
}

function drawingCanvas(){
    let canvasDivs = document.querySelectorAll('.canvasDiv');
    let $clearCanvas = document.querySelector('#clearCanvas');
    let isDrawing = false;


    canvas.addEventListener('mousedown', e =>{
        isDrawing = true;
    });


    canvasDivs.forEach(canvasDivs =>{
        canvasDivs.addEventListener('mousemove', e =>{
            if(isDrawing === true){
                canvasDivs.setAttribute('style', 'background: black');
            }
        })
    });

    window.addEventListener('mouseup', e =>{
        if(isDrawing === true){
            isDrawing = false;
        }
    });

    $clearCanvas.addEventListener('click', () =>{
        canvasDivs.forEach(canvasDivs => {
            canvasDivs.setAttribute('style', 'background: red');
            }
        )
    });
}

const removeDivs = () =>{
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
}


let canvas = document.querySelector('#canvas');
let $hundredPx = document.querySelector('#hundredPx');
let canvasSizeViewer = document.querySelector('#canvasSizeViewer');
let $slider = document.querySelector('#canvasSize');



createGrid(canvas);
drawingCanvas();



$slider.addEventListener('input', () =>{
    canvasSizeViewer.textContent = `${$slider.value}X${$slider.value}`;

    removeDivs();
    createGrid(canvas, $slider.value);
    canvas.style.setProperty('grid-template-columns', `repeat(${$slider.value}, 1fr)`);
    drawingCanvas();
})

