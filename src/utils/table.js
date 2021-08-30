import { Cell } from "../cell.js";

var board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

var expectBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

function plantCell(matrix) {
  matrix.forEach((row, x) => {
    row.forEach((col, y) => {
      matrix[x][y] = new Cell(col);
    });
  });

  return board;
}

const firstGeneration = plantCell(board);
const expectGeneration = plantCell(expectBoard);

export { firstGeneration, expectGeneration };
