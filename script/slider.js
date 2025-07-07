/* document.addEventListener("DOMContentLoaded", function () {
    let div = document.getElementById("slide");
    let classes = ["slide1", "slide2", "slide3"];
    let indice = 0;
  
    setInterval(() => {
      div.classList.remove(...classes);
      div.classList.add(classes[indice]);
  
      indice = (indice + 1) % classes.length;
    }, 10000);
});   */

function playVideo () {
  document.querySelector('.box-start-video').style.display = 'flex';
}

function exitVideo () {
  document.querySelector('.box-start-video').style.display = 'none';
}


//Eventos

let eventos = document.querySelectorAll('.cards-eventos');
let eventoAtual = 0;

function mostrarEvento(idx) {
    eventos.forEach((el, i) => {
        el.classList.toggle('destaque-evento', i === idx);
    });
}

function mudarEvento(direcao) {
    eventos = document.querySelectorAll('.cards-eventos');
    eventoAtual += direcao;
    if (eventoAtual < 0) eventoAtual = eventos.length - 1;
    if (eventoAtual >= eventos.length) eventoAtual = 0;
    mostrarEvento(eventoAtual);
}

// Inicializa destaque
mostrarEvento(eventoAtual);

// Inicializa destaque
mostrarRelatorio(atual);