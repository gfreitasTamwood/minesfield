let field = document.getElementById("field");
counter = 0;

let mines = new Map();
function createField() {
    
    for (let i = 0; i < 10; i++) {
        let tableRow = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            let tableCell = document.createElement("td");
            tableCell.setAttribute("cell-number",counter++);
            tableCell.setAttribute("onclick","findMine()");
            tableRow.appendChild(tableCell);
        }
        field.appendChild(tableRow);
    }
}

function placeMine(event) {
    event.preventDefault();

    let qty = $('#qty').val();
    
    for (let i = 0; i < qty; i++) {
        let random = Math.floor(Math.random()*99);
        mines.get(random,random);
        $("[cell-number="+random+"]").attr('class','mine');
    }
}

function findMine(){
    console.log(
        $("[cell-number]")
    );
}

document.getElementById("btnMine").addEventListener("click",placeMine);

window.onload = createField;