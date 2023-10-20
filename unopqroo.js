const rl = require("readline-sync");
// juego uno 
var  deck = [];
var Colors = ["Yellow","Blue", "Green","Red"];
var type = ["Comun","Especial","Comodin"];
var card = {
    color: null, // el color puede ser amarillo, azul, verde y rojo
    number: null,  // del 0 al 9
    type: null // comun, especial y comodin
};

for (var cColor = 0; cColor < Colors.length; cColor++ ){
    for (var cNumber= 0; cNumber < 10; cNumber++){
        deck.push({Color: Colors[cColor], Number: cNumber, type:"comun"});
    }
    for (var cNumber1= 1; cNumber1 < 10; cNumber1++){
        deck.push({Color: Colors[cColor], Number1: cNumber1, type:"comun"});
    }

deck.push({color: Colors [cColor],number:"+2", type:"especial"});
deck.push({color: Colors [cColor],number:"+2", type:"especial"});
deck.push({color: Colors [cColor],number:"B", type:"especial"});
deck.push({color: Colors [cColor],number:"B", type:"especial"});
deck.push({color: Colors [cColor],number:"R", type:"especial"});
deck.push({color: Colors [cColor],number:"R", type:"especial"});
}
deck.push({color: null,number:"+4", type:"Comodin"});
deck.push({color: null,number:"+4", type:"Comodin"});
deck.push({color: null,number:"+4", type:"Comodin"});
deck.push({color: null,number:"+4", type:"Comodin"});
deck.push({color: null,number:"CC", type:"Comodin"});
deck.push({color: null,number:"CC", type:"Comodin"});
deck.push({color: null,number:"CC", type:"Comodin"});
deck.push({color: null,number:"CC", type:"Comodin"});

//console.log(JSON.stringify(deck));

const players = rl.question("cuantos jugadores seran?",{})
const totalCards = players * 7;
//repartir 7 cartas por jugador 
// recorro al total de tarjetas (total de tarjetas por jugador = tarjetas/7 * jugador)
//arreglo por cada jugador 
var cardsPlayers ={};

for(var cTCards = 0; cTCards < 7; cTCards++){
    for(var cPlayers = 0; cPlayers < players;cPlayers++){
        if(!cardsPlayers["player"+cPlayers]){
        cardsPlayers["player"+cPlayers] = [];
        }
      // console.log("players:", cPlayers);
        cardsPlayers["player"+cPlayers].push(deck.shift());
       //console.log(cardsPlayers)
    }
}
//console.log(cardsPlayers)
// npm i  <modulo>  o npm install <modulo> sirve para iniziaclizar un proyecto de node
// la mesa es el arreglo
var trash = [];

trash.push(deck.shift());

function cardValidation(card) {
    // Obtener la primera carta de trash
   console.log(card.number)
    // if (card.numeber == 2) llamar a numero y carta 
    if (card.number == trash[trash.length -1].number || card.color == trash[trash.length -1].color) { 
        console.log("es igual");
    } else {console.log("no es igual")}
}

//for(const player in cardsPlayers) {
    //console.log(cardsPlayers[player])
    // Primer player ponga una carta
    // PASO 1: ver mis cartas
    // PASO 2: Elegir cartas
    // PASO 3 Validar Carta
    // PASO 4 :Poner carta ( demano jugador trash)

    // Modulo/Funcionalidad " camodin +4"
//}
function plusFour(card) {
    const nextPlayer = (cPlayers + 1) % players;
    if(card.number == "+4", card.type == "comodin"){
        for(var moreFour = 0; moreFour < 4; moreFour++){
    cardsPlayers["player" + nextPlayer].push(deck.shift());
      }
    }
}
plusFour({number: "+4", type: "comodin"});
console.log(cardsPlayers);
