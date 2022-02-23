// criar os 'pixel'screen, iniciando com 5x5
let pixelMatrix = 5;
function generatePixels(pixelMatrix) {
  // criar qnt de divs com 'classe="pixel"' (pixelMatrix) vezes
  let pixelBoard = document.getElementById('pixel-board');
  // cria linhas (pixelMatrix) vezes
  for (let i = 1; i <= pixelMatrix; i += 1) {
    for (let j = 1; j <= pixelMatrix; j += 1) {
      let elementPixel = document.createElement('div');
      elementPixel.className = 'pixel';
      elementPixel.addEventListener('click', changeBgColor);
      pixelBoard.appendChild(elementPixel);
    }
    let lineBreak = document.createElement('br');
    pixelBoard.appendChild(lineBreak);
  }
}
generatePixels(pixelMatrix);

// seletor de cor
// ao clicar numa cor add .selected
let elementSelected = document.querySelector('#color-palette');
function addClassSelected(event) {
  let elementoSelectedColor = document.querySelector('.selected');
  elementoSelectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}
elementSelected.addEventListener('click', addClassSelected);

// captura bg color de .selected
// altera o bg color do el .pixel
function changeBgColor(event) {
  let elementBrushColor = document.querySelector('.selected');
  let brushColor = elementBrushColor.classList[1];
  console.log(brushColor);
  event.target.style.backgroundColor = brushColor;
}

let clearBtn = document.getElementById('clear-board');
clearBtn.addEventListener('click', function (){
  let elementoPixel = document.querySelectorAll('.pixel');
  for (let k = 0; k < elementoPixel.length; k += 1) {
    elementoPixel[k].style.backgroundColor = 'white';
  };
});
// .
// .
// referencia para atribuicao de classe ao elemento criado no link:
// https://www.horadecodar.com.br/2020/07/12/como-mudar-a-classe-de-um-elemento-com-javascript/
// .
// .
// ref para o uso do classList.toggle() neste link:
// https://medium.com/@erycd/como-adicionar-e-remover-classes-de-elementos-html-com-vanilla-js-7b6527b7aa2f