let campoIdade;

function setup() {
    createCanvas(400, 400);
    campoIdade = createInput("15");
  }
  
  function draw() {
    background(220);
    let idade = 15;
    let recomendacao = geraRecomendacao(idade)
    text(recomendacao, width/2, height/2);
  }

  function geraRecomendacao(idade){
    if (idade >= 10){
        if (idade >= 14){
            return "O menino que descobriu o vento";
        }
        else{
            return "As aventuras de Pi;"
        }
    }else {
        return "A viagem de Chihiro"
    }
  }