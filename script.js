
// Navegação dos botões do topo (Produtos, Loja, Entrar, Criar conta e Carrinho)
document.querySelectorAll('[data-href]').forEach((elemento) => {
  elemento.addEventListener('click', () => {
    window.location.href = elemento.dataset.href;
  });
});

const botoesCategoria = document.querySelectorAll('.categoria');

botoesCategoria.forEach((botao) => {
  botao.addEventListener('click', () => {
    botoesCategoria.forEach((b) => b.classList.remove('ativa'));
    botao.classList.add('ativa');
  });
});

const botaoCarrinho = document.getElementById('botao-carrinho');
const badgeCarrinho = document.getElementById('badge-carrinho');
let totalCarrinho = 0;

function animaClasse(elemento, classe) {
  elemento.classList.remove(classe);
  void elemento.offsetWidth; // reinicia a animação
  elemento.classList.add(classe);
}

document.querySelectorAll('.slot-produto').forEach((slot) => {
  slot.addEventListener('click', () => {
    totalCarrinho++;
    badgeCarrinho.textContent = totalCarrinho;
    animaClasse(badgeCarrinho, 'pulo');
    animaClasse(botaoCarrinho, 'pulo');
  });
});
