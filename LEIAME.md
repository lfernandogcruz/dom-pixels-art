<!--
## Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

---

## Boas vindas ao repositório do projeto Arte com Pixels!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Atenção a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto à partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de Entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
  - [Cypress](#cypress)
- [Requisitos do projeto](#requisitos-do-projeto)

    `Requisitos obrigatórios:`
    - [1 - Adicione à página o título "Paleta de Cores".](#1---adicione-à-página-o-título-paleta-de-cores)
    - [2 - Adicione à página uma paleta de quatro cores distintas.](#2---adicione-à-página-uma-paleta-de-quatro-cores-distintas)
    - [3 - Adicione na página a cor preta ela deve ser a primeira na paleta de cores.](#3---adicione-na-página-a-cor-preta-ela-deve-ser-a-primeira-na-paleta-de-cores)
    - [4 - Adicione à página um quadro de pixels, com 25 pixels.](#4---adicione-à-página-um-quadro-de-pixels-com-25-pixels)
    - [5 - Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel.](#5---aplique-a-cada-elemento-do-quadro-de-pixels-deve-possuir-40-pixels-de-largura-e-40-pixels-de-altura-e-ser-delimitado-por-uma-borda-preta-de-1-pixel)
    - [6 - Definia a cor preta como cor inicial. Ao carregar a página a cor preta já deve estar selecionada para pintar os pixels](#6---executar-o-carregamento-da-página-a-cor-preta-da-paleta-já-deve-estar-selecionada-para-pintar-os-pixels)
    - [7 - Selecione uma das cores da paleta, ao clicar, a cor selecionada é a que será utilizada para preencher os pixels no quadro.](#7---clicar-em-uma-das-cores-da-paleta-a-cor-selecionada-é-que-vai-ser-usada-para-preencher-os-pixels-no-quadro)
    - [8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta, faz com que o pixel seja preenchido com a cor selecionada.](#8---clicar-em-um-pixel-dentro-do-quadro-após-selecionar-uma-cor-na-paleta-o-pixel-deve-ser-preenchido-com-esta-cor)
    - [9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.](#9---crie-um-botão-que-ao-ser-clicado-limpa-o-quadro-preenchendo-a-cor-de-todos-seus-pixels-com-branco)

    `Requisitos bônus:`
    - [10 - Faça o quadro de pixels ter seu tamanho definido pelo usuário.](#10---faça-o-quadro-de-pixels-ter-seu-tamanho-definido-pelo-usuário)
    - [11 - Limite o tamanho do mínimo e máximo do board.](#11---limite-o-tamanho-do-mínimo-e-máximo-do-board)
    - [12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.](#12---faça-com-que-as-cores-da-paleta-sejam-geradas-aleatoriamente-ao-carregar-a-página)
- [Depois de terminar o desenvolvimento](#depois-de-terminar-o-desenvolvimento)
- [Revisando um pull request](#revisando-um-pull-request)
- [Compartilhe no LinkedIn](#compartilhe-no-linkedin)
- [Avisos Finais](#avisos-finais)

---

## Habilidades

- Manipular o DOM

- Manipular o Javascript

---

## O que deverá ser desenvolvido

- Você irá implementar uma página web que contém uma paleta de cores funcional que poderá ser utilizada para criar desenhos em pixels. Para isto você irá utilizar `javascript`, `css` e `html`.

---

## Desenvolvimento

- Implemente uma paleta de cores usando `javascript`, `css` e `html`.

---

## Data de Entrega

- Serão `3` dias de projeto.

- Data de entrega para avaliação final do projeto: `24/02/2022 14:00`.

---

## Instruções para entregar seu projeto:

### 🗒 ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-020-a-project-pixels-art.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-020-a-project-pixels-art`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b mariazinha-project-pixels-art`

4. Crie na raiz do projeto os arquivos que você precisará desenvolver:
  * Verifique que você está na raiz do projeto
    * Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/mariazinha/code/**sd-020-a-project-pixels-art**_
  * Crie os arquivos `index.html`, `style.css` e `script.js`
    * Exemplo: `touch index.html style.css script.js`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin mariazinha-project-pixels-art`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-020-a-project-pixels-art/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Adicione uma descrição para o _Pull Request_, um título que o identifique, e clique no botão verde _"Create pull request"_. Crie da seguinte forma: `[JOAOZINHO] Projeto Pixels Art`
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-020-a-project-pixels-art/pulls) e confira que o seu _Pull Request_ está criado

---

## Durante o desenvolvimento

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_

---

## Como desenvolver

- Este Pull Request deverá conter os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código HTML, CSS e JavaScript, respectivamente.

**⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️**

Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure o time de instrução.

---

### Dicas

- Não recomenda-se a utilização de `table`, pois o sentido semântico de construir uma tabela no HTML não tem relação  com a construção de uma grade de pixels para serem coloridos. Nesse caso, fazer uso de `table` representa uma má prática.

- [Que tal](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/) usar um _loop_ para adicionar o mesmo evento em vários elementos? [Ou então](https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/) a técnica de _event bubbling_ combinada com `classList`?

- Se precisar consultar os valores do _CSS_ de um elemento a partir do _JavaScript_, [dê uma olhada aqui](https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp).

- Para alterar alguma propriedade do _CSS_ de um elemento através do _JavaScript_, dê uma olhada no [atributo `style`](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp) do elemento.

- Para colocar sua página no [GitHub Pages](https://pages.github.com/), não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta `/projetos/pixels-art`.

---

### Linter

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

Quando é executado o comando `npm run lint:styles`, ele irá avaliar se os arquivos com a extensão `CSS` estão com o padrão correto.

Quando é executado o comando `npm run lint`, ele irá avaliar se os arquivos com a extensão `JS` e `JSX` estão com o padrão correto.

⚠ **NESTE PROJETO O STYLELINT e ESLINT NÃO SERÃO AVALIADOS. VOCÊ PODE RODAR OS TESTES LOCALMENTE E FAZER AS CORREÇÕES SE DESEJAR!** ⚠

---

### Cypress

Cypress é uma ferramenta de teste de front-end desenvolvida para a web.
Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute o um dos seguintes comandos:

Para executar os testes apenas no terminal:

```bash
npm test
```

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

***ou***

```bash
npx cypress open
```

Após executar um dos dois comandos acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js), ou para executar todos os testes clique em Run all specs

Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

**Para rodar o cypress é preciso ter rodado o comando npm install anteriormente.**

---

## Requisitos do projeto

**💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar todas as pessoas!**

![exemplo de arte com pixels](./art-with-pixels.gif)

**⚠️ Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_  e _classes_ que alguns elementos de seu projeto devem possuir**. Não troque `ids` por `classes` ou vice-versa ⚠️**

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

---

## 👀 Observações importantes:

* Lembrem-se que como pessoas desenvolvedoras devemos fazer pesquisas e garimpar resultados para auxiliar no entendimento do assunto. Assim, para solucionar os requisitos do projeto é inevitável e estimulado que pesquisas sejam feitas nas mais variadas fontes (course, vídeos do course, google, youtube, etc) sempre tomando cuidado para utilizar fontes "confiáveis" nas pesquisas da Internet, como por exemplo:

  * [Javascript.com](http://javascript.com/)

  * [W3Schools](https://www.w3schools.com/js/default.asp)

  * [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  * [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)

* Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

  * **⚠️ Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração da resolução.** ⚠️

* Caso for utilizar imagens nesse projeto, atente-se para o tamanho delas. **Não utilize imagens com um tamanho maior que _500Kb_.**

  * **⚠️ Utilize uma ferramenta [como esta](https://picresize.com/pt) para redimensionar as imagens. ⚠️**

  * Caso a avaliação falhe com alguma mensagem de erro parecida com `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304`, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensioná-las para um tamanho menor.

* Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**.

  * Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

  * Na página que se abrirá, procure pela linha _**"Cypress evaluator step"**_ e clique nela;

  * Analise os resultados a partir da mensagem _**"(Run Starting)"**_;

  * Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252) ou procure o time de instrução.

* Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**.

  * Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.

* Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. _Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos._

---

## Requisitos Obrigatórios:

Neste projeto, você implementará um editor de arte com pixels.

**Ou seja, dada uma paleta de cores e um quadro composto por pixels, você vai permitir que quem usa consiga pintar o que quiser no quadro!** 👩‍🎨

### 1 - Adicione à página o título "Paleta de Cores".

- O título deverá ficar dentro de uma tag `h1` com o `id` denominado `title`;

- O texto do título deve ser **exatamente** "Paleta de Cores".

**O que será verificado:**

- Verifica se contém um elemento `h1` com o id `title` com o título correto

### 2 - Adicione à página uma paleta contendo quatro cores distintas.

- A paleta de cores deve ser um elemento com `id` denominado `color-palette`, ao passo que cada cor individual contida na paleta de cores deve possuir a `classe` `color`;

- A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. **A única cor não permitida na paleta é a cor branca.**;

- Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;

- A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título "Paleta de Cores";

- A paleta de cores não deve conter cores repetidas.

**O que será verificado:**

- A paleta de cores deve ser um elemento com `id` denominado `color-palette`

- Verifica se cada cor individual da paleta de cores possui a `classe` chamada `color`.

- Verifica se a cor de fundo de cada elemento da paleta é a cor que o elemento representa. **A única cor não permitida na paleta é a cor branca.**

- Verifica se cada elemento da paleta de cores tem uma borda preta, sólida e com 1 pixel de largura;

- Verifica se a paleta lista todas as cores disponíveis para utilização, lado a lado.

- Verifica se a paleta de cores está posicionada abaixo do título \'Paleta de Cores\'

- Verifica se a paleta de cores não contém cores repetidas.

### 3 - Adicione a cor **preta** como a primeira cor da paleta de cores.

**O que será verificado:**

- Verifica se a primeira cor da paleta é preta

- Verifica se as demais cores podem ser escolhidas livremente.

### 4 - Adicione à página um quadro de pixels, com 25 pixels.

- O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

- O quadro de "pixels" deve possuir o `id` denominado `pixel-board`, ao passo que cada "pixel" individual dentro do quadro deve possuir a `classe` denominada `pixel`;

- A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;

-  O quadro de "pixels" deve aparecer abaixo da paleta de cores.

**O que será verificado:**

- Verifica se o quadro de pixels possui o `id` denominado `pixel-board`

- Verifica se cada pixel individual dentro do quadro possui a `classe` denominada `pixel`.

- Verifica se a cor inicial dos pixels dentro do quadro, ao abrir a página, é branca.

- Verifica se o quadro de pixels aparece abaixo da paleta de cores

### 5 - Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel.

**O que será verificado:**

- Verifica se o quadro de pixels tem altura e comprimento de 5 elementos

- Verifica se 40 pixels é o tamanho total do elemento, incluindo seu conteúdo e excluindo a borda preta, que deve ser criada à parte.

### 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels

- O elemento da cor preta deve possuir, inicialmente, a `classe` `selected`;

- Note que o elemento que deverá receber a classe `selected` deve ser um dos elementos que possuem a classe `color`, como especificado no **requisito 2**.

**O que será verificado:**

- Verifica se o elemento da cor preta possui, inicialmente, a `classe` `selected`

- Verifica se nenhuma outra cor da paleta tem a `classe` `selected`

### 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.

- A `classe` `selected` deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

- Somente uma das cores da paleta deve ter a `classe` `selected` de cada vez;

- Note que os elementos que deverão receber a classe `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

**O que será verificado:**

- Verifica se somente uma cor da paleta de cores tem a classe `selected` de cada vez

- Verifica se os pixels dentro do quadro não têm a classe `selected` quando são clicados

### 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

**O que será verificado:**

- Verifica se ao carregar a página deve ser possível pintar os pixels de preto

- Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor

- Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.

### 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

**O que será verificado:**

- Verifica se o botão tem o `id` denominado `clear-board`

- Verifica se o botão está posicionado entre a paleta de cores e o quadro de pixels

- Verifica se o texto do botão é \'Limpar\'

- Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco

## Requisitos Bônus:

### 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.

- Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de **N** pixels de largura e **N** pixels de altura, onde **N** é o número inserido no input;

 - Ou seja, se o valor passado para o input for 7, ao clicar no botão, vai ser gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);

- O input deve ter o `id` denominado `board-size` e o botão deve ter o `id` denominado `generate-board`;

- O input só deve aceitar número maiores que zero. Essa restrição **deve** ser feita usando os atributos do elemento `input`;

- O botão deve conter o texto "VQV";

- O input deve estar posicionado entre a paleta de cores e o quadro de pixels;

- O botão deve estar posicionado ao lado do input;

- Se nenhum valor for colocado no input ao clicar no botão, mostre um `alert` com o texto: "Board inválido!";

- O novo quadro deve ter todos os pixels preenchidos com a cor branca.

**O que será verificado:**

- Verifica se existe um input com o id `board-size`

- Verifica se existe um botão com o id `generate-board`

- Verifica se o input só aceita número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento `input`

- Verifica se o botão contém o texto \'VQV\'

- Verifica se o input está posicionado entre a paleta de cores e o quadro de pixels

- Verifica se o botão está posicionado ao lado do input

- Verifica se nenhum valor for colocado no input ao clicar no botão, um `alert` é exibido com o texto: \'Board inválido!\'

- Verifica se ao clicar no botão com um valor preenchido, o tamanho do board muda.

- Verifica se o novo quadro tem todos os pixels preenchidos com a cor branca

### 11 - Limite o tamanho mínimo e máximo do board.

- Caso o valor digitado no input `board-size` fuja do intervalo de 5 a 50, faça:

  - Valor menor que 5, considerar 5 como padrão;

  - Valor maior que 50, considerar 50 como padrão.

**O que será verificado:**

- Verifica se a altura máxima do board é 50

- Verifica se a altura do board é 5 quando um valor menor é colocado no input

- Verifica se a altura do board é 50 quando um valor maior é colocado no input

### 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.

- A cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.

**O que será verificado:**

- Verifica se as cores geradas na paleta são diferentes a cada carregamento da página

- Verifica se a cor preta ainda está presente e é a primeira na sua paleta de cores

---

## Depois de terminar o desenvolvimento

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-020-a`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

⚠ Lembre-se que garantir que todas as _issues_ comentadas pelo **Lint** estão resolvidas! ⚠

---

## Revisando um pull request

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests das outras pessoas estudantes. Atenção às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.

---

## Compartilhe no LinkedIn

Você sabia que o **LinkedIn** é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso?

Compartilhe esse projeto no seu **LinkedIn**, marque o perfil da Trybe (**@trybe**) e mostre para a sua rede toda a sua evolução.

---

## Avisos Finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

-->
