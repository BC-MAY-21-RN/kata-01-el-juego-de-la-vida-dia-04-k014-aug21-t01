import { neighbours } from "./utils/coord";

export class Board {
  constructor(matrix) {
    this.matrix = matrix;
    this.rows = matrix.length;
    this.cols = matrix[0].length;
  }

  getMatrix() {
    return this.matrix;
  }

  isCoordValid(coord) {
    const { x, y } = coord;
    const isXValid = x >= 0 && x < this.rows;
    const isYValid = y >= 0 && y < this.cols;
    return isXValid && isYValid;
  }

  getCell(coord) {
    const { x, y } = coord;
    return this.matrix[x][y];
  }

  countLiveNeighbours(coord) {
    const { x, y } = coord;
    const totalNeighbours = neighbours({ row: x, col: y });
    let neighboursCounter = 0;
    totalNeighbours.forEach((currCoord) => {
      const [x, y] = currCoord;
      if (this.isCoordValid({ x, y }) && this.getCell({ x, y }).isAlive()) {
        neighboursCounter += 1;
      }
    });
    return neighboursCounter;
  }
}
