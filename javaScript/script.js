console.log("teste");

// Ativar os links do Menu superior
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("selecionado");
  }
}

links.forEach(ativarLink);

// Seleção de produtos no orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
    console.log(elemento);
  }
}

parametros.forEach(ativarProduto);

console.log(parametros);
