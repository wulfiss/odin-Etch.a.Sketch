/*

It create a table 16x16 but the course wanted an grid not a table.

function createGrid(divGrid){
    let table = document.createElement('table');
    table.classList.add('tableDivs');
    let tableBody = document.createElement('tbody');
    let divs = document.createElement('div');

    for (let i = 0; i < 16; i++){
        let tr = tableBody.insertRow();
        for (let j = 0; j < 16; j++){
            let td = tr.insertCell();
            td.appendChild(divs);
        }
    }
    table.appendChild(tableBody);
    divGrid.appendChild(table);

}
*/

function createGrid(divGrid, numbDiv = 256){
    for(let i = 0; i < numbDiv; i++){
        let divs = document.createElement('div');
        divs.classList.add('gridDivs');
        divs.setAttribute('id', 'theDiv');
        divGrid.appendChild(divs);
    }
}


let divGrid = document.querySelector("#divGrid");

createGrid(divGrid);


let $divsGrids = document.querySelectorAll('.gridDivs');

$divsGrids.forEach($divsGrids =>
    $divsGrids.addEventListener('mouseover', () =>{
        $divsGrids.setAttribute('style', 'background: black');
    })   
)

let $hundredButton = document.getElementById('hundredPx');

$hundredButton.addEventListener('click', () =>{
    while(divGrid.firstChild){
        divGrid.removeChild(divGrid.firstChild);
    }

    createGrid(divGrid, 10000);
    divGrid.style.gridTemplateColumns ='repeat (100, auto)';

    let $divsGrids = document.querySelectorAll('.gridDivs');

    $divsGrids.forEach($divsGrids =>
    $divsGrids.addEventListener('mouseover', () =>{
        $divsGrids.setAttribute('style', 'background: black');
    })   
)

})
