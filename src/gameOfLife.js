export class GameOfLife {
  constructor(board) {
    this.board = board;
  }

  getNextGeneration() {
    const matrix = this.board.getMatrix();
    matrix.forEach((row, x) => {
      row.forEach((_col, y) => {
        const totalLiveNeighbours = this.board.countLiveNeighbours(x, y);
        this.applyRules(matrix, totalLiveNeighbours, x, y);
      });
    });
    return matrix;
  }

  applyRules(matrix, totalNeighbours, x, y) {
    let cell = matrix[x][y];
    if (cell.isAlive() && this.validateLiveCells(totalNeighbours)) {
      cell.kill();
    }

    if (!cell.isAlive() && totalNeighbours == 3) {
      cell.alive();
    }
  }

  validateLiveCells(neighbours) {
    return neighbours < 2 || neighbours > 3;
  }

}
