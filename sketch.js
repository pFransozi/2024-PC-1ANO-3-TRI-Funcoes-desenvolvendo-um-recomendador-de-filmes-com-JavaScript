let campoIdade;
let campoFantasia;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade: ");
  campoIdade = createInput("15");
  campoFantasia = createCheckbox("Gosta de Fantasia?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38)
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    }
    else {
      if (gostaDeFantasia) {
        return "As aventuras de Pi";
      } else {
        return "Depois da chuva";
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de Chihiro";
    } else {
      return "O feitiço do tempo";
    }
  }
}