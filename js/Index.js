function createGrid(divGrid, numbDiv = 256){
    for(let i = 0; i < numbDiv; i++){
        let canvasDiv = document.createElement('div');
        canvasDiv.classList.add('canvasDiv');
        canvas.appendChild(canvasDiv);
    }
}

let canvas = document.querySelector('#canvas');

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




/*
$divsGrids.forEach($divsGrids =>
    $divsGrids.addEventListener('mousedown', e =>{
        
            $divsGrids.addEventListener('mousemove', () =>{
                $divsGrids.setAttribute('style', 'background: black');
            })
        }
    })   
)

let $hundredButton = document.getElementById('hundredPx');

$hundredButton.addEventListener('click', () =>{
    while(divGrid.firstChild){
        divGrid.removeChild(divGrid.firstChild);
    }

    createGrid(divGrid, 10000, 'hundredPx');
    divGrid.classList.add("hundredCanvas");

    let $divsGrids = document.querySelectorAll('.hundredPx');

    $divsGrids.forEach($divsGrids =>
    $divsGrids.addEventListener('onmousedown', () =>{
        $divsGrids.setAttribute('style', 'background: black');
        })   
    )

})
*/
