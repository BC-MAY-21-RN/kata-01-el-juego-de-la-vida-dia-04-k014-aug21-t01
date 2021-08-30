function appendCol(accum, row) {
  return row.forEach((col) => appendRow(accum, col));
}

function appendRow(accum, cell) {
  return accum + (cell.getState() + "\n");
}

function printBoard(grid) {
  let total = grid.reduce((accum, row) => appendCol(accum, row));
  console.log(total);
}

export { printBoard };
