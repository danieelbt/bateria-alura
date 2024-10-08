//Seleciona todos os elementos com a classe 'tecla'
let teclas = document.querySelectorAll('.tecla');
let listaTeclas = Array.from(teclas);

//Seleciona todos os elementos com a classe 'sons_teclas' 
let somTeclas = document.getElementsByClassName('sons_teclas');
let listaSomTeclas = Array.from(somTeclas);

/*Executa um forEach na array 'listaTeclas' pegando a tecla e o índice dela
E chama a função 'reproduzirSom' passando o índice como parâmetro*/
listaTeclas.forEach((tecla, indice) => {
    tecla.addEventListener('click', () => {
        Exibir(indice);
    })
});

function Exibir(indiceSomTecla) {
    listaSomTeclas[indiceSomTecla].play(); //Reproduz o som da tecla com o
}