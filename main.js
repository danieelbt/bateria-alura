//Armazenando em variáveis os campos da tecla e do audio dele para cada botão
let teclaPom = document.querySelector('.tecla_pom');
let somTeclaPom = document.querySelector('#som_tecla_pom');
let teclaClap = document.querySelector('.tecla_clap');
let somTeclaClap = document.querySelector('#som_tecla_clap');
let teclaTim = document.querySelector('.tecla_tim');
let somTeclaTim = document.querySelector('#som_tecla_tim');
let teclaPuff = document.querySelector('.tecla_puff');
let somTeclaPuff = document.querySelector('#som_tecla_puff');
let teclaSplash = document.querySelector('.tecla_splash');
let somTeclaSplash = document.querySelector('#som_tecla_splash');
let teclaToim = document.querySelector('.tecla_toim');
let somTeclaToim = document.querySelector('#som_tecla_toim');
let teclaPsh = document.querySelector('.tecla_psh');
let somTeclaPsh = document.querySelector('#som_tecla_psh');
let teclaTic = document.querySelector('.tecla_tic');
let somTeclaTic = document.querySelector('#som_tecla_tic');
let teclaTom = document.querySelector('.tecla_tom');
let somTeclaTom = document.querySelector('#som_tecla_tom');

//Adicionando a execução da função reproduzirSom para cada uma das teclas
teclaPom.addEventListener('click', function() {
    reproduzirSom(somTeclaPom);
});

teclaClap.addEventListener('click', function() {
    reproduzirSom(somTeclaClap);
});

teclaTim.addEventListener('click', function() {
    reproduzirSom(somTeclaTim);
});

teclaPuff.addEventListener('click', function() {
    reproduzirSom(somTeclaPuff);
});

teclaSplash.addEventListener('click', function() {
    reproduzirSom(somTeclaSplash);
});

teclaToim.addEventListener('click', function() {
    reproduzirSom(somTeclaToim);
});

teclaPsh.addEventListener('click', function() {
    reproduzirSom(somTeclaPsh);
});

teclaTic.addEventListener('click', function() {
    reproduzirSom(somTeclaTic);
});

teclaTom.addEventListener('click', function() {
    reproduzirSom(somTeclaTom);
});

//Função para reproduzir som ao clicar na tecla. Recebe como parâmetro a variável contendo o seu som respectivo
function reproduzirSom(somDaTecla) {
    somDaTecla.play();
}