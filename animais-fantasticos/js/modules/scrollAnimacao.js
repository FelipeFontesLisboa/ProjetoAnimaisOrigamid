//? Animação Ao Scrolar a pagina
//agora pegamos tudo isso abaixo e izorar nessa func pra nao vazer o escopo
export default function initAnimationScrrol() {
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
      else if (section.classList.contains("ativo")) {
        // vai funcionar como um togle se contais ativo remove se nao contains nao remove. isso evita de ficar adicioando e removendo sempre o atributo ajudando a verificção da mutacao  na section numero animado
        section.classList.remove("ativo"); // sobe removendo
      }
    });
  }
  //mais uma vez verificamos se essa sessao existe pra sim executar se nao nem faz nada
  if (sections.length) {
    animationEffecScroll(); // para ativa pelomenos uma vez quando iniciar o site

    window.addEventListener("scroll", animationEffecScroll);
  }
}

//   initAnimationScrrol(); // inicia
