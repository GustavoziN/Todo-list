//get value
let valor = document.querySelector('input');
let verValor = document.querySelector('button').addEventListener('click', Valores);

function Valores() {
    let resultado = valor.value
    if(resultado === "") return alert('digite um valor antes');
    if(resultado != "") {
        valor.value = ""

//create element div
        let criarTarefas = ()=> {
            let criar = document.createElement('div')
            criar.innerHTML = `<div class="conteudo">${resultado}
            <input class="marcador" type="checkbox">
            </div>`
            return criar;
        }

        let conteudo = document.querySelector('#list');
        conteudo.appendChild(criarTarefas())
    }

}




