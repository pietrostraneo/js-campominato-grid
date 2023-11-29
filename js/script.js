// DICHIARO UNA FUNZIONE CHE CREA LE CELLE DELLA GRIGA

function createBox(diff){

    grid.style.width = diff;

    let div = document.createElement(`div`);

    div.classList.add(`square`)

    div.addEventListener("click", function(){
        this.classList.toggle(`bg-danger`)
        console.log("Hai cliccato la cella numero " + this.innerText)
    })

    return div;
}


// RECUPERO LA GRIGLIA

let grid = document.getElementById(`grid`);

// RECUPERO IL BOTTONE PER GENERARE LA GRIGLIA

let generate = document.getElementById(`generate`)


// switch(difficulty.value){
//     case 1:
//         cellNum = 25
//         break;
//     case 2:
//         cellNum = 64
//         break;
//     case 3:
//         cellNum = 100
//         break;
// }
// NON MI FUNZIONA LO SWITCH (ho anche provato ad inserirlo all'interno di addEventListener come ho fatto con IF)



// ESEGUO UN CICLO CHE AGGIUNGE LE CELLE ALLA GRIGLIA

generate.addEventListener("click", function(){

    // PERMETTO ALL'UTENTE DI SCEGLIERE LA DIFFICOLTA'

    let difficulty = document.getElementById(`difficulty`);


    let cellNum;
    let size;

    if(difficulty.value == 1){
        cellNum = 25
        size = "500px"
    }
    else if(difficulty.value == 2){
        cellNum = 64
        size = "800px"
    }
    else if(difficulty.value == 3){
        cellNum = 100
        size = "1000px"
    }

    grid.innerHTML = "";

    for(let i = 0; i<cellNum; i++){

        let cell = createBox(size);
    
        grid.appendChild(cell);
    
        cell.innerText = i+1;
    
    }
})

