
const rl = require("readline-sync");
//juego uno
var deck = [];
var colors = ["Yellow", "Blue", "Green", "Red"];
var type =["Comun", "Especial", "Comodin"];
var card = {
    color: null, //amarillo, azul, verde y rojjo
    number: null,// 0-9
    type: null// comun, especial y comodines
};

for (var cColor = 0; cColor < colors.length; cColor++) {
    
    for(var cNumber = 0; cNumber < 10; cNumber++){
        deck.push({color: colors[cColor], number:cNumber, typ:"comun"});

    }
    for(var cNumber1= 1; cNumber1 < 10; cNumber1++){
        deck.push({color: colors[cColor], number:cNumber1, type:"comun"});
       
    }

    deck.push({color: colors[cColor], number: "+2", typ:"especial"});
    deck.push({color: colors[cColor], number: "+2", typ:"especial"});
    deck.push({color: colors[cColor], number: "B", typ:"especial"});
    deck.push({color: colors[cColor], number: "B", typ:"especial"});
    deck.push({color: colors[cColor], number: "R", typ:"especial"});
    deck.push({color: colors[cColor], number: "R", typ:"especial"});

}

    deck.push({color: null, number: "+4", typ:"comodin"});
    deck.push({color: null, number: "+4", typ:"comodin"});
    deck.push({color: null, number: "+4", typ:"comodin"});
    deck.push({color: null, number: "+4", typ:"comodin"});
    deck.push({color: null, number: "cc", typ:"comodin"});
    deck.push({color: null, number: "cc", typ:"comodin"});
    deck.push({color: null, number: "cc", typ:"comodin"});
    deck.push({color: null, number: "cc", typ:"comodin"});


//console.log(JSON.stringify(deck));

const players = rl.question("cuantos jugadores seran?",{})
const totalCards = players * 7;
// Repatir 7 cartas por jugador
// Recorro el total de tarjetas ( total de tarjetas= tarjetas/7 * jugador)  
// un arreglo x jugador  
//  Diefrencia  de arreglo: uno se accede mediante posiciones y el objeto mediante nombre
var  cardsPlayers = {};


for(var cTCards = 0; cTCards < 7; cTCards++) {

for(var cPlayers = 0; cPlayers < players; cPlayers++){
 
    if (!cardsPlayers[ "Player_"+cPlayers ] ) {
        cardsPlayers[ "Player_"+cPlayers ] = [];
    }
    
    cardsPlayers[ "Player_"+cPlayers ]. push(deck[cTCards]);
    
}

}
console.log (cardsPlayers);
