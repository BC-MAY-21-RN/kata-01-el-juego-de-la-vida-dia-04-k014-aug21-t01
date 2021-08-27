/* eslint-disable no-undef */
import { Cell } from "../src/cell.js";
import { LIVE, DEAD } from "../src/state.js";

describe("Cell", () => {
  let cell;

  beforeEach(async () => {
    cell = new Cell(LIVE);
  });

  test("should create a instance of cell", () => {
    expect(cell.getState()).toBe(LIVE);
  });

  test("should kill a cell", () => {
    cell.kill();
    expect(cell.getState()).toBe(DEAD);
  });

  test("should alive a cell", () => {
    cell.kill();
    cell.alive();
    expect(cell.getState()).toBe(LIVE);
  });

  describe('should validate the state of cell', () => {
    test("is alive", () => {
      expect(cell.isAlive()).toBeTruthy();
    });
    
    test("is not alive", () => {
      cell.kill();
      expect(cell.isAlive()).toBeFalsy();
    });
  });
});
