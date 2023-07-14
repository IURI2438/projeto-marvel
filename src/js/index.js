const personagens = document.querySelectorAll('.personagem');
const imagemJogador1 = document.getElementById('personagem-jogador-1');
const nomeJogador1 = document.getElementById('nome-jogador-1');
let personagemSelecionado = null;

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    if (personagemSelecionado !== null) {
      personagemSelecionado.classList.remove('selecionado');
    }

    personagem.classList.add('selecionado');
    personagemSelecionado = personagem;

    const idSelecionado = personagem.getAttribute('id');
    const nomeSelecionado = personagem.getAttribute('data-name');

    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
    nomeJogador1.innerHTML = nomeSelecionado;
  });
});
