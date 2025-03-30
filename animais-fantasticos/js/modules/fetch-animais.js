//essa foi feita com assic e await
//aqui usando try e cath para o erro

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    const animaisResonse = await fetch(url);
    const animaisJSON = await animaisResonse.json();
    //selecionar o container onde esta o numero grit animaios
    const numeroGrid = document.querySelector(".numeros-grid");

    //um loop por todos
    animaisJSON.forEach((animal) => {
      const divAnimal = createAnimal(animal); //para cada adinimalo criando dinamicamente minha div animal
      numeroGrid.appendChild(divAnimal); //no meu container adiciona no final um atras do outro
    });
  }

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

  //meu json externo
  fetchAnimais("./animaisFetchApi.json");
}
