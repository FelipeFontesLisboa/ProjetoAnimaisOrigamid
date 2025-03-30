import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  //?intenção aqui é que a funco funcione para mobile uma vez que o hover e bugado pra mobile
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  //queremos os dois evento de click e de touchstart . fazemos separado ou um array
  dropdownMenus.forEach((item) => {
    ["touchstart", "click"].forEach((duploEvent) => {
      item.addEventListener(duploEvent, handleClick);
    });
    // item.addEventListener('click', handleClick)
    // item.addEventListener('touchstart', handleClick)
  });

  function handleClick(event) {
    event.preventDefault(); //prevenir o padrão . que seria direcionado
    this.classList.add("ativo");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });

    // console.log(event)// Isso vai logar o evento que foi disparado
    // console.log(this)// Isso vai logar o elemento dropdown que foi clicado ou tocado
  }
}