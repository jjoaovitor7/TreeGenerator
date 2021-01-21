import Buttons from "./Buttons.js";

const valueForTree = document.getElementById("valueForTree");
const treeViewer   = document.getElementById("treeViewer");

let levelObject = {
  level: 2
};

const btnAddSubNivel   = document.getElementById("btn-addsubnivel");
const btnSubtractNivel = document.getElementById("btn-subtractsubnivel");
const btnNoPrincipal   = document.getElementById("btn-noprincipal");
const btnNoFilho       = document.getElementById("btn-nofilho");
const btnNoFinal       = document.getElementById("btn-nofinal");
const btnLimpar        = document.getElementById("btn-limpar");

btnAddSubNivel.addEventListener("click", function () {
  Buttons.btnAddSubNivel(levelObject);
});

btnSubtractNivel.addEventListener("click", function () {
  Buttons.btnSubtractNivel(levelObject);
});

btnNoPrincipal.addEventListener("click", function () {
  Buttons.btnNoPrincipal(treeViewer, levelObject, valueForTree);
});

btnNoFilho.addEventListener("click", function () {
  Buttons.btnNoFilho(treeViewer, levelObject, valueForTree);
});

btnNoFinal.addEventListener("click", function () {
  Buttons.btnNoFinal(treeViewer, levelObject, valueForTree);
});

btnLimpar.addEventListener("click", function () {
  Buttons.btnLimpar(levelObject, treeViewer);
});