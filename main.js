/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\n//?navegação acordion\n//navegação acordion  entre faq title e paragrapho\n\n/* izolar a funsao  o seu escopo*/\nfunction initAccordion() {\n  var accordionList = document.querySelectorAll(\"[data-anime='accordion'] dt\");\n  var ativaClass = \"ativo\"; //para nao repetir de mais uma string em um codigo armazena ela\n\n  /*verificar se todo esse conteudo existe em pagina com IF*/\n  if (accordionList.length) {\n    accordionList[0].classList.add(ativaClass);\n    accordionList[0].nextElementSibling.classList.add(ativaClass);\n    accordionList.forEach(function (item) {\n      item.addEventListener(\"click\", activeAccordion);\n    });\n  }\n  function activeAccordion() {\n    /* console.log(event.currentTarget.nextElementSibling.classList.add('ativo'))\r\n    esse exemplo tambem faz referencia ao item clicado aplicando a ele o evento assim como o this */\n    this.classList.toggle(ativaClass); // proprio item tambme\n    this.nextElementSibling.classList.toggle(ativaClass); // referencia ao proximo item next\n  }\n}\n\n//   initAccordion();\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\nfunction initDropdownMenu() {\n  //?intenção aqui é que a funco funcione para mobile uma vez que o hover e bugado pra mobile\n  var dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\n\n  //queremos os dois evento de click e de touchstart . fazemos separado ou um array\n  dropdownMenus.forEach(function (item) {\n    [\"touchstart\", \"click\"].forEach(function (duploEvent) {\n      item.addEventListener(duploEvent, handleClick);\n    });\n    // item.addEventListener('click', handleClick)\n    // item.addEventListener('touchstart', handleClick)\n  });\n  function handleClick(event) {\n    var _this = this;\n    event.preventDefault(); //prevenir o padrão . que seria direcionado\n    this.classList.add(\"ativo\");\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"touchstart\", \"click\"], function () {\n      _this.classList.remove(\"ativo\");\n    });\n\n    // console.log(event)// Isso vai logar o evento que foi disparado\n    // console.log(this)// Isso vai logar o elemento dropdown que foi clicado ou tocado\n  }\n}\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//essa foi feita com assic e await\n//aqui usando try e cath para o erro\n\nfunction initFetchAnimais() {\n  function fetchAnimais(_x) {\n    return _fetchAnimais.apply(this, arguments);\n  }\n  function _fetchAnimais() {\n    _fetchAnimais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var animaisResonse, animaisJSON, numeroGrid;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url);\n          case 2:\n            animaisResonse = _context.sent;\n            _context.next = 5;\n            return animaisResonse.json();\n          case 5:\n            animaisJSON = _context.sent;\n            //selecionar o container onde esta o numero grit animaios\n            numeroGrid = document.querySelector(\".numeros-grid\"); //um loop por todos\n            animaisJSON.forEach(function (animal) {\n              var divAnimal = createAnimal(animal); //para cada adinimalo criando dinamicamente minha div animal\n              numeroGrid.appendChild(divAnimal); //no meu container adiciona no final um atras do outro\n            });\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return _fetchAnimais.apply(this, arguments);\n  }\n  function createAnimal(animal) {\n    console.log(animal);\n    //criar a mesma estrutura do contador de animais Em JS\n    var div = document.createElement(\"div\"); //criando a div\n    div.classList.add(\"numeros-animal\"); //setando a class a essa div\n    //joga pra dentro dela as agora\n    div.innerHTML = \"\\n          <h3>\".concat(animal.specie, \"</h3>\\n          <span data-numeros>\").concat(animal.total, \"</span>\\n    \\n        \");\n    //da funcao criada quero retorna a div para usar em cima\n    return div;\n  }\n\n  //meu json externo\n  fetchAnimais(\"./animaisFetchApi.json\");\n}\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\n//essa foi feita com then\n//para erros cath\n\nfunction initFetchBitcoin() {\n  fetch(\"https://blockchain.info/ticker\").then(function (response) {\n    return response.json();\n  }) //da resposta o json\n  .then(function (bodyBitcoin) {\n    var btcPreco = document.querySelector(\".btc-preco\"); //SELECIONAR NOSSO ELEMENTOS PARA JOGAR LA O API\n    btcPreco.innerText = (100 / bodyBitcoin.BRL.sell).toFixed(4); //dentro do nosso elemento selecionado pego o obj do json balo com BRL e dentro do brl falo com sell>venda queremos doancao de 100 e que apareca 4 casa decimal tofixed metodo matematico do js\n    console.log(bodyBitcoin); //ja temos ele OK\n  })[\"catch\"](function (erro) {\n    console.log(Error(erro)); //tratamento de erro\n  });\n}\n\n//https://blockchain.info/ticker\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/horarioFuncionamento.js":
/*!********************************************!*\
  !*** ./js/modules/horarioFuncionamento.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initHorarioFuncionamento)\n/* harmony export */ });\nfunction initHorarioFuncionamento() {}\n\n//EQUIVALENCIA DE DIAS DA SEMANA JS\n//! D0 - S1 - T2 - Q4 - Q5 - S6\n\n//data hora funcionamento  ESTABELECIDO PELO PROPRIETARIO\nvar diasFuncionamento = document.querySelector(\"[data-semana]\"); //selecionou\nvar diasSemana = diasFuncionamento.dataset.semana.split(\",\").map(Number); //pegar todos os dias dentro dele  1,2,3,4,5 depois trnaforma em array com split a cada virgula, usando o map que itera e  nos da  outro array Usando o Obj Number fazendo o retorno dele vir number ao invez de string\nconsole.log(diasSemana); //retorno array dias da semana\nvar horarioSemana = diasFuncionamento.dataset.horario.split(\",\").map(Number);\nconsole.log(horarioSemana);\n\n//contrutor\nvar dataObjetoAgora = new Date();\n//do construtor extraiu dia atual getDay metodo\nvar diasAgora = dataObjetoAgora.getDay(); //dias atual\nvar horarioAgora = dataObjetoAgora.getHours(); // hora atual\nconsole.log(diasAgora);\nconsole.log(horarioAgora);\n\n//?criar uma logica para verificar o dia da semana atual com o dia de funcionamento do local\n//1 Temos um array com os dias da semana capiturados , vamos verificar se [e igual ao o dia atual]\n// const testando = [1,2,3,4,5].indexOf(6)\n//nosso indexOf retorna a posicao o index se na verificação que ele faz ao array,\n// se ele nao incontra um item o seu retorno é um numero negativo -1, sabendo disso criareamo a verificação  se é negativo\nvar semanaAberto = diasSemana.indexOf(diasAgora) !== -1; //SE FOR DIFERENTE DE -1 E VERDADEIRO CASO CONTRARIO FALSO se tem o dia ou nao\nconsole.log(\"o resultado \\xE9 \".concat(semanaAberto, \" porque hoje eh \").concat(diasAgora));\n\n//?criar uma logica para verificar horario aberto com o horario atual\n//verifican se é maior ou igual ao horario de funcionamento retornando um booleano apartir no index no array\nvar horarioFuncionando = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]; //tem que ser maior que  8 da manhn e manor que as 18 da tarde\nif (semanaAberto && horarioFuncionando) {\n  //e true essas duas informacoes\n  diasFuncionamento.classList.add(\"aberto\"); //se for o funcionamento esta aberto\n}\nconsole.log(\"o resultado \\xE9 \".concat(horarioFuncionando, \" porque s\\xE3o \").concat(horarioAgora));\nconsole.log(\"a loja esta \".concat(horarioFuncionando));\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/modules/horarioFuncionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n //importar o nosso click fora outsisde, para tambem fechar o menu\n\nfunction initMenuMobile() {\n  var buttonMenu = document.querySelector(\"[data-menu='button']\");\n  var menuList = document.querySelector(\"[data-menu='lista']\");\n  var eventos = [\"click\", \"touchstart\"];\n  function openMenu(event) {\n    buttonMenu.classList.add(\"ativo\");\n    menuList.classList.add(\"ativo\");\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, [\"click\", \"touchstart\"], function () {\n      buttonMenu.classList.remove(\"ativo\");\n      menuList.classList.remove(\"ativo\");\n    });\n    // 1- passar como parametro o elemento que quero que saia ao clicar fora ,\n    // 2- passar os eventos tambem ,remocão do menu com outside tabem para mobile touch\n    // 3- passar na callback a remosao das clases pra ele ser removido\n  }\n  if (buttonMenu) {\n    // existe  ok roda e nao trava o script evitando qualquer erro\n\n    eventos.forEach(function (item) {\n      return buttonMenu.addEventListener(item, openMenu);\n    }); //4 atribuit os eventos\n  }\n}\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  var botaoAbrir = document.querySelector(\"[data-modal='abrir']\");\n  var botaoFechar = document.querySelector(\"[data-modal='fechar']\");\n  var containerModal = document.querySelector(\"[data-modal='container']\");\n  function toggleAbriFecharModal(event) {\n    event.preventDefault(); //previnir o eventCLick para que nao seja rirecionado bloqueado a acora ja que nao tenho uma pagina pra isso\n    containerModal.classList.toggle(\"ativo\");\n  }\n  function cliqueForaModal(event) {\n    if (event.target === containerModal) {\n      // verificar se meu  evet click /  ou this que se refere também ao containerModal\n      toggleAbriFecharModal(event); //event vai se referir o container\n    }\n  }\n  if (botaoAbrir && botaoFechar && containerModal) {\n    botaoAbrir.addEventListener(\"click\", toggleAbriFecharModal);\n    botaoFechar.addEventListener(\"click\", toggleAbriFecharModal);\n    containerModal.addEventListener(\"click\", cliqueForaModal);\n  }\n}\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/numeros-animados.js":
