import outsideClick from "./outsideClick.js"; //importar o nosso click fora outsisde, para tambem fechar o menu

export default function initMenuMobile() {
  const buttonMenu = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='lista']");
  const eventos = ["click", "touchstart"];

  function openMenu(event) {
    buttonMenu.classList.add("ativo");
    menuList.classList.add("ativo");

    outsideClick(menuList, ["click", "touchstart"], () => {
      buttonMenu.classList.remove("ativo");
      menuList.classList.remove("ativo");
    });
    // 1- passar como parametro o elemento que quero que saia ao clicar fora ,
    // 2- passar os eventos tambem ,remocão do menu com outside tabem para mobile touch
    // 3- passar na callback a remosao das clases pra ele ser removido
  }

  if (buttonMenu) {
    // existe  ok roda e nao trava o script evitando qualquer erro

    eventos.forEach((item) => buttonMenu.addEventListener(item, openMenu)); //4 atribuit os eventos
  }
}
