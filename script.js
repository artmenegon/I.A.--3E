const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você acha que a Inteligência Artificial pode ser prejudicial aos seres humanos?",
        alternativas:[ "Sim","Não"]
    },
    {
        enunciado:"Você já assistiu o filme Eu, Robô?",
        alternativas:[ "Sim","Não"]
    },
    {
        enunciado:"Você acha que o filme e encaixa na realidade?",
        alternativas:[ "Sim","Não"]
    }
]
let posicao = 0
let perguntaAtual;  

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);    

    }
}
mostraPergunta();