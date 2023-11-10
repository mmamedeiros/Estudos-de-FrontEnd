//CONDIÇÃO SIMPLES E COMPOSTA

console.log("o aplicativo está ativo");

let velS = 10;

if (velS >= 60) {
  console.log("Multado");
} else {
  console.log("só passa");
}

// CONDÇÃO ANINHADA

let vel = 10;
let clima = 30;
if (vel >= 60) {
  console.log("Multado");
} else {
  if (vel < 60) {
    console.log("velocidade adequada");
  } else {
  }
}

//saber horas

let agora = new Date();
let hora = agora.getHours();

if (hora <= 12) {
  console.log("manhã");
} else {
  if (hora <= 18) {
    console.log("tarde");
  } else {
    console.log("noite");
  }
}

//CONDIÇÃO MULTIPLA - SWITCH

let tipo = "math";

switch (tipo) {
  case "gato":
    console.log("isso é um gato");
    break;
  /**  // IMPORTANTE  - SEM O BREAK A FUNÇÃO IRA DAR ERRO , ele roda cada caso até algum break ser suprido
   */
  // o break quebra o bloco e separa as excuções deles
  case "cão":
    console.log("isso é um cachorro");
    break;

  default:
    console.log("isso não é um animal ");
    break;
}
