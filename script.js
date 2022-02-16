// criar os 'pixel'screen, iniciando com 5x5
let pixelMatrix = 5;

function generatePixels(pixelMatrix) {
  // criar qnt de divs com 'classe="pixel"' (pixelMatrix) vezes
  let pixelBoard = document.getElementById('pixel-board');
  
  // cria linhas (pixelMatrix) vezes
  for (let i = 1; i <= pixelMatrix; i +=1) {
    // cria (pixelMatrix) vezes o elemento com 'class="pixel"'
    for (let j = 1; j <= pixelMatrix; j +=1) {
      let elementPixel = document.createElement('div');
      elementPixel.className = 'pixel';
      elementPixel.addEventListener("click",changeColor);
      pixelBoard.appendChild(elementPixel);
      // referencia para atribuicao de classe ao elemento criado no link:
      // https://www.horadecodar.com.br/2020/07/12/como-mudar-a-classe-de-um-elemento-com-javascript/
    } // fecha for colunas
    let lineBreak = document.createElement('br');
    pixelBoard.appendChild(lineBreak);
  } // fecha for linhas
} // fecha function

generatePixels(pixelMatrix);

// seletor de cor
let colorTargets = document.getElementsByClassName('color');
for (let i = 0; i<colorTargets.length; i+=1) {
  colorTargets[i].addEventListener("click", colorSelector);
}

let selectedColor = 'black'; // default

function colorSelector (event) {
  
  // ao clicar numa cor

  // guarda a cor selecionada
  let elementReadColor = document.getElementById(''); // nao é por id
  let newSelectedColor = elementReadColor.style.backgroundColor;


  // remove a classe 'selected' da cor onde estava
  let elementRemoveClass = document.getElementById(selectedColor);
  elementRemoveClass.classList.toggle('selected');
  // adiciona classe 'selected' na cor clicada
  let elementAddClass = document.getElementById(newSelectedColor);
  elementAddClass.classList.toggle('selected');
  
} // fecha function
// ref para o uso do classList.toggle() neste link:
// https://medium.com/@erycd/como-adicionar-e-remover-classes-de-elementos-html-com-vanilla-js-7b6527b7aa2f

  // altera a cor do 'pixel' clicado
function changeColor(event) {
   // elementoClicado.style.background-color = selectedColor;
}


// pausa pra dormir