console.log("teste");

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("selecionado");
  }
}

links.forEach(ativarLink);
