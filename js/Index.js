function createGrid(divGrid, canvasSizeSlider = 16){
    let numbDiv = canvasSizeSlider * canvasSizeSlider;
    for(let i = 0; i < numbDiv; i++){
        let canvasDiv = document.createElement('div');
        canvasDiv.classList.add('canvasDiv');
        canvas.appendChild(canvasDiv);
    }
}

function rainBowEffect(){
    let colorRed = Math.floor(Math.random() * 255);
    let colorGreen = Math.floor(Math.random() * 255);
    let colorBlue =  Math.floor(Math.random() * 255);

    return `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
}

function isRainBowTrue(){
    if(isRainBow == true){
        isRainBow = false;
    }
}

function drawingCanvas(){
    let canvasDivs = document.querySelectorAll('.canvasDiv');
    let $clearCanvas = document.querySelector('#clearCanvas');
    let $colorPicker = document.querySelector('#colorPicker');
    let colorUser = $colorPicker.value
    let $rainBow = document.querySelector('#rainBow');
    let isDrawing = false;
    let isRainBow = false;


    $rainBow.addEventListener('click', e=> {
        if(isRainBow == false){
            isRainBow = true;
        }else{
            isRainBow = false;
        }
    });

    canvas.addEventListener('mousedown', e =>{
        isDrawing = true;
    });

    canvasDivs.forEach(canvasDivs =>{
        canvasDivs.addEventListener('mousemove', e =>{
            if(isDrawing === true && isRainBow === true){
                canvasDivs.setAttribute ('style', `background: ${rainBowEffect()}`);
            }else if(isDrawing === true){
                canvasDivs.setAttribute('style', `background: ${colorUser}`);
            }
        })
    });

    window.addEventListener('mouseup', e =>{
        if(isDrawing === true){
            isDrawing = false;
        }
    });

    //TouchEvents

    canvas.addEventListener('touchstart', e =>{
        isDrawing = true;
    });

    canvasDivs.forEach(canvasDivs =>{
        canvasDivs.addEventListener('touchmove', e =>{
            if(isDrawing === true){
                canvasDivs.setAttribute('style', `background: ${colorUser}`);
            }
        })
    });

    window.addEventListener('touchend', e =>{
        if(isDrawing === true){
            isDrawing = false;
        }
    });

    //TouchEvents

    $clearCanvas.addEventListener('click', () =>{
        canvasDivs.forEach(canvasDivs => {
            canvasDivs.setAttribute('style', 'background: white');
            }
        )
    });

    $colorPicker.addEventListener('input', () =>{
        isRainBow = false;
        colorUser = $colorPicker.value;
        $eraser.textContent = 'Eraser';
    })

    $eraser.addEventListener('click',() =>{
        if($eraser.textContent === 'Eraser'){
            isRainBow = false;
            $eraser.textContent = 'Pencil';
            colorUser = 000000;
        }else{
            isRainBow = false;
            $eraser.textContent = 'Eraser';
            colorUser = $colorPicker.value;
        }
    })
}


const removeDivs = () =>{
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
}


let canvas = document.querySelector('#canvas');
let canvasSizeViewer = document.querySelector('#canvasSizeViewer');
let $slider = document.querySelector('#canvasSize');
let $eraser = document.querySelector('#eraser');


createGrid(canvas);
drawingCanvas();



$slider.addEventListener('input', () =>{
    canvasSizeViewer.textContent = `${$slider.value}X${$slider.value}`;

    removeDivs();
    createGrid(canvas, $slider.value);
    canvas.style.setProperty('grid-template-columns', `repeat(${$slider.value}, 1fr)`);
    drawingCanvas();
})

