export function addNewCell(gameBoard) {
  const gameBoardCells = [];
  const existingCellsCount = gameBoard.querySelectorAll(".cell").length;
  console.log(existingCellsCount);

  for (let i = 0; i < 10; i++) {
    const newCell = document.createElement("div");
    newCell.classList.add("newcell");
    newCell.setAttribute("data-index", existingCellsCount + i);
    gameBoard.prepend(newCell);
    gameBoardCells.push(newCell);
  }
  console.log(gameBoard.firstChild);
}
