export default function initToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]"); // selectorALL  para todos selecionado
  // percore com forEach e adiciona meu evento
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver); // EVENTO PARA TODOS OS ITEMS COM A CLASS TOOLTIPS
  });

  //EVENTO PASAR O MOUSE
  //this resecebe minha function que cria a box tooltips
  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this); // THIS VAI SER TODO OS ITENS PERCORIDOS COM A CLASS DATA-TOOLTIPS
    //    tooltipBox.style.top = event.pageY + 'px'//valor de pageY/X é interiro tenho que somar com PX capiturar posição do mouse pageX ,Pagey
    //    tooltipBox.style.left = event.pageX + 'px '//capiturar posição do mouse pageX ,Pagey

    //atribui meu obj ao event
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove); //

    //atribui meu obj ao event
    onMouseLeave.tooltipBox = tooltipBox; //minha func que virou OBJ
    this.addEventListener("mouseleave", onMouseLeave); //evento para indetificar o mouselive no mouseOver / quando tiro e removo o mouse de cima
  }

  //todo pasar obj como calback para o event
  //? esta fora do escopo essa func , entao vamos tranformar em um objto que
  //?recebe O METOdo  handleEvent() Qque nos permite utilizar la dentro  da funtion desejada
  //funcao quando removo o mouse de cima  de this
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
    },
  };

  //todo pasar obj como calback para o event
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px"; //valor de pageY/X é interiro tenho que somar com PX capiturar posição do mouse pageX ,Pagey
      this.tooltipBox.style.left = event.pageX + 10 + "px "; //capiturar posição do mouse pageX ,Pagey
    },
  };

  // passo para a criação da box tooltips
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div"); // 1 criar div nova para ela
    tooltipBox.classList.add("tooltip"); // 2 adicionar class a ela , para style
    const textDoatributoLabel = element.getAttribute("aria-label"); // 3 puchar o atributo pega o texto das areas label que vao para o tooltips QUE RECEBE O EVENTO DO MOUSE E A CLASS DATA -TOOTIPS
    tooltipBox.innerText = textDoatributoLabel; // 4 ATRIBUI O TEXTO CAPITURADO A A DIV QUE VAI SER A THIS DA VEZ
    document.body.appendChild(tooltipBox); //adivionar minha box tooltips ao final do body do documento
    return tooltipBox; //return final pronto e a box finalizada
    console.log(tooltipBox);
  }
}
