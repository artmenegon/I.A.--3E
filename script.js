const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você acha que a Inteligência Artificial pode ser prejudicial aos seres humanos?",
        alternativas:[{

             texto: "Sim",
             afirmação: "Não temos controle quanto a isso"
       },
       {
             texto: "Não",
             afirmação: "A utilidade e facilidade nos ajuda a evoluir"
       }    
        ]
    },
    {
        enunciado:"Você já assistiu o filme Eu, Robô?",
        alternativas:[ {

            texto: "Sim",
            afirmação: "Já assisti"
      },
      {
            texto: "Não",
            afirmação: "Nunca assisti"
      }    
       ]
    },
    {
        enunciado:"Você acha que o filme se encaixa na realidade?",
        alternativas:[ {

            texto: "Sim",
            afirmação: "Nosso mundo pode se transformar no caos visto"
      },
      {
            texto: "Não",
            afirmação: "É uma realidade muito distante e utópica"
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
