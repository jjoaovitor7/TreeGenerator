class Buttons {
  btnAddSubNivel(levelObject) {
    levelObject.level += 3;
  }

  btnSubtractNivel(levelObject) {
    levelObject.level -= 3;
  }

  btnNoPrincipal(treeViewer, levelObject, valueForTree) {
    treeViewer.innerHTML += `${valueForTree.value}\n`;
    levelObject.level = 2;
    valueForTree.value = "";
  }

  btnNoFilho(treeViewer, levelObject, valueForTree) {
    treeViewer.innerHTML += `│${" ".repeat(levelObject.level)}├──${valueForTree.value}\n`;
    valueForTree.value = "";
  }

  btnNoFinal(treeViewer, levelObject, valueForTree) {
    treeViewer.innerHTML += `│${" ".repeat(levelObject.level)}└──${valueForTree.value}\n`;
    valueForTree.value = "";
  }

  btnLimpar(levelObject, treeViewer) {
    levelObject.level = 2;
    treeViewer.innerHTML = "";
  }
}

export default new Buttons();