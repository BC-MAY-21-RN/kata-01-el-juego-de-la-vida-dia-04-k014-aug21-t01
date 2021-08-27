import { LIVE, DEAD } from "./state.js";

export class Cell {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  kill() {
    this.state = DEAD;
  }

  alive() {
    this.state = LIVE;
  }

  isAlive() {
    return this.state === LIVE;
  }
}
