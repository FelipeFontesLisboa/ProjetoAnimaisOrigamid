//?Scroll Suave entre section  ao clicar ao link

export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault(); // prever o padrao
    const href = event.currentTarget.getAttribute("href"); // selecionar o elemento igual o getByID . peguei
    const section = document.querySelectorAll(href); //peguei atributo / dai sai iten e sescao
    // console.log(section);
    //?esse forma fala direto com o elemento . so pasar o conportamento como objeto tambem
    section.scrollIntoView({
      // metodo scrrointo
      behavior: "smooth", //propriedade
      block: "start", //propriedade , alinha o blocko no inicio
    });

    //?forma alternativa de deslizar sobre sessoes
    // const topo = section.offsetTop; //retorna topo settop da sesao
    //  window.scrollTo({ // metodo scrolto que aceita um objeto dentro dele com as opcoes
    //     top: topo,
    //     behavior:"smooth", //o efeito suave
    // });
  }
  linksInternos.forEach((item) => {
    //percorer item
    item.addEventListener("click", scrollToSection);
  });
}
// initScrollSuave()
