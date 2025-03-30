export default function initModal() {
  const botaoAbrir = document.querySelector("[data-modal='abrir']");
  const botaoFechar = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");

  function toggleAbriFecharModal(event) {
    event.preventDefault(); //previnir o eventCLick para que nao seja rirecionado bloqueado a acora ja que nao tenho uma pagina pra isso
    containerModal.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    if (event.target === containerModal) {
      // verificar se meu  evet click /  ou this que se refere também ao containerModal
      toggleAbriFecharModal(event); //event vai se referir o container
    }
  }
  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", toggleAbriFecharModal);
    botaoFechar.addEventListener("click", toggleAbriFecharModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
