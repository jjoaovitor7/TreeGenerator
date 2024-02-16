class Buttons {
  btnAddSubNivel(levelObject) {
    levelObject.level += 3;
  }

  btnSubtractNivel(levelObject) {
    if (levelObject.level >= 3) {
      levelObject.level -= 3;
    }
  }

  btnNoPrincipal(treeViewer, levelObject, valueForTree) {
    treeViewer.value += `${valueForTree.value}\n`;
    levelObject.level = 0;
    valueForTree.value = "";
  }

  btnNoFilho(treeViewer, levelObject, valueForTree) {
    treeViewer.value += `│${" "
      .repeat(levelObject.level)}├──${valueForTree.value
      }\n`;
    valueForTree.value = "";
  }

  btnNoFinal(treeViewer, levelObject, valueForTree) {
    treeViewer.value += `│${" "
      .repeat(levelObject.level)}└──${valueForTree.value
      }\n`;
    valueForTree.value = "";
  }

  btnLimpar(levelObject, treeViewer) {
    levelObject.level = 2;
    treeViewer.value = "";
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
              text = text
                .replace(">".repeat(i) + ".", `│${" ".repeat(1)}└──`);
            }
            else {
              text = text
                .replace(">".repeat(i) + ".", `│${" ".repeat(i * 2.5)}└──`);
            }
          }

          while (text.includes(">".repeat(i))) {
            if (i == 0) {
              text = text.
                replace(">".repeat(i), `│${" ".repeat(2)}├──`);
            }
            else {
              text = text
                .replace(">".repeat(i), `│${" ".repeat(i * 2.5)}├──`);
            }
          }
        }
        treeViewer.value = text;
      });
    });
  }

  btnExportar(treeViewer) {
    var content = treeViewer.value.replaceAll(/\n/g, '')
      .replaceAll(/\s\s\s/g, '>')
      .replaceAll(/\s/g, '')
      .replaceAll("│", "\n")
      .replaceAll("├──", ">")
      .replaceAll("└──", ">.");

    var blob = new Blob([content], { type: 'text/plain' });

    var url = URL.createObjectURL(blob);

    var link = document.createElement('a');
    link.href = url;
    link.download = `${crypto.getRandomValues(new Uint8Array(4)).join("")}.tree`
    link.click();

    URL.revokeObjectURL(url);
  }
}

export default new Buttons();