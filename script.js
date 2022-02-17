// criar os 'pixel'screen, iniciando com 5x5
let pixelMatrix = 5;

function generatePixels(pixelMatrix) {
  // criar qnt de divs com 'classe="pixel"' (pixelMatrix) vezes
  let pixelBoard = document.getElementById('pixel-board');

  // cria linhas (pixelMatrix) vezes
  for (let i = 1; i <= pixelMatrix; i += 1) {
    // cria (pixelMatrix) vezes o elemento com 'class="pixel"'
    for (let j = 1; j <= pixelMatrix; j += 1) {
      let elementPixel = document.createElement('div');
      elementPixel.className = 'pixel';
      pixelBoard.appendChild(elementPixel);
    } // fecha for colunas
    let lineBreak = document.createElement('br');
    pixelBoard.appendChild(lineBreak);
  } // fecha for linhas
} // fecha function

generatePixels(pixelMatrix);

// seletor de cor
// ao clicar numa cor
let elementSelected = document.querySelector('#color-palette');
function addClassSelected(event) {
  let elementoSelectedColor = document.querySelector('.selected');
    elementoSelectedColor.classList.remove('selected');
    event.target.classList.add('selected');
}
elementSelected.addEventListener('click', addClassSelected);
// .
// .
// referencia para atribuicao de classe ao elemento criado no link:
// https://www.horadecodar.com.br/2020/07/12/como-mudar-a-classe-de-um-elemento-com-javascript/
// .
// .
// ref para o uso do classList.toggle() neste link:
// https://medium.com/@erycd/como-adicionar-e-remover-classes-de-elementos-html-com-vanilla-js-7b6527b7aa2f