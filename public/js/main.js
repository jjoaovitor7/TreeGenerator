const valueForTree = document.getElementById("valueForTree");
const treeViewer = document.getElementById("treeViewer");
let level = 2;

document.getElementById("btn-noprincipal").addEventListener("click", function () {
    treeViewer.innerHTML += `${valueForTree.value}\n`;
    level = 2;
    valueForTree.value = "";
});

document.getElementById("btn-nofilho").addEventListener("click", function () {
  treeViewer.innerHTML += `│${" ".repeat(level)}├──${valueForTree.value}\n`;
  valueForTree.value = "";
});

document.getElementById("btn-addsubnivel").addEventListener("click", function () {
  level += 3;
});

document.getElementById("btn-subtractsubnivel").addEventListener("click", function () {
  level -= 3;
});

document.getElementById("btn-nofinal").addEventListener("click", function () {
  treeViewer.innerHTML += `│${" ".repeat(level)}└──${valueForTree.value}\n`;
  valueForTree.value = "";
});

document.getElementById("btn-limpar").addEventListener("click", function() {
  level = 2;
  treeViewer.innerHTML = "";
});