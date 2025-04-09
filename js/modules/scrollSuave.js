//? Scroll Suave entre section  ao clicar ao link
export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links); //pega todos os links
    if (options === undefined) {
      //verifica se options e undefined
      this.options = { behavior: "smooth", block: "start" }; //opcoes padrao
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this); //bind para manter o this correto
  }

  scrollToSection(event) {
    event.preventDefault(); //previne o padrao do evento
    // console.log(event.currentTarget); //pega o elemento que disparou o evento
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      //percorre os links
      link.addEventListener("click", this.scrollToSection); //adiciona o evento de click
    });
  }

  init() {
    if (this.linksInternos.length) {
      //verifica se existem links internos
      this.addLinkEvent(); //adiciona o evento de click
    }
    return this;
  }
}

// //?Scroll Suave entre section  ao clicar ao link

// export default function initScrollSuave() {
//   const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

//   function scrollToSection(event) {
//     event.preventDefault(); // prever o padrao
//     const href = event.currentTarget.getAttribute("href"); // selecionar o elemento igual o getByID . peguei
//     const section = document.querySelectorAll(href); //peguei atributo / dai sai iten e sescao
//     // console.log(section);
//     //?esse forma fala direto com o elemento . so pasar o conportamento como objeto tambem
//     section.scrollIntoView({
//       // metodo scrrointo
//       behavior: "smooth", //propriedade
//       block: "start", //propriedade , alinha o blocko no inicio
//     });

//     //?forma alternativa de deslizar sobre sessoes
//     // const topo = section.offsetTop; //retorna topo settop da sesao
//     //  window.scrollTo({ // metodo scrolto que aceita um objeto dentro dele com as opcoes
//     //     top: topo,
//     //     behavior:"smooth", //o efeito suave
//     // });
//   }
//   linksInternos.forEach((item) => {
//     //percorer item
//     item.addEventListener("click", scrollToSection);
//   });
