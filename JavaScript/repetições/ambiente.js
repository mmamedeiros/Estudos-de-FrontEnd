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

for (let c = 1; c <= 2; c++) {
  console.log("tudo bem? eu sou executado por meio de var de controle");
}
