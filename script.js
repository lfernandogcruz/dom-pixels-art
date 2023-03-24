const vqvBtn = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');

// seletor de cor
// ao clicar numa cor add .selected
const elementSelected = document.querySelector('#color-palette');
function addClassSelected(event) {
  const elementoSelectedColor = document.querySelector('.selected');
  elementoSelectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}
elementSelected.addEventListener('click', addClassSelected);

// captura bg color de .selected
// altera o bg color do el .pixel
function changeBgColor(event) {
  const elementBrushColor = document.querySelector('.selected');
  const brushColor = elementBrushColor.classList[1];
  const { target } = event;
  const { style } = target;
  style.backgroundColor = brushColor;
}

const clearBtn = document.getElementById('clear-board');
clearBtn.addEventListener('click', () => {
  const elementoPixel = document.querySelectorAll('.pixel');
  for (let k = 0; k < elementoPixel.length; k += 1) {
    elementoPixel[k].style.backgroundColor = 'white';
  }
});

function generatePixels(pixelMatrix) {
  // criar qnt de divs com 'classe="pixel"' (pixelMatrix) vezes
  const pixelBoard = document.getElementById('pixel-board');
  // cria linhas (pixelMatrix) vezes
  for (let i = 1; i <= pixelMatrix; i += 1) {
    for (let j = 1; j <= pixelMatrix; j += 1) {
      const elementPixel = document.createElement('div');
      elementPixel.className = 'pixel';
      elementPixel.addEventListener('click', changeBgColor);
      pixelBoard.appendChild(elementPixel);
    }
    const lineBreak = document.createElement('br');
    pixelBoard.appendChild(lineBreak);
  }
}

vqvBtn.addEventListener('click', () => {
  const elementoPxBoard = document.getElementById('pixel-board');
  let pixelMatrix = 5;
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else if (boardSize.value <= 5) {
    pixelMatrix = 5;
    elementoPxBoard.innerHTML = '';
    generatePixels(pixelMatrix);
  } else if (boardSize.value >= 50) {
    pixelMatrix = 50;
    elementoPxBoard.innerHTML = '';
    generatePixels(pixelMatrix);
  } else {
    pixelMatrix = boardSize.value;
    elementoPxBoard.innerHTML = '';
    generatePixels(pixelMatrix);
  }
});

// criar os 'pixel'screen, iniciando com 5x5
window.onload = () => generatePixels(5);

// .
// .
// referencia para atribuicao de classe ao elemento criado no link:
// https://www.horadecodar.com.br/2020/07/12/como-mudar-a-classe-de-um-elemento-com-javascript/
// .
// .
// ref para o uso do classList.toggle() neste link:
// https://medium.com/@erycd/como-adicionar-e-remover-classes-de-elementos-html-com-vanilla-js-7b6527b7aa2f
