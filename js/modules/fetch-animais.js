//--------------------------------------------------------------------------
// essa foi feita com assic e await
// aqui usando try e cath para o erro
import AnimaNumeros from "./numeros-animados.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    console.log(animal);
    //criar a mesma estrutura do contador de animais Em JS
    const div = document.createElement("div"); //criando a div
    div.classList.add("numeros-animal"); //setando a class a essa div
    //joga pra dentro dela as agora
    div.innerHTML = `
          <h3>${animal.specie}</h3>
          <span data-numeros>${animal.total}</span>
    
        `;
    //da funcao criada quero retorna a div para usar em cima
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResonse = await fetch(url);
      const animaisJSON = await animaisResonse.json();
      //selecionar o container onde esta o numero grit animaios
      const numeroGrid = document.querySelector(".numeros-grid");

      //um loop por todos
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal); //para cada adinimalo criando dinamicamente minha div animal
        numeroGrid.appendChild(divAnimal); //no meu container adiciona no final um atras do outro
      });

      const animaNumeros = new AnimaNumeros("[data-numeros]", ".numeros", "ativo"); //instancia a classe AnimaNumeros
      animaNumeros.init(); //inicializa a classe AnimaNumeros
    } catch (error) {
      console.error("Erro ao buscar animais:", error);
    }
  }
 


  //meu json externo
  fetchAnimais("./animaisFetchApi.json");
}