/*!****************************************!*\
  !*** ./js/modules/numeros-animados.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNumerosAnimados)\n/* harmony export */ });\nfunction initNumerosAnimados() {\n  function animaNumero() {\n    var numeros = document.querySelectorAll(\"[data-numeros]\");\n    numeros.forEach(function (numero) {\n      var total = +numero.innerText; // pra cada numero quero o seu consteudo valor , trasformado em numeor (sinal de + a frente pra isso)\n      var incrimentar = Math.floor(total / 200); // total dividido para aceleraçao ser mais rapida |  aredondar casa com mathFLor\n\n      var start = 0; // inicio contagem\n      var timer = setInterval(function () {\n        //criar o intervalor\n\n        // start++\n        start = start + incrimentar; //incrimenetar ele\n        numero.innerText = start; //altere cada numero\n\n        if (start > total) {\n          //verificar se é maior que o numero que total eu limpo\n          numero.innerText = total; //ele verificar quando e maior com o incremento que é um num quebrado  e depois volta para o valor inicial | mantendo o maximo como total\n          clearInterval(timer);\n        }\n      }, 25 * Math.random()); // radom entre os 4 item que temos aleatorio\n    });\n  }\n\n  //-------------------------------------------------------------------------\n  //?funcao pra ativar quando ouver a mutação\n  function handleMutation(mutation) {\n    // nome especial (mutation) é um nodeList dentro dele vai ter todas as mutation que ocoreran na page/  nosso caso a unica mutation que ocoreu e a adisao do atrinuto a classe ativo aos elementos\n    /* quando isso acontece ativa o anima numero no memento que chegar perdo da sesao */\n    if (mutation[0].target.classList.contains(\"ativo\")) {\n      // pegamos o retorno da mutation o index 0 porque queremos a mudaca que ocore no atributo apenas pegamos a erança que contai taget e do taget verificamos o targlist se contaisn ativo para efetuar a aivação\n      observer.disconnect(); //anima um vez e para disconect o observador\n      animaNumero();\n    }\n  } // true se ta ativo  e  false  nao ativo\n\n  var observerTarget = document.querySelector(\".numeros\"); //capiturar o elemento que vai ficar obsrvando\n  //observador  olhando para algum evendo alguma mudanca mutation\n  var observer = new MutationObserver(handleMutation); //recebe uma funcao  calback de parametro dentro dele que vai acontecer toda vez que mudar ou notar alguma mudanca na sesao que queremos\n\n  //oque eu quero observar\n  observer.observe(observerTarget, {\n    attributes: true\n  });\n  //1 parametro quero ficar observando a sessao de numero animados\n  // 2 parametro quero observar o atributo dele se havera alguma mudança ou seja quando for ativo ou nao quero um determinada coisa para acontecer\n}\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/modules/numeros-animados.js?");

/***/ }),

