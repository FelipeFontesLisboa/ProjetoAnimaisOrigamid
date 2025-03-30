//? Navegação por Tabs
//criar uma relação entre um elemente e outro na pagina ao clicar por exemplo
//1 item para cada conteudo nesse caso a relação das imagen com o texto

//todo. izolando o codigo da navegação por tab com a func
function initTabNav() {
  const tabMenuAnimais = document.querySelectorAll("[data-tab='enuImg'] li"); //selecionar cada LI
  const tabContent = document.querySelectorAll("[data-tab='content'] section"); //selecionar cada LI
  const activeClass = "ativo";
  //verificar se tem esses itens na tela
  if (tabMenuAnimais.length && tabContent.length) {
    tabContent[0].classList.add(activeClass); // para sempre inicial um texto ativado o primeiro

    //vou adicionar a clase conforme o index que for pasando como um arraydfdf
    //atribuit evento a cada item com forhech relacionando item .  poderiamos comparar de outra forma rerificando clases se sao iguais
    //funcao para atribui cada index de cada img a cada sinopse
    tabMenuAnimais.forEach((itemMenu, index) => {
      //loop  cada itemMenu adicioanndo event click para cada index
      itemMenu.addEventListener("click", () => {
        ativeTab(index);
      });
    });
  }
}
function ativeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove(activeClass); // 2 apos troca  o index ele remove limpa o rasto ,removo na anterior
  });
  const direcao = tabContent[index].dataset.anime; //para cada tab clicado tenho a determinada direcao/animacao
  console.log(tabContent[index].dataset.anime);
  console.log(tabContent[index]);
  tabContent[index].classList.add(activeClass, direcao); // 1 func pasa por index e add clase ,  vai adicionar onde eu quero e removo na anterior
}
initTabNav();
// -----------------------------------------------------------------------------
//?navegação acordion
//navegação acordion  entre faq title e paragrapho

/* izolar a funsao  o seu escopo*/
function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const ativaClass = "ativo"; //para nao repetir de mais uma string em um codigo armazena ela

  /*verificar se todo esse conteudo existe em pagina com IF*/
  function activeAccordion() {
    /* console.log(event.currentTarget.nextElementSibling.classList.add('ativo'))
esse exemplo tambem faz referencia ao item clicado aplicando a ele o evento assim como o this */
    this.classList.toggle(ativaClass); // proprio item tambme
    this.nextElementSibling.classList.toggle(ativaClass); // referencia ao proximo item next
  }
  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}
if (accordionList.length) {
  accordionList[0].classList.add(ativaClass);
  accordionList[0].nextElementSibling.classList.add(ativaClass);
}
initAccordion();

/*------------------------------------------------------------------------*/
//?Scroll Suave entre section  ao clicar ao link

function initScrollSuave() {
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
initScrollSuave();

//-----------------------------------------------------------------------

//? Animação Ao Scrolar a pagina
//agora pegamos tudo isso abaixo e izorar nessa func pra nao vazer o escopo
function initAnimationScrrol() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMedate = window.innerHeight * 0.6; //vamos armazenas 60% da dela um pouco mais que a petade para iniciar a animacao scrol / ou seja de qualquer tela

  function animationEffecScroll() {
    sections.forEach((section) => {
      //vamos percorer a section  com foreath
      const sectionTop = section.getBoundingClientRect().top; //vamos usar o metodo getBound que nos retorna todo o parmetro em relasao medidas e eixo e vamos pegar apenas o top que é oque queremos
      const isSectionVisible = sectionTop - windowMedate < 0; //verifica se é metade e negativo ou seja menos que zero

      //vamos faser uma verificasao se a ditancia do top  na scrolagem na pasou  negativando  para -0
      if (isSectionVisible)
        section.classList.add("ativo"); // true dese acresentando
      else section.classList.remove("ativo"); // sobe removendo
    });
  }
  //mais uma vez verificamos se essa sessao existe pra sim executar se nao nem faz nada
  if (sections.length) {
    animationEffecScroll(); // para ativa pelomenos uma vez quando iniciar o site

    window.addEventListener("scroll", animationEffecScroll);
  }
}
initAnimationScrrol(); // inicia
