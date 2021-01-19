const valueForTree = document.getElementById("valueForTree");
const treeViewer = document.getElementById("treeViewer");
let level = 2;

valueForTree.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    if (treeViewer.textContent == "") {
      treeViewer.innerHTML += `├──${valueForTree.value}\n`;
    } else {
      treeViewer.innerHTML += `│${" ".repeat(level)}├──${valueForTree.value}\n`;
    }
  }
});

document.getElementById("btn-subnivel").addEventListener("click", function () {
  level += 3;
  treeViewer.innerHTML += `│${" ".repeat(level)}└──${valueForTree.value}\n`;
  level += 3;
});

document.getElementById("btn-nofinal").addEventListener("click", function () {
  treeViewer.innerHTML += `│${" ".repeat(level)}└──${valueForTree.value}\n`;
});
