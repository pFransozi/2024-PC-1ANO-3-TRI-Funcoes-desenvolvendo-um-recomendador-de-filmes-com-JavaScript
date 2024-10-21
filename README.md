# Funções: Desenvolvendo um recomendador de filmes com JavaScript

## Introdução

Projeto realizado junto ao 1 ano do EM na disciplina de Pensamento Computacional baseado no curso "Funções: Desenvolvendo um recomendador de filmes com JavaScript" da Alura.

## Rúbricas

* **Aula 01**:
  * Listar seus filmes favoritos em código. Escrever uma lista de filmes favoritos no arquivo sketch.js, usando comentários (//) para não interferir no código funcional;
  * Categorizar filmes por classificação indicativa buscando a classificação indicativa dos filmes em sites como o Filmow e adicionando essa informação aos seus comentários, ajudando a categorizar os filmes por idade apropriada;
  * Enriquecer a lista com gêneros de filmes, além da classificação indicativa, você adicionou o gênero de cada filme à sua lista, o que ajuda a dar uma visão mais completa sobre cada título
  * Utilizar recursos online para pesquisa utilizando o site Filmow para encontrar informações detalhadas sobre seus filmes favoritos, coletando dados e informações sobre seus filmes favoritos.
* **Aula 02**:
  * Estruturar um fluxograma para sugerir filmes, utilizando perguntas que direcionam o usuário para uma recomendação baseada na sua idade e preferências;
  * Usar condicionais para recomendações, aplicando condições relacionadas à idade do espectador para filtrar as recomendações de filmes, como "se idade for maior ou igual a 10", e como isso influencia a escolha final do filme;
  * Traduzir lógica em diagramas representando visualmente a lógica de decisão em um fluxograma, facilitando a compreensão do processo de tomada de decisão.
* **Aula 03**:
  * Criar uma função separada (`geraRecomendacao`) que permite a fácil expansão do sistema de recomendação, demonstrando a importância de funções na organização do código;
  * Aplicar a lógica condicional para recomendar filmes com base na idade do usuário;
  * Criar um campo de entrada de texto na interface do usuário, permitindo a interação direta com o programa;
  * Desenvolver parte do nosso fluxograma para recomendar diferentes filmes para diferentes faixas etárias.
* **Aula 04**
  * Utilizar dados do `checkbox` ao integrar uma caixa de seleção (`checkbox`) para entender se a pessoa gosta ou não de fantasia. Com isso, aprendemos a manejar entradas de sim (`checkbox` marcado) ou não (`checkbox` não marcado) no código;
  * Utilizar elementos de interface gráfica com a criação de uma caixa de seleção para interação do usuário demonstrou como adicionar e utilizar elementos de interface gráfica no p5.js;
  * Conectar elementos de interface com lógica de programação, como a idade e o interesse por fantasia, com a lógica de programação para gerar recomendações de filmes;
  * Expandir a função geraRecomendacao para cobrir mais idades e preferências, tornando o recomendador mais parecido com o que planejamos.
* **Aula 05**
  * Aprimorar a lógica do recomendador refinando a função `geraRecomendacao` para analisar a idade e a preferência por gêneros de filmes, fornecendo recomendações personalizadas;
  * Melhorar a apresentação do resultado, utilizando as funções do P5.js como `textAlign()` e `textSize()` para centralizar e aumentar o tamanho do texto de recomendação;
  * Tornar a interface mais intuitiva adicionando etiquetas aos campos de entrada usando `createSpan()`, melhorando a clareza e a usabilidade do recomendador.
* **Aula 06**
  * Estilizar a página com CSS, ajustando a margem da página para criar espaço entre os elementos e as bordas da tela, e alterou a cor de fundo para um azul claro;
  * Adicionar elementos com JavaScript como títulos, caixas de texto e checkboxes, e como isso contribui para a interatividade e funcionalidade do recomendador.


## Para Saber Mais

* **Aula 03**
  * Variáveis Local e Global:
    ```js
      let variavelGlobal = "Eu sou global";

      function setup() {
        createCanvas(400, 400);
      }

      function draw() {
        background(220);
        text(variavelGlobal, 10, 30);
        exemploLocal();
      }

      function exemploLocal() {
        let variavelLocal = "Eu sou local";
        text(variavelLocal, 10, 50);
      }
    ```
    * Variável global:
      * Fora de todas as funções;
      * Foi criada normalmente nas primeiras linhas do código;
      * Com isso, podemos utilizá-la em qualquer função, seja a `setup`, `draw` ou `exemploLocal`
    * Variável local:
      * Está dentro de uma função específica;
      * É executada somente dentro da função na qual foi criada;

## Links