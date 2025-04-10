import initAnimationScrrol from "./modules/scrollAnimacao.js";
import initTabNav from "./modules/tabNav.js";
import ScrollSuave from "./modules/scrollSuave.js";
import initAccordion from "./modules/accordion.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initNumerosAnimados from "./modules/numeros-animados.js";
import initHorarioFuncionamento from "./modules/horarioFuncionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave(".js-menu a[href^='#']"); scrollSuave.init(); //initScrollSuave();

initAnimationScrrol();
initTabNav();
initAccordion();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initNumerosAnimados();
initHorarioFuncionamento();
initFetchAnimais();
initFetchBitcoin();

// //script externo facilmente importado com webpac
// import $ from "jquery"; //teste importação de biblioteca externa com import jquey
// import _ from "lodash"; // teste importação de biblioteca externa com import lodash

// $("nav").hide(); //teste importação de biblioteca externa com import jquey

// const diferenca = _.difference(["banana", "uva"], ["uva", "morangos"]); //teste importação de biblioteca externa com import lodash
// console.log(diferenca);
