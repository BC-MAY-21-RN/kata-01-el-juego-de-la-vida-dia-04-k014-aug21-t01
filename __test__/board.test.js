/* eslint-disable no-undef */
import { Cell } from "../src/cell.js";
import { LIVE, DEAD } from "../src/state.js";
import { Board } from "../src/board.js";
import { validCoords, invalidCoords, neighbours } from "../src/utils/coord.js";

describe("board", () => {
  let board;

  beforeEach(async () => {
    let firstGeneration = [
      [new Cell(DEAD), new Cell(DEAD)],
      [new Cell(LIVE), new Cell(DEAD)],
    ];
    board = new Board(firstGeneration);
  });

  test("should create a board", () => {
    const expectedBoard = [
      [new Cell(DEAD), new Cell(DEAD)],
      [new Cell(LIVE), new Cell(DEAD)],
    ];
    expect(board.getMatrix()).toStrictEqual(expectedBoard);
  });

  describe("cell position", () => {
    test("should belongs to board", () => {
      expectCoords(board, validCoords, true);
    });

    test("shouldn't belongs to board", () => {
      expectCoords(board, invalidCoords, false);
    });
  });

  test("should get a neighbours", () => {
    const neighs = neighbours({ row: 1, col: 1 });
    const expectNeighs = [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ];
    expect(neighs).toStrictEqual(expectNeighs);
  });

  test("should get a cell", () => {
    const cell = board.getCell({ x: 1, y: 0 });
    expect(cell.isAlive());
  });

  test("should count live neighbours", () => {
    const liveNeighbours = board.countLiveNeighbours({ x: 0, y: 0 });
    expect(liveNeighbours).toBe(1);
  });
});

function expectCoords(board, coords, bool) {
  coords.forEach((coord) => {
    const [x, y] = coord;
    expect(board.isCoordValid({ x, y })).toBe(bool);
  });
}
