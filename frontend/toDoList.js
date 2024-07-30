const button = document.querySelector("#add-task")
const input = document.querySelector("#taskbar")
const allList = document.querySelector(".list-task")

let itensNaLista = []


function addTarefa() {
    itensNaLista.push({
        tarefa: input.value,
        concluida: false
    })
    
    mostrarTarefa()
    //Limpa a taskbar
    input.value = ""
}

function mostrarTarefa(){
    let novaLi = ""

    itensNaLista.forEach( (item, index) => {
        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
            <img src="./assets/check-circle.png" onclick="checkTask(${index})">
            <p>${item.tarefa}</p>
            <img src="./assets/trash3-fill.png" onclick="deleteItem(${index})">
        </li>
        `
 })

 allList.innerHTML = novaLi

}

function checkTask(index){
    itensNaLista[index].concluida = !itensNaLista[index].concluida

    mostrarTarefa()
}

function deleteItem(index){

    itensNaLista.splice(index, 1)

    mostrarTarefa()

}

// Quando clica no botão para criar
button.addEventListener("click", addTarefa)