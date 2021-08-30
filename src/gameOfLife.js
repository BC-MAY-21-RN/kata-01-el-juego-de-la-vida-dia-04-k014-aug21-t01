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
    if (
      matrix[x][y].isAlive() &&
      (totalNeighbours < 2 || totalNeighbours > 3)
    ) {
      matrix[x][y].kill();
    }

    if (!matrix[x][y].isAlive() && totalNeighbours == 3) {
      matrix[x][y].alive();
    }
  }

  printGrid(grid) {
    let print = "";
    grid.forEach((row) => {
      row.forEach((col) => {
        print += col.getState();
      });
      print += "\n";
    });
    console.log(print);
  }
}
