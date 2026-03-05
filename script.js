const barraTarefas = document.querySelectorAll('.barraTarefas');

window.addEventListener('load', () => {
    barraTarefas.forEach((barra, index) => {
        setTimeout(() => {
            barra.classList.add('aparecer');
        }, index * 200);
    });
});