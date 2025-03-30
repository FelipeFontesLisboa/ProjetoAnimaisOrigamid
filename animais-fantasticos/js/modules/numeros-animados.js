export default function initNumerosAnimados() {
  function animaNumero() {
    const numeros = document.querySelectorAll("[data-numeros]");

    numeros.forEach((numero) => {
      const total = +numero.innerText; // pra cada numero quero o seu consteudo valor , trasformado em numeor (sinal de + a frente pra isso)
      const incrimentar = Math.floor(total / 200); // total dividido para aceleraçao ser mais rapida |  aredondar casa com mathFLor

      let start = 0; // inicio contagem
      const timer = setInterval(() => {
        //criar o intervalor

        // start++
        start = start + incrimentar; //incrimenetar ele
        numero.innerText = start; //altere cada numero

        if (start > total) {
          //verificar se é maior que o numero que total eu limpo
          numero.innerText = total; //ele verificar quando e maior com o incremento que é um num quebrado  e depois volta para o valor inicial | mantendo o maximo como total
          clearInterval(timer);
        }
      }, 25 * Math.random()); // radom entre os 4 item que temos aleatorio
    });
  }

  //-------------------------------------------------------------------------
  //?funcao pra ativar quando ouver a mutação
  function handleMutation(mutation) {
    // nome especial (mutation) é um nodeList dentro dele vai ter todas as mutation que ocoreran na page/  nosso caso a unica mutation que ocoreu e a adisao do atrinuto a classe ativo aos elementos
    /* quando isso acontece ativa o anima numero no memento que chegar perdo da sesao */
    if (mutation[0].target.classList.contains("ativo")) {
      // pegamos o retorno da mutation o index 0 porque queremos a mudaca que ocore no atributo apenas pegamos a erança que contai taget e do taget verificamos o targlist se contaisn ativo para efetuar a aivação
      observer.disconnect(); //anima um vez e para disconect o observador
      animaNumero();
    }
  } // true se ta ativo  e  false  nao ativo

  const observerTarget = document.querySelector(".numeros"); //capiturar o elemento que vai ficar obsrvando
  //observador  olhando para algum evendo alguma mudanca mutation
  const observer = new MutationObserver(handleMutation); //recebe uma funcao  calback de parametro dentro dele que vai acontecer toda vez que mudar ou notar alguma mudanca na sesao que queremos

  //oque eu quero observar
  observer.observe(observerTarget, { attributes: true });
  //1 parametro quero ficar observando a sessao de numero animados
  // 2 parametro quero observar o atributo dele se havera alguma mudança ou seja quando for ativo ou nao quero um determinada coisa para acontecer
}
