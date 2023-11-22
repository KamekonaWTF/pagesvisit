const contadorVisitas = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer');

let contador = localStorage.getItem('contadorVisitas')
contador++ 
contadorVisitas.textContent = contador

function changeItem() {
    localStorage.setItem('contadorVisitas',contador)
}

changeItem()

btnReestablecer.addEventListener('click', () => {
    contador = 0
    contadorVisitas.innerHTML = contador
    changeItem()
})
