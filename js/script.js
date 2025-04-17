import TabNav from "./modules/tabNav.js";
import initScrollSuave from "./modules/scrollSuave.js";
import Accordion from "./modules/accordion.js";
import Modal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initNumerosAnimados from "./modules/numeros-animados.js";
import initHorarioFuncionamento from "./modules/horarioFuncionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimationScrrol from "./modules/scrollAnimacao.js";







const accordion = new Accordion("[data-anime='accordion'] dt"); //instancia a classe accordion
accordion.init(); //inicializa a classe accordion

const tabNav = new TabNav('[data-tab="menuImg"] li', '[data-tab="content"] section');//seletor do conteudo e do menu como argumento
tabNav.init();//inicializa a classe TabNav

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]'); //seletor do conteudo e do menu como argumento
modal.init();//inicializa a classe Modal


//initTabNav();
initScrollSuave();
//initAccordion();
//initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initNumerosAnimados();
initHorarioFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimationScrrol();

// //script externo facilmente importado com webpac
// import $ from "jquery"; //teste importação de biblioteca externa com import jquey
// import _ from "lodash"; // teste importação de biblioteca externa com import lodash

// $("nav").hide(); //teste importação de biblioteca externa com import jquey 

// const diferenca = _.difference(["banana", "uva"], ["uva", "morangos"]); //teste importação de biblioteca externa com import lodash
// console.log(diferenca);
