let suaidade;
let indierock;
let hardrock;
let progrock;
let titulo;
let corpo;
let jogos = {
  menor10:{
  hardrock: "Nirvana",
  indierock: "Kiss",
  progrock: "The Beatles"
  },
  entre10e14:{
  hardrock: "Slowdive",
  indierock: "Iron Maiden",
  progrock: "Mac DeMarco"
  },
  entre14e16:{
  hardrock: "Alex G",
  indierock: "Metallica",
  progrock: "Yes"
  },
  entre16e18:{
  hardrock: "Megadeth",
  indierock: "Radiohead",
  progrock: "King Crimson"
  },
  maior18: {
  hardrock: "Black Sabbath",
  indierock: "The Smiths",
  progrock: "Pink Floyd"
  }
};

let button;

function setup() {
  createCanvas(850, 400).position(100,100)
  createSpan("Qual sua idade?").position(600,530).addClass("hidden");
  suaidade = createInput("").position(630,560).addClass("hidden");
  indierock = createCheckbox("Gosta de Indie Rock?").position(100,600).addClass("hidden");
  hardrock = createCheckbox("Gosta de Hard Rock?").position(100,650).addClass("hidden");
  progrock = createCheckbox("Gosta de Progressive Rock?     ").position(100,700).addClass("hidden");
 titulo = "New Amsterdam"
  button = createButton("JA ESTÃO INDECENTES?").position(width/2,520);
  button.mousePressed(bota)
  button.addClass("botao")
}

function bota(){
  selectAll(".hidden").forEach((el) => 
el.removeClass("hidden"));
    button.hide();                                            
}

function draw() {
  background("white");
  fill("black")
  textAlign(CENTER,CENTER)
  textSize(60)
  stroke("rgb(0,0,0)",)
  text("QUAL BANDA ACENDE EM VOCÊ?", 400, 40)
  textFont(titulo)
  
  
  let idade = parseInt(suaidade.value());
  let checkindie = indierock.checked();
  let checkhard = hardrock.checked();
  let checkprog = progrock.checked();
  let jogo = "Insira seu gosto 🤘";
  if (suaidade.value( ) !== ""){
    jogo = mostrajogo(idade, checkindie, checkhard, checkprog);
  }
  fill("black")
  textAlign(CENTER, CENTER)
  textSize(40)
  text(jogo,400, 200 )
  textFont(titulo)
  
}

function mostrajogo(idade, checkindie, checkhard, checkprog){
  if (isNaN(idade)){
    return "Idade Inválida 🤓";
  }else
    if (idade < 5){
      return "vai escutar mundo bita "
    } else
      if (idade > 120){
        return "prepara caixão já"
      }
  if (idade >= 5 && idade <10){
    if(checkindie){
      return jogos["menor10"]["hardrock"]
    }
    if(checkhard){
      return jogos["menor10"]["indierock"]
    }
    if(checkprog){
      return jogos["menor10"]["progrock"]
    }
  }
  else if (idade >= 10 && idade <14){
    if(checkindie){
      return jogos["entre10e14"]["hardrock"]
    }
    if(checkhard){
      return jogos["entre10e14"]["indierock"]
    }
    if(checkprog){
      return jogos["entre10e14"]["progrock"]
    }
  }
 
  else if (idade >= 14 && idade <16){
    if(checkindie){
      return jogos["entre14e16"]["hardrock"]
    }
    if(checkhard){
      return jogos["entre14e16"]["indierock"]
    }
    if(checkprog){
      return jogos["entre14e16"]["progrock"]
    }
  }
   else if (idade >= 18){
    if(checkindie){
      return jogos["maior18"]["hardrock"]
    }
    if(checkhard){
      return jogos["maior18"]["indierock"]
    }
    if(checkprog){
      return jogos["maior18"]["progrock"]
    }
  }  else return "escolhe logo"
}
