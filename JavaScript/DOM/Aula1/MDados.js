// window - usado para criar alertas nas páginas de navegação

let btn = document.getElementById("btn");
let back = document.querySelector("body");

btn.addEventListener("click", () => {
  let name = window.prompt("What is your name? ");
  window.alert("Olá " + name);
});
