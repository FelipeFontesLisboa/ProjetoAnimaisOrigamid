//essa foi feita com then
//para erros cath

export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json()) //da resposta o json
    .then((bodyBitcoin) => {
      const btcPreco = document.querySelector(".btc-preco"); //SELECIONAR NOSSO ELEMENTOS PARA JOGAR LA O API
      btcPreco.innerText = (100 / bodyBitcoin.BRL.sell).toFixed(4); //dentro do nosso elemento selecionado pego o obj do json balo com BRL e dentro do brl falo com sell>venda queremos doancao de 100 e que apareca 4 casa decimal tofixed metodo matematico do js
      console.log(bodyBitcoin); //ja temos ele OK
    })
    .catch((erro) => {
      console.log(Error(erro)); //tratamento de erro
    });
}

//https://blockchain.info/ticker
