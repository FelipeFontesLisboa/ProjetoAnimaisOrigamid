export default class NumerosAnimados {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
  }

  // Método para animar os números staticamente porque não precisa de instância ou objeto em si
  // e sim de uma função que recebe o número e anima ele
  static incrementoNumero(numero) {
    const total = +numero.innerText; //converte o texto para numero
    const incremento = Math.floor(total / 100); //calcula o incremento
    let start = 0; //inicia o contador em 0

    const timer = setInterval(() => {
      start += incremento; //incrementa o contador
      numero.innerText = start; //atualiza o texto do numero

      if (start > total) {
        numero.innerText = total; //se passar do total, seta o total
        clearInterval(timer); //para o timer
      }
    }, 25 * Math.random()); //intervalo aleatório entre 0 e 25ms
  }

  //ativa incrementoNumero para cada número do dom
  animaNumero() {
    this.numeros.forEach((numero) => this.constructor.incrementoNumero(numero));
  }

  //-------------------------------------------------------------------------

  // Método para ativar quando houver a mutação
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerTarget)) {
      this.observer.disconnect();
      this.animaNumero();
    }
  }

  init() {
    this.observerTarget = document.querySelector(".numeros");
    this.observer = new MutationObserver(this.handleMutation.bind(this));
    this.observer.observe(this.observerTarget, { attributes: true });
  }
}
