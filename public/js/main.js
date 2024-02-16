import Buttons from "./Buttons.js";

const valueForTree = document.getElementById("valueForTree");
const treeViewer = document.getElementById("treeViewer");

let levelObject = {
  level: 0
};

const textLevelObject = document.querySelector("#level-object span");
const btnAddSubNivel = document.getElementById("btn-addsubnivel");
const btnSubtractNivel = document.getElementById("btn-subtractsubnivel");
const btnNoPrincipal = document.getElementById("btn-noprincipal");
const btnNoFilho = document.getElementById("btn-nofilho");
const btnNoFinal = document.getElementById("btn-nofinal");
const btnLimpar = document.getElementById("btn-limpar");
const btnPorArquivo = document.getElementById("btn-fromfile");
const btnExportar = document.getElementById("btn-export");

textLevelObject.textContent = levelObject.level;

btnAddSubNivel.addEventListener("click", function () {
  Buttons.btnAddSubNivel(levelObject);
  textLevelObject.textContent = parseInt(levelObject.level / 3);
});

btnSubtractNivel.addEventListener("click", function () {
  Buttons.btnSubtractNivel(levelObject);
  textLevelObject.textContent = parseInt(levelObject.level / 3);
});

btnNoPrincipal.addEventListener("click", function () {
  if (valueForTree.value.trim() != "") {
    Buttons.btnNoPrincipal(treeViewer, levelObject, valueForTree);
    textLevelObject.textContent = parseInt(levelObject.level / 3);
  }
});

btnNoFilho.addEventListener("click", function () {
  if (valueForTree.value.trim() != "") {
    Buttons.btnNoFilho(treeViewer, levelObject, valueForTree);
    textLevelObject.textContent = parseInt(levelObject.level / 3);
  }
});

btnNoFinal.addEventListener("click", function () {
  if (valueForTree.value.trim() != "") {
    Buttons.btnNoFinal(treeViewer, levelObject, valueForTree);
    textLevelObject.textContent = parseInt(levelObject.level / 3);
  }
});

btnLimpar.addEventListener("click", function () {
  Buttons.btnLimpar(levelObject, treeViewer);
  textLevelObject.textContent = parseInt(levelObject.level / 3);
});

btnPorArquivo.addEventListener("click", function () {
  Buttons.btnPorArquivo(treeViewer);
  textLevelObject.textContent = parseInt(levelObject.level / 3);
});

btnExportar.addEventListener('click', function () {
  Buttons.btnExportar(treeViewer);
  textLevelObject.textContent = parseInt(levelObject.level / 3);
});