//TESTA O BLOCO E DEPOIS EXECUTA A EXECUÇÃO
let contador = "sim";

while (contador == "sim") {
  console.log("tudo bem? eu testei primeiro");
  contador = "não";
}

//EXECUTA A FUNÇÃO DEPOIS TESTA

do {
  console.log("tudo bem? eu executei primeiro");
  contador = "não";
} while (contador == "sim");

// ESTRUTURA DE REPETIÇÃO COM VARIAVEL DE  CONTROLE

for ( contador  ; contador ='sim'; contador = 'não') {
  console.log("tudo bem? eu sou executado por meio de var de controle");
}
