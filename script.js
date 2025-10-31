/*CARROSSEL */
let counter = 1;
setInterval(() => {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) counter = 1;
}, 4000);

/*DADOS*/
function animarContadores() {
  const contadores = document.querySelectorAll('.contador');
  const velocidade = 100; // menor = mais rápido

  contadores.forEach(contador => {
    const valorFinal = +contador.getAttribute('data-numero');
    const incremento = Math.ceil(valorFinal / velocidade);
    let valorAtual = 0;

    const atualizar = () => {
      valorAtual += incremento;
      if (valorAtual >= valorFinal) {
        contador.textContent = valorFinal.toLocaleString('pt-BR');
      } else {
        contador.textContent = valorAtual.toLocaleString('pt-BR');
        requestAnimationFrame(atualizar);
      }
    };

    atualizar();
  });
}

const section = document.getElementById('dados');
let jaAnimou = false;

window.addEventListener('scroll', () => {
  const posicao = section.getBoundingClientRect().top;
  const alturaTela = window.innerHeight;

  if (posicao < alturaTela * 0.8 && !jaAnimou) {
    section.classList.add('ativo');
    animarContadores();
    jaAnimou = true;
  }
});

