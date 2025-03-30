//function click fora do dropdown ou modal
export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    // verificar se existe esse atribute , inpedendo de condinuar executando o evento varias vezes ao clickar

    events.forEach((duploEvent) => {
      // pasando para o foreath 2 eventos que usamos
      setTimeout(() => {
        html.addEventListener(duploEvent, handleOutsideClick);
      }); // settimault por causa do babol , na over stack
    });

    element.setAttribute(outside, ""); //colocar um atributo para ele indificar que o evento ja foi adicionado , e nao ficar fepetindo adicioanndo novamento o evento tdo vez que for clicado
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      //verificar se o target foi fora do contains execulta o calbeck a function para remover
      element.removeAttribute(outside); //quando o evento occorer e o click for do lado de fora pode remover o atribute tambem

      events.forEach((duploEvent) => {
        // para remover tambem pasamos os dois evento a ser removido
        html.removeEventListener(duploEvent, handleOutsideClick);
      }); // remover o evento tambem da memoria

      callback();
    }
  }
}
