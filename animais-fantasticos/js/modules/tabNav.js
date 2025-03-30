//? Navegação por Tabs
//criar uma relação entre um elemente e outro na pagina ao clicar por exemplo
//1 item para cada conteudo nesse caso a relação das imagen com o texto

//todo. izolando o codigo da navegação por tab com a func
export default function initTabNav() {
  const tabMenuAnimais = document.querySelectorAll("[data-tab='menuImg'] li"); //selecionar cada LI
  const tabContent = document.querySelectorAll("[data-tab='content'] section"); //selecionar cada LI
  const activeClass = "ativo";
  
  function ativeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(activeClass); // 2 apos troca  o index ele remove limpa o rasto ,removo na anterior
    });
    const direcao = tabContent[index].dataset.anime; //para cada tab clicado tenho a determinada direcao/animacao
    console.log(tabContent[index].dataset.anime);
    console.log(tabContent[index]);
    tabContent[index].classList.add(activeClass, direcao); // 1 func pasa por index e add clase ,  vai adicionar onde eu quero e removo na anterior
  }

  //verificar se tem esses itens na tela
  if (tabMenuAnimais.length && tabContent.length) {
    tabContent[0].classList.add(activeClass); // para sempre inicial um texto ativado o primeiro

    //vou adicionar a clase conforme o index que for pasando como um array
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

//   initTabNav();
