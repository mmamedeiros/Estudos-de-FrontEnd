let titulo = document.querySelector("h1");
//titulo.textContent = "Aula 09"; os dois exercem a mesma função
titulo.innerHTML = "Manipulado com JavaScript";

titulo.style.color = "blue"; // abordagem quando são poucos elementos alterados
titulo.style.fontSize = "28px";

//let par = document.querySelector(".par");
// par.setAttribute("class", "impar"); // dentro da classe você pode definir quantas propriedades qiue você quiser

let text = document.querySelector("body");
let light = document.querySelector(".btnlight");
let dark = document.querySelector(".btndark");

dark.addEventListener("click", () => {
  console.log("dark mode");
  text.classList.add("dark");
  text.classList.remove("light");
});

light.addEventListener("click", () => {
  console.log("light mode");
  text.classList.add("light");
  text.classList.remove("dark");
});
/*
let n1 = Number(window.prompt("digite um numero"));
let n2 = Number(window.prompt("digite um outro numero"));
let s = n1 + n2;
window.alert(String(s));
window.alert(n1.toFixed(2));

// s.lenght   QUANTOS CARACTERES A STRING TEM
// s.toUpperCase() TUDO MAIÚSCULO
// s.toLowerCase() TUDO MINUSCULO

/* 
5== 5 vai ser TRUE
5 == "5" vai ser True mesmo que um seja string e o outro number, mas os valores são iguais
5 === "5" vai da FALSE pois os valores não são identicos um é num e outro str 

! = não
&& == e  a ordem de precedência dele é ! > && > ||
|| = ou

OPERADOR TERNÁRIO

teste ? true : false*/
