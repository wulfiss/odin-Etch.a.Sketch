function createGrid(divGrid){
    let table = document.createElement('table');
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

let divGrid = document.querySelector("#divGrid");

createGrid(divGrid);
