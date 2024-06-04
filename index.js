const button = document.querySelector('.add-task-button');
const input = document.querySelector('.input-task');
const listTask = document.querySelector('.list-task');

let miList = [];

function adicionarTarefa() {
    miList.push({
        tarefa: input.value,
        concluida: false
    });

    mostrarTarefa();
}

function mostrarTarefa() {
    let novaLi = '';

    miList.forEach((item, index) => {
        // if(item.tarefa === '') return alert('oi');

        novaLi = novaLi + `
            <li class="task ${item.concluida && "done"}">
            <img src="img/checked2.png" alt="checked" onclick="tarefaConcluida(${index})">
            <p>${item.tarefa}</p>
            <img src="img/trash.png" alt="delete-task" onclick="deletarItem(${index})">
            </li>        
        `;
    })

    input.value = '';
    listTask.innerHTML = novaLi;

    localStorage.setItem('lista', JSON.stringify(miList));
}

function deletarItem(posicao) {
    miList.splice(posicao, 1);
    mostrarTarefa();
}

function tarefaConcluida(posicao) {
    miList[posicao].concluida = !miList[posicao].concluida;
    mostrarTarefa();
}

function recarregarTarefa() {
    const tarefasDoLocalStorage = localStorage.getItem('lista');
    if(tarefasDoLocalStorage) {
        miList = JSON.parse(tarefasDoLocalStorage);
    }

    mostrarTarefa();
}

recarregarTarefa();
button.addEventListener('click', adicionarTarefa);