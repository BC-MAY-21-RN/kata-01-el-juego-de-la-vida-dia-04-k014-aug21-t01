/* eslint-disable no-undef */
import { GameOfLife } from "../src/gameOfLife.js";
import { Board } from "../src/board.js";
import { expectGeneration, firstGeneration } from "../src/utils/table.js";

describe("Game Of Life", () => {
  test("should generate the next generation", () => {
    const actualBoard = new Board(firstGeneration);
    const expectBoard = expectGeneration;
    const game = new GameOfLife(actualBoard);
    expect(game.getNextGeneration()).toBe(expectBoard);
  });
});
