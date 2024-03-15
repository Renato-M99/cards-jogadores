/*
 var nomes = ['jogador1', 'jogador2', 'jogador3'];
// array/vetor em js, var nomedavariavel [valores]
    nomes [1];

console.log(nomes[0]); */


/*
    chaves { } para delimitar os objetos e obrigatórias para iniciar e encerrar o conteúdo
    colchetes [] para indicar um array;
    dois pontos: para separar a chave e seu valor correspondente
    vírgula , para indicar a separação entre os elementos.
 */

console.log('Card do Brasil');

/* Guarda o elemento com a class cards dentro da varíavel cards */
let cards = document.querySelector('.cards');

/* Lê e carrega as informações de algum lugar, neste caso é um arquivo JSON.
Quado o fetch carrega informações de um JSON as informações são convertidas em String(texto). */
fetch('jogadores-brasil.json')
/* recebe as informações vindas de outra função ou método, nesse caso seria fetch.
Nesse caso, o then deverá receber os valores em uma variável */
.then(resposta => resposta.json())
.then(dados => dados.forEach((jogador) => {
    console.log(jogador.nome);
    console.log(jogador.posicao);
    // criar um card padrão
    let card = document.createElement('div');
    // classList.add = adiciona uma classe a um elemento HTML
    card.classList.add('card');
    console.log(card);

    // colocar cada card dentro da div cards
    cards.appendChild(card); 

    /* Preencher os dados de cada jogador */
    card.innerHTML=`
    <span class ="posicaoP">${jogador.posicao}</span>
    <span class="posicaoG">${jogador.posicao}</span>
    <img class ="escudo" src ="images/escudos/${jogador.escudo}.png" alt=""/>
    <img class ="jogador" src="images/jogadores/${jogador.foto}.png" alt ""/>
    <h3 class = "nomeJogador">${jogador.nome}</h3>
    <h4 class = "numero">${jogador.numero}</h4>`
})
)




