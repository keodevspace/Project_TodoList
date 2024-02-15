
// Dentre as funcionalidades, espera-se que seja possível:
// - Adicionar uma tarefa
// - Editar uma tarefa salva
// - Remover uma tarefa salva
// - Listar todas as tarefas salvas
// - Obter uma tarefa, através de um parâmetro (id)

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const list = document.getElementById('task-list');




let formulario = document.querySelector('form');
let tituloDaTarefa = document.getElementById('task-title');
let detalhesDaTarefa = document.getElementById('task-details');
let botaoGuardar = document.getElementById('btn-store');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if (tituloDaTarefa === "" || detalhesDaTarefa === "") {
        alert('Por favor, preencher todos os campos.');
        return;
    } 
    
    console.log(botaoGuardar);
    
});

});