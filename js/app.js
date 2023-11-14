const inputBox = document.getElementById('task-box');
const listaTarefas = document.getElementById('list-tarefas');

function addTarefa() {
    if(inputBox.value === '') {
        alert('Adicone alguma tarefa');
    } else {
        let li = document.createElement ("li");
        li.innerHTML = inputBox.value;
        listaTarefas.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML ="";
        li.appendChild(span);
        

    }

    inputBox.value = "";
    saveData();
}

listaTarefas.addEventListener("click", function(e) {
if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
} else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
}
}, false);

function saveData() {
    localStorage.setItem("data", listaTarefas.innerHTML);
}

function tarefaShow() {
    listaTarefas.innerHTML = localStorage.getItem("data");
}

tarefaShow();