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

function createGrid(divGrid, numbDiv = 256, className = 'sixteenPx'){
    for(let i = 0; i < numbDiv; i++){
        let divs = document.createElement('div');
        divs.classList.add(className);
        divs.setAttribute('id', 'theDiv');
        divGrid.appendChild(divs);
    }
}


let divGrid = document.querySelector("#divGrid");

createGrid(divGrid);


let $divsGrids = document.querySelectorAll('.sixteenPx');

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

    createGrid(divGrid, 10000, 'hundredPx');
    divGrid.classList.add("hundredCavan");

    let $divsGrids = document.querySelectorAll('.hundredPx');

    $divsGrids.forEach($divsGrids =>
    $divsGrids.addEventListener('mouseover', () =>{
        $divsGrids.setAttribute('style', 'background: black');
        })   
    )

})
