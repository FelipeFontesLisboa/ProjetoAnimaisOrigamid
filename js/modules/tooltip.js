export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com base em seus estilos
  // de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 250 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
    console.log(event.pageX + 240 > window.innerWidth); //para verificar se a tooltip está saindo da tela
  }
  // Remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Cria a tooltip e adiciona os eventos
  // de mousemove e mouseleave ao target
  onMouseOver({ currentTarget }) {
    // cria a tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // Adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}



// export default function initToolTip() {
//   const tooltips = document.querySelectorAll("[data-tooltip]"); // selectorALL  para todos selecionado
//   // percore com forEach e adiciona meu evento
//   tooltips.forEach((item) => {
//     item.addEventListener("mouseover", onMouseOver); // EVENTO PARA TODOS OS ITEMS COM A CLASS TOOLTIPS
//   });

//   //EVENTO PASAR O MOUSE
//   //this resecebe minha function que cria a box tooltips
//   function onMouseOver(event) {
//     const tooltipBox = criarTooltipBox(this); // THIS VAI SER TODO OS ITENS PERCORIDOS COM A CLASS DATA-TOOLTIPS
//     //    tooltipBox.style.top = event.pageY + 'px'//valor de pageY/X é interiro tenho que somar com PX capiturar posição do mouse pageX ,Pagey
//     //    tooltipBox.style.left = event.pageX + 'px '//capiturar posição do mouse pageX ,Pagey

//     //atribui meu obj ao event
//     onMouseMove.tooltipBox = tooltipBox;
//     this.addEventListener("mousemove", onMouseMove); //

//     //atribui meu obj ao event
//     onMouseLeave.tooltipBox = tooltipBox; //minha func que virou OBJ
//     this.addEventListener("mouseleave", onMouseLeave); //evento para indetificar o mouselive no mouseOver / quando tiro e removo o mouse de cima
//   }

//   //todo pasar obj como calback para o event
//   //? esta fora do escopo essa func , entao vamos tranformar em um objto que
//   //?recebe O METOdo  handleEvent() Qque nos permite utilizar la dentro  da funtion desejada
//   //funcao quando removo o mouse de cima  de this
//   const onMouseLeave = {
//     handleEvent() {
//       this.tooltipBox.remove();
//     },
//   };

//   //todo pasar obj como calback para o event
//   const onMouseMove = {
//     handleEvent(event) {
//       this.tooltipBox.style.top = event.pageY + 20 + "px"; //valor de pageY/X é interiro tenho que somar com PX capiturar posição do mouse pageX ,Pagey
//       this.tooltipBox.style.left = event.pageX + 10 + "px "; //capiturar posição do mouse pageX ,Pagey
//     },
//   };

//   // passo para a criação da box tooltips
//   function criarTooltipBox(element) {
//     const tooltipBox = document.createElement("div"); // 1 criar div nova para ela
//     tooltipBox.classList.add("tooltip"); // 2 adicionar class a ela , para style
//     const textDoatributoLabel = element.getAttribute("aria-label"); // 3 puchar o atributo pega o texto das areas label que vao para o tooltips QUE RECEBE O EVENTO DO MOUSE E A CLASS DATA -TOOTIPS
//     tooltipBox.innerText = textDoatributoLabel; // 4 ATRIBUI O TEXTO CAPITURADO A A DIV QUE VAI SER A THIS DA VEZ
//     document.body.appendChild(tooltipBox); //adivionar minha box tooltips ao final do body do documento
//     return tooltipBox; //return final pronto e a box finalizada
//     console.log(tooltipBox);
//   }
// }
