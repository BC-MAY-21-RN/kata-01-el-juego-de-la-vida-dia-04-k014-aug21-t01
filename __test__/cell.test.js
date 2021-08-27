import { Cell } from "../src/cell.js";

describe("Cell", () => {
  test("should create a instance of cell", () => {
    const cell = new Cell("*");
    expect(cell.getState()).toBe("*");
  });
});
