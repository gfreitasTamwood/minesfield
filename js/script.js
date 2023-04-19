let field = $('#field');

function createField(){
    let counter = 0;
    for(let i = 0; i < 10; i++ ) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            let td = document.createElement("td");
            td.setAttribute("cell-number",counter++);
            tr.appendChild(td);
        }
        field.append(tr);
    }
}

let minesList = [];
$('#qty').change( function(){
    setMines();
});

function setMines(){
    let mines = parseInt($('#qty').val());
    for(let i = 0; i < mines; i++){
        minesList.push(Math.floor(Math.random()*99));
    }
}

function setMinesField(event){
    event.preventDefault();
    for(let i = 0; i < minesList.length; i++) {
        $(`[cell-number=${minesList[i]}]`).attr('class','mines');
    }
}

$('#btnMine').click(setMinesField);

$("#field").ready(function(){
    $("td").contextmenu( function(){
        $(this).addClass("flag");
    });
});

$("#field").ready(function(){
    $("td").click(function(){
        if(!$(this).hasClass("mines")) {
            $(this).addClass("success");
        } else {
            $(this).addClass("mistake");
        }
    })
});
window.onload = createField;
