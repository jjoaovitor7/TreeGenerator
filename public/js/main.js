const valueForTree = document.getElementById("valueForTree");
const treeViewer = document.getElementById("treeViewer");

valueForTree.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    if (treeViewer.textContent == "") {
        treeViewer.textContent += `├──${valueForTree.value}\n`;
    }
    else {
        treeViewer.textContent += `│  ├──${valueForTree.value}\n`
    }
  }
});
