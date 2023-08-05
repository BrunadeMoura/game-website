function preload() {
  ImagemCenario = 
    loadImage('imagens/cenario/floresta.png');
  ImagemGameOver = 
    loadImage('imagens/assets/game-over.png');
  ImagemPersonagem = 
    loadImage('imagens/personagem/correndo.png');
  ImagemInimigo = 
    loadImage('imagens/inimigos/gotinha.png');
  ImagemTroll = 
    loadImage('imagens/inimigos/troll.png');
  ImagemGotinhaVoadora = 
    loadImage('imagens/inimigos/gotinha-voadora.png');
  ImagemTelaInicial = 
    loadImage('imagens/assets/telaInicial.png');
  ImagemVida = 
    loadImage('imagens/assets/coracao.png');
  
  fonteTelaInicial = 
    loadFont('imagens/assets/fonteTelaInicial.otf');
  
  fita =
    loadJSON('fita/fita.json');
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
}