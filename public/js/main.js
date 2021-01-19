const valueForTree = document.getElementById("valueForTree");
const treeViewer = document.getElementById("treeViewer");
let level = 2;

valueForTree.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    if (treeViewer.textContent == "") {
      treeViewer.textContent += `├──${valueForTree.value}\n`;
    } else {
      treeViewer.textContent += `│${" ".repeat(level)}├──${
        valueForTree.value
      }\n`;
    }
  }
});

document.getElementById("btn-subnivel").addEventListener("click", function () {
  level += 3;
});
