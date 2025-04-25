export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para
    // fazer referência ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;  // retorna o objeto da classe para encadear chamadas
  }
}

// export default function initModal() {
//   const botaoAbrir = document.querySelector("[data-modal='abrir']");
//   const botaoFechar = document.querySelector("[data-modal='fechar']");
//   const containerModal = document.querySelector("[data-modal='container']");

//   function toggleAbriFecharModal(event) {
//     event.preventDefault(); //previnir o eventCLick para que nao seja rirecionado bloqueado a acora ja que nao tenho uma pagina pra isso
//     containerModal.classList.toggle("ativo");
//   }

//   function cliqueForaModal(event) {
//     if (event.target === containerModal) {
//       // verificar se meu  evet click /  ou this que se refere também ao containerModal
//       toggleAbriFecharModal(event); //event vai se referir o container
//     }
//   }
//   if (botaoAbrir && botaoFechar && containerModal) {
//     botaoAbrir.addEventListener("click", toggleAbriFecharModal);
//     botaoFechar.addEventListener("click", toggleAbriFecharModal);
//     containerModal.addEventListener("click", cliqueForaModal);
//   }
// }
