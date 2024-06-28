const pagina = document.querySelector("html");
pagina.addEventListener("click", abrirResposta);

function abrirResposta(event) {
  let local = event.target.id;
  if (
    local === "pergunta1" ||
    local === "pergunta2" ||
    local === "pergunta3" ||
    local === "pergunta4" ||
    local === "pergunta5" ||
    local === "pergunta6"
  ) {
    let pergunta = document.querySelector("dt#" + local);
    let resposta = document.querySelector("dd#" + local);
    pergunta.classList.toggle("abrir");
    resposta.classList.toggle("abrir");
  }
}
