export default function initHorarioFuncionamento() {}

//EQUIVALENCIA DE DIAS DA SEMANA JS
//! D0 - S1 - T2 - Q4 - Q5 - S6

//data hora funcionamento  ESTABELECIDO PELO PROPRIETARIO
const diasFuncionamento = document.querySelector("[data-semana]"); //selecionou
const diasSemana = diasFuncionamento.dataset.semana.split(",").map(Number); //pegar todos os dias dentro dele  1,2,3,4,5 depois trnaforma em array com split a cada virgula, usando o map que itera e  nos da  outro array Usando o Obj Number fazendo o retorno dele vir number ao invez de string
console.log(diasSemana); //retorno array dias da semana
const horarioSemana = diasFuncionamento.dataset.horario.split(",").map(Number);
console.log(horarioSemana);

//contrutor
const dataObjetoAgora = new Date();
//do construtor extraiu dia atual getDay metodo
const diasAgora = dataObjetoAgora.getDay(); //dias atual
const horarioAgora = dataObjetoAgora.getHours(); // hora atual
console.log(diasAgora);
console.log(horarioAgora);

//?criar uma logica para verificar o dia da semana atual com o dia de funcionamento do local
//1 Temos um array com os dias da semana capiturados , vamos verificar se [e igual ao o dia atual]
// const testando = [1,2,3,4,5].indexOf(6)
//nosso indexOf retorna a posicao o index se na verificação que ele faz ao array,
// se ele nao incontra um item o seu retorno é um numero negativo -1, sabendo disso criareamo a verificação  se é negativo
const semanaAberto = diasSemana.indexOf(diasAgora) !== -1; //SE FOR DIFERENTE DE -1 E VERDADEIRO CASO CONTRARIO FALSO se tem o dia ou nao
console.log(`o resultado é ${semanaAberto} porque hoje eh ${diasAgora}`);

//?criar uma logica para verificar horario aberto com o horario atual
//verifican se é maior ou igual ao horario de funcionamento retornando um booleano apartir no index no array
const horarioFuncionando =
  horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]; //tem que ser maior que  8 da manhn e manor que as 18 da tarde
if (semanaAberto && horarioFuncionando) {
  //e true essas duas informacoes
  diasFuncionamento.classList.add("aberto"); //se for o funcionamento esta aberto
}

console.log(`o resultado é ${horarioFuncionando} porque são ${horarioAgora}`);
console.log(`a loja esta ${horarioFuncionando}`);
