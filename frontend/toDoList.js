function newTask()
{
    let input = document.getElementById("taskbar")
    //Garantir que foi escrito algo
    if(!input.value)
    {
        alert("É preciso escrever algo para adicionar na sua lista")
    }
}