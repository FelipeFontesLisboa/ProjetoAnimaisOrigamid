//?navegação acordion
//navegação acordion  entre faq title e paragrapho

/* izolar a funsao  o seu escopo*/
export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const ativaClass = "ativo"; //para nao repetir de mais uma string em um codigo armazena ela

  /*verificar se todo esse conteudo existe em pagina com IF*/
  if (accordionList.length) {
    accordionList[0].classList.add(ativaClass);
    accordionList[0].nextElementSibling.classList.add(ativaClass);

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
  function activeAccordion() {
    /* console.log(event.currentTarget.nextElementSibling.classList.add('ativo'))
 esse exemplo tambem faz referencia ao item clicado aplicando a ele o evento assim como o this */
    this.classList.toggle(ativaClass); // proprio item tambme
    this.nextElementSibling.classList.toggle(ativaClass); // referencia ao proximo item next
  }

}

//   initAccordion();

