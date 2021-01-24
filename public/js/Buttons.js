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
    treeViewer.innerHTML += `│${" ".repeat(levelObject.level)}├──${
      valueForTree.value
    }\n`;
    valueForTree.value = "";
  }

  btnNoFinal(treeViewer, levelObject, valueForTree) {
    treeViewer.innerHTML += `│${" ".repeat(levelObject.level)}└──${
      valueForTree.value
    }\n`;
    valueForTree.value = "";
  }

  btnLimpar(levelObject, treeViewer) {
    levelObject.level = 2;
    treeViewer.innerHTML = "";
  }

  btnPorArquivo(treeViewer) {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", ".tree");
    input.click();
    input.addEventListener("change", (event) => {
      const file = event.target.files.item(0);
      file.text().then((text) => {
        for (let i = text.length; i >= 1; i--) {
          while (text.includes(">".repeat(i) + ".")) {
            if (i == 0) {
              text = text.replace(">".repeat(i) + ".", `│${" ".repeat(2)}└──`);
            }
            else {
              text = text.replace(">".repeat(i) + ".", `│${" ".repeat(i*2.5)}└──`);
            }
          }

          while (text.includes(">".repeat(i))) {
            if (i == 0) {
              text = text.replace(">".repeat(i), `│${" ".repeat(2)}├──`);
            }
            else {
              text = text.replace(">".repeat(i), `│${" ".repeat(i*2.5)}├──`);
            }
          }
        }
        treeViewer.innerHTML = text;
      });
    });
  }
}

export default new Buttons();