/***/ "./js/modules/outsideClick.js":
/*!************************************!*\
  !*** ./js/modules/outsideClick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\n//function click fora do dropdown ou modal\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = \"data-outside\";\n  if (!element.hasAttribute(outside)) {\n    // verificar se existe esse atribute , inpedendo de condinuar executando o evento varias vezes ao clickar\n\n    events.forEach(function (duploEvent) {\n      // pasando para o foreath 2 eventos que usamos\n      setTimeout(function () {\n        html.addEventListener(duploEvent, handleOutsideClick);\n      }); // settimault por causa do babol , na over stack\n    });\n    element.setAttribute(outside, \"\"); //colocar um atributo para ele indificar que o evento ja foi adicionado , e nao ficar fepetindo adicioanndo novamento o evento tdo vez que for clicado\n  }\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      //verificar se o target foi fora do contains execulta o calbeck a function para remover\n      element.removeAttribute(outside); //quando o evento occorer e o click for do lado de fora pode remover o atribute tambem\n\n      events.forEach(function (duploEvent) {\n        // para remover tambem pasamos os dois evento a ser removido\n        html.removeEventListener(duploEvent, handleOutsideClick);\n      }); // remover o evento tambem da memoria\n\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/modules/outsideClick.js?");

/***/ }),

/***/ "./js/modules/scrollAnimacao.js":
/*!**************************************!*\
  !*** ./js/modules/scrollAnimacao.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimationScrrol)\n/* harmony export */ });\n//? Animação Ao Scrolar a pagina\n//agora pegamos tudo isso abaixo e izorar nessa func pra nao vazer o escopo\nfunction initAnimationScrrol() {\n  var sections = document.querySelectorAll(\"[data-anime='scroll']\");\n  var windowMedate = window.innerHeight * 0.6; //vamos armazenas 60% da dela um pouco mais que a petade para iniciar a animacao scrol / ou seja de qualquer tela\n\n  function animationEffecScroll() {\n    sections.forEach(function (section) {\n      //vamos percorer a section  com foreath\n      var sectionTop = section.getBoundingClientRect().top; //vamos usar o metodo getBound que nos retorna todo o parmetro em relasao medidas e eixo e vamos pegar apenas o top que é oque queremos\n      var isSectionVisible = sectionTop - windowMedate < 0; //verifica se é metade e negativo ou seja menos que zero\n\n      //vamos faser uma verificasao se a ditancia do top  na scrolagem na pasou  negativando  para -0\n      if (isSectionVisible) section.classList.add(\"ativo\"); // true dese acresentando\n      else if (section.classList.contains(\"ativo\")) {\n        // vai funcionar como um togle se contais ativo remove se nao contains nao remove. isso evita de ficar adicioando e removendo sempre o atributo ajudando a verificção da mutacao  na section numero animado\n        section.classList.remove(\"ativo\"); // sobe removendo\n      }\n    });\n  }\n  //mais uma vez verificamos se essa sessao existe pra sim executar se nao nem faz nada\n  if (sections.length) {\n    animationEffecScroll(); // para ativa pelomenos uma vez quando iniciar o site\n\n    window.addEventListener(\"scroll\", animationEffecScroll);\n  }\n}\n\n//   initAnimationScrrol(); // inicia\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/modules/scrollAnimacao.js?");

/***/ }),

/***/ "./js/modules/scrollSuave.js":
/*!***********************************!*\
  !*** ./js/modules/scrollSuave.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n//? Scroll Suave entre section  ao clicar ao link\nvar ScrollSuave = /*#__PURE__*/function () {\n  function ScrollSuave(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSuave);\n    this.linksInternos = document.querySelectorAll(links); //pega todos os links\n    if (options === undefined) {\n      //verifica se options e undefined\n      this.options = {\n        behavior: \"smooth\",\n        block: \"start\"\n      }; //opcoes padrao\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this); //bind para manter o this correto\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSuave, [{\n    key: \"scrollToSection\",\n    value: function scrollToSection(event) {\n      event.preventDefault(); //previne o padrao do evento\n      // console.log(event.currentTarget); //pega o elemento que disparou o evento\n      var href = event.currentTarget.getAttribute(\"href\");\n      var section = document.querySelector(href);\n      section.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"addLinkEvent\",\n    value: function addLinkEvent() {\n      var _this = this;\n      this.linksInternos.forEach(function (link) {\n        //percorre os links\n        link.addEventListener(\"click\", _this.scrollToSection); //adiciona o evento de click\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linksInternos.length) {\n        //verifica se existem links internos\n        this.addLinkEvent(); //adiciona o evento de click\n      }\n      return this;\n    }\n  }]);\n}(); // //?Scroll Suave entre section  ao clicar ao link\n// export default function initScrollSuave() {\n//   const linksInternos = document.querySelectorAll(\".js-menu a[href^='#']\");\n//   function scrollToSection(event) {\n//     event.preventDefault(); // prever o padrao\n//     const href = event.currentTarget.getAttribute(\"href\"); // selecionar o elemento igual o getByID . peguei\n//     const section = document.querySelectorAll(href); //peguei atributo / dai sai iten e sescao\n//     // console.log(section);\n//     //?esse forma fala direto com o elemento . so pasar o conportamento como objeto tambem\n//     section.scrollIntoView({\n//       // metodo scrrointo\n//       behavior: \"smooth\", //propriedade\n//       block: \"start\", //propriedade , alinha o blocko no inicio\n//     });\n//     //?forma alternativa de deslizar sobre sessoes\n//     // const topo = section.offsetTop; //retorna topo settop da sesao\n//     //  window.scrollTo({ // metodo scrolto que aceita um objeto dentro dele com as opcoes\n//     //     top: topo,\n//     //     behavior:\"smooth\", //o efeito suave\n//     // });\n//   }\n//   linksInternos.forEach((item) => {\n//     //percorer item\n//     item.addEventListener(\"click\", scrollToSection);\n//   });\n\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/modules/scrollSuave.js?");

/***/ }),

