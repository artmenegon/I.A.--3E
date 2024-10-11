const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');          
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta de músicas?",
        alternativas:[{

             texto: "Sim, sou fã",
             afirmação: "Viver é bom demais"
       },
       {
             texto: "Não, odeio",
             afirmação: "Minha vida consiste em um vazio imensurável e eu não sei o que é bom de verdade"
       }    
        ]
    },
    {
        enunciado:"Você gosta de sair?",
        alternativas:[ {

            texto: "Sim, sextou",
            afirmação: "Tenho falsos amigos e disfarço a minha solidão saindo, mas até que estou feliz"
      },
      {
            texto: "Não, odeio todos",
            afirmação: "Não tenho falsos amigos e na realidade nem tenho amigos, a solidão aflora o meu peito"
      }    
       ]
    },
    {
        enunciado:"Você já assistiu a trilogia Senhor dos Anéis?",
        alternativas:[ {

            texto: "Sim, já assisti",
            afirmação: "Trilogia bacana"
      },
      {
            texto: "Não, nunca assisti",
            afirmação: "Só não assisti mesmo, mas lá ele (Senhor dos Anéis? Vixi)"
      }    
       ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = ""
}
mostraPergunta();