/***/ "./js/modules/tabNav.js":
/*!******************************!*\
  !*** ./js/modules/tabNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\n//? Navegação por Tabs\n//criar uma relação entre um elemente e outro na pagina ao clicar por exemplo\n//1 item para cada conteudo nesse caso a relação das imagen com o texto\n\n//todo. izolando o codigo da navegação por tab com a func\nfunction initTabNav() {\n  var tabMenuAnimais = document.querySelectorAll(\"[data-tab='menuImg'] li\"); //selecionar cada LI\n  var tabContent = document.querySelectorAll(\"[data-tab='content'] section\"); //selecionar cada LI\n  var activeClass = \"ativo\";\n  function ativeTab(index) {\n    tabContent.forEach(function (section) {\n      section.classList.remove(activeClass); // 2 apos troca  o index ele remove limpa o rasto ,removo na anterior\n    });\n    var direcao = tabContent[index].dataset.anime; //para cada tab clicado tenho a determinada direcao/animacao\n    console.log(tabContent[index].dataset.anime);\n    console.log(tabContent[index]);\n    tabContent[index].classList.add(activeClass, direcao); // 1 func pasa por index e add clase ,  vai adicionar onde eu quero e removo na anterior\n  }\n\n  //verificar se tem esses itens na tela\n  if (tabMenuAnimais.length && tabContent.length) {\n    tabContent[0].classList.add(activeClass); // para sempre inicial um texto ativado o primeiro\n\n    //vou adicionar a clase conforme o index que for pasando como um array\n    //atribuit evento a cada item com forhech relacionando item .  poderiamos comparar de outra forma rerificando clases se sao iguais\n    //funcao para atribui cada index de cada img a cada sinopse\n    tabMenuAnimais.forEach(function (itemMenu, index) {\n      //loop  cada itemMenu adicioanndo event click para cada index\n      itemMenu.addEventListener(\"click\", function () {\n        ativeTab(index);\n      });\n    });\n  }\n}\n\n//   initTabNav();\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/modules/tabNav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\nfunction initToolTip() {\n  var tooltips = document.querySelectorAll(\"[data-tooltip]\"); // selectorALL  para todos selecionado\n  // percore com forEach e adiciona meu evento\n  tooltips.forEach(function (item) {\n    item.addEventListener(\"mouseover\", onMouseOver); // EVENTO PARA TODOS OS ITEMS COM A CLASS TOOLTIPS\n  });\n\n  //EVENTO PASAR O MOUSE\n  //this resecebe minha function que cria a box tooltips\n  function onMouseOver(event) {\n    var tooltipBox = criarTooltipBox(this); // THIS VAI SER TODO OS ITENS PERCORIDOS COM A CLASS DATA-TOOLTIPS\n    //    tooltipBox.style.top = event.pageY + 'px'//valor de pageY/X é interiro tenho que somar com PX capiturar posição do mouse pageX ,Pagey\n    //    tooltipBox.style.left = event.pageX + 'px '//capiturar posição do mouse pageX ,Pagey\n\n    //atribui meu obj ao event\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener(\"mousemove\", onMouseMove); //\n\n    //atribui meu obj ao event\n    onMouseLeave.tooltipBox = tooltipBox; //minha func que virou OBJ\n    this.addEventListener(\"mouseleave\", onMouseLeave); //evento para indetificar o mouselive no mouseOver / quando tiro e removo o mouse de cima\n  }\n\n  //todo pasar obj como calback para o event\n  //? esta fora do escopo essa func , entao vamos tranformar em um objto que\n  //?recebe O METOdo  handleEvent() Qque nos permite utilizar la dentro  da funtion desejada\n  //funcao quando removo o mouse de cima  de this\n  var onMouseLeave = {\n    handleEvent: function handleEvent() {\n      this.tooltipBox.remove();\n    }\n  };\n\n  //todo pasar obj como calback para o event\n  var onMouseMove = {\n    handleEvent: function handleEvent(event) {\n      this.tooltipBox.style.top = event.pageY + 20 + \"px\"; //valor de pageY/X é interiro tenho que somar com PX capiturar posição do mouse pageX ,Pagey\n      this.tooltipBox.style.left = event.pageX + 10 + \"px \"; //capiturar posição do mouse pageX ,Pagey\n    }\n  };\n\n  // passo para a criação da box tooltips\n  function criarTooltipBox(element) {\n    var tooltipBox = document.createElement(\"div\"); // 1 criar div nova para ela\n    tooltipBox.classList.add(\"tooltip\"); // 2 adicionar class a ela , para style\n    var textDoatributoLabel = element.getAttribute(\"aria-label\"); // 3 puchar o atributo pega o texto das areas label que vao para o tooltips QUE RECEBE O EVENTO DO MOUSE E A CLASS DATA -TOOTIPS\n    tooltipBox.innerText = textDoatributoLabel; // 4 ATRIBUI O TEXTO CAPITURADO A A DIV QUE VAI SER A THIS DA VEZ\n    document.body.appendChild(tooltipBox); //adivionar minha box tooltips ao final do body do documento\n    return tooltipBox; //return final pronto e a box finalizada\n    console.log(tooltipBox);\n  }\n}\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scrollAnimacao_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrollAnimacao.js */ \"./js/modules/scrollAnimacao.js\");\n/* harmony import */ var _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabNav.js */ \"./js/modules/tabNav.js\");\n/* harmony import */ var _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollSuave.js */ \"./js/modules/scrollSuave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_numeros_animados_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/numeros-animados.js */ \"./js/modules/numeros-animados.js\");\n/* harmony import */ var _modules_horarioFuncionamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/horarioFuncionamento.js */ \"./js/modules/horarioFuncionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar scrollSuave = new _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".js-menu a[href^='#']\");\nscrollSuave.init(); //initScrollSuave();\n\n(0,_modules_scrollAnimacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_tabNav_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_numeros_animados_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_horarioFuncionamento_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n\n// //script externo facilmente importado com webpac\n// import $ from \"jquery\"; //teste importação de biblioteca externa com import jquey\n// import _ from \"lodash\"; // teste importação de biblioteca externa com import lodash\n\n// $(\"nav\").hide(); //teste importação de biblioteca externa com import jquey\n\n// const diferenca = _.difference([\"banana\", \"uva\"], [\"uva\", \"morangos\"]); //teste importação de biblioteca externa com import lodash\n// console.log(diferenca);\n\n//# sourceURL=webpack://Animais_Fantasticos/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) {\n  try {\n    var i = n[a](c),\n      u = i.value;\n  } catch (n) {\n    return void e(n);\n  }\n  i.done ? t(u) : Promise.resolve(u).then(r, o);\n}\nfunction _asyncToGenerator(n) {\n  return function () {\n    var t = this,\n      e = arguments;\n    return new Promise(function (r, o) {\n      var a = n.apply(t, e);\n      function _next(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n);\n      }\n      function _throw(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n);\n      }\n      _next(void 0);\n    });\n  };\n}\n\n\n//# sourceURL=webpack://Animais_Fantasticos/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(a, n) {\n  if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n}\n\n\n//# sourceURL=webpack://Animais_Fantasticos/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(e, r) {\n  for (var t = 0; t < r.length; t++) {\n    var o = r[t];\n    o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o.key), o);\n  }\n}\nfunction _createClass(e, r, t) {\n  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", {\n    writable: !1\n  }), e;\n}\n\n\n//# sourceURL=webpack://Animais_Fantasticos/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction toPrimitive(t, r) {\n  if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n\n\n//# sourceURL=webpack://Animais_Fantasticos/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction toPropertyKey(t) {\n  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t, \"string\");\n  return \"symbol\" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i) ? i : i + \"\";\n}\n\n\n//# sourceURL=webpack://Animais_Fantasticos/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n\n//# sourceURL=webpack://Animais_Fantasticos/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorRuntime() {\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return e;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var t,\n    e = {},\n    r = Object.prototype,\n    n = r.hasOwnProperty,\n    o = Object.defineProperty || function (t, e, r) {\n      t[e] = r.value;\n    },\n    i = \"function\" == typeof Symbol ? Symbol : {},\n    a = i.iterator || \"@@iterator\",\n    c = i.asyncIterator || \"@@asyncIterator\",\n    u = i.toStringTag || \"@@toStringTag\";\n  function define(t, e, r) {\n    return Object.defineProperty(t, e, {\n      value: r,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), t[e];\n  }\n  try {\n    define({}, \"\");\n  } catch (t) {\n    define = function define(t, e, r) {\n      return t[e] = r;\n    };\n  }\n  function wrap(t, e, r, n) {\n    var i = e && e.prototype instanceof Generator ? e : Generator,\n      a = Object.create(i.prototype),\n      c = new Context(n || []);\n    return o(a, \"_invoke\", {\n      value: makeInvokeMethod(t, r, c)\n    }), a;\n  }\n  function tryCatch(t, e, r) {\n    try {\n      return {\n        type: \"normal\",\n        arg: t.call(e, r)\n      };\n    } catch (t) {\n      return {\n        type: \"throw\",\n        arg: t\n      };\n    }\n  }\n  e.wrap = wrap;\n  var h = \"suspendedStart\",\n    l = \"suspendedYield\",\n    f = \"executing\",\n    s = \"completed\",\n    y = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var p = {};\n  define(p, a, function () {\n    return this;\n  });\n  var d = Object.getPrototypeOf,\n    v = d && d(d(values([])));\n  v && v !== r && n.call(v, a) && (p = v);\n  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);\n  function defineIteratorMethods(t) {\n    [\"next\", \"throw\", \"return\"].forEach(function (e) {\n      define(t, e, function (t) {\n        return this._invoke(e, t);\n      });\n    });\n  }\n  function AsyncIterator(t, e) {\n    function invoke(r, o, i, a) {\n      var c = tryCatch(t[r], t, o);\n      if (\"throw\" !== c.type) {\n        var u = c.arg,\n          h = u.value;\n        return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) {\n          invoke(\"next\", t, i, a);\n        }, function (t) {\n          invoke(\"throw\", t, i, a);\n        }) : e.resolve(h).then(function (t) {\n          u.value = t, i(u);\n        }, function (t) {\n          return invoke(\"throw\", t, i, a);\n        });\n      }\n      a(c.arg);\n    }\n    var r;\n    o(this, \"_invoke\", {\n      value: function value(t, n) {\n        function callInvokeWithMethodAndArg() {\n          return new e(function (e, r) {\n            invoke(t, n, e, r);\n          });\n        }\n        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(e, r, n) {\n    var o = h;\n    return function (i, a) {\n      if (o === f) throw Error(\"Generator is already running\");\n      if (o === s) {\n        if (\"throw\" === i) throw a;\n        return {\n          value: t,\n          done: !0\n        };\n      }\n      for (n.method = i, n.arg = a;;) {\n        var c = n.delegate;\n        if (c) {\n          var u = maybeInvokeDelegate(c, n);\n          if (u) {\n            if (u === y) continue;\n            return u;\n          }\n        }\n        if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) {\n          if (o === h) throw o = s, n.arg;\n          n.dispatchException(n.arg);\n        } else \"return\" === n.method && n.abrupt(\"return\", n.arg);\n        o = f;\n        var p = tryCatch(e, r, n);\n        if (\"normal\" === p.type) {\n          if (o = n.done ? s : l, p.arg === y) continue;\n          return {\n            value: p.arg,\n            done: n.done\n          };\n        }\n        \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(e, r) {\n    var n = r.method,\n      o = e.iterator[n];\n    if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y;\n    var i = tryCatch(o, e.iterator, r.arg);\n    if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y;\n    var a = i.arg;\n    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y);\n  }\n  function pushTryEntry(t) {\n    var e = {\n      tryLoc: t[0]\n    };\n    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);\n  }\n  function resetTryEntry(t) {\n    var e = t.completion || {};\n    e.type = \"normal\", delete e.arg, t.completion = e;\n  }\n  function Context(t) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], t.forEach(pushTryEntry, this), this.reset(!0);\n  }\n  function values(e) {\n    if (e || \"\" === e) {\n      var r = e[a];\n      if (r) return r.call(e);\n      if (\"function\" == typeof e.next) return e;\n      if (!isNaN(e.length)) {\n        var o = -1,\n          i = function next() {\n            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;\n            return next.value = t, next.done = !0, next;\n          };\n        return i.next = i;\n      }\n    }\n    throw new TypeError(_typeof(e) + \" is not iterable\");\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), o(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) {\n    var e = \"function\" == typeof t && t.constructor;\n    return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name));\n  }, e.mark = function (t) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t;\n  }, e.awrap = function (t) {\n    return {\n      __await: t\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {\n    return this;\n  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {\n    void 0 === i && (i = Promise);\n    var a = new AsyncIterator(wrap(t, r, n, o), i);\n    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {\n      return t.done ? t.value : a.next();\n    });\n  }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () {\n    return this;\n  }), define(g, \"toString\", function () {\n    return \"[object Generator]\";\n  }), e.keys = function (t) {\n    var e = Object(t),\n      r = [];\n    for (var n in e) r.push(n);\n    return r.reverse(), function next() {\n      for (; r.length;) {\n        var t = r.pop();\n        if (t in e) return next.value = t, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, e.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(e) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);\n    },\n    stop: function stop() {\n      this.done = !0;\n      var t = this.tryEntries[0].completion;\n      if (\"throw\" === t.type) throw t.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(e) {\n      if (this.done) throw e;\n      var r = this;\n      function handle(n, o) {\n        return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o;\n      }\n      for (var o = this.tryEntries.length - 1; o >= 0; --o) {\n        var i = this.tryEntries[o],\n          a = i.completion;\n        if (\"root\" === i.tryLoc) return handle(\"end\");\n        if (i.tryLoc <= this.prev) {\n          var c = n.call(i, \"catchLoc\"),\n            u = n.call(i, \"finallyLoc\");\n          if (c && u) {\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\n          } else if (c) {\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\n          } else {\n            if (!u) throw Error(\"try statement without catch or finally\");\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(t, e) {\n      for (var r = this.tryEntries.length - 1; r >= 0; --r) {\n        var o = this.tryEntries[r];\n        if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) {\n          var i = o;\n          break;\n        }\n      }\n      i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);\n      var a = i ? i.completion : {};\n      return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a);\n    },\n    complete: function complete(t, e) {\n      if (\"throw\" === t.type) throw t.arg;\n      return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y;\n    },\n    finish: function finish(t) {\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n        var r = this.tryEntries[e];\n        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;\n      }\n    },\n    \"catch\": function _catch(t) {\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n        var r = this.tryEntries[e];\n        if (r.tryLoc === t) {\n          var n = r.completion;\n          if (\"throw\" === n.type) {\n            var o = n.arg;\n            resetTryEntry(r);\n          }\n          return o;\n        }\n      }\n      throw Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(e, r, n) {\n      return this.delegate = {\n        iterator: values(e),\n        resultName: r,\n        nextLoc: n\n      }, \"next\" === this.method && (this.arg = t), y;\n    }\n  }, e;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://Animais_Fantasticos/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports, _typeof(o);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://Animais_Fantasticos/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://Animais_Fantasticos/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;