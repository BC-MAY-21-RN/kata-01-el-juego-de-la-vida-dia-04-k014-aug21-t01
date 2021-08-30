export const invalidCoords = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [-1, 2],
  [0, 2],
  [0, -1],
  [1, -1],
  [1, 2],
  [2, -1],
  [2, 0],
  [2, 1],
  [2, 2],
];

export const validCoords = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

export function neighbours(coord) {
  const { row, col } = coord;
  return [
    [row - 1, col - 1],
    [row - 1, col],
    [row - 1, col + 1],
    [row, col - 1],
    [row, col + 1],
    [row + 1, col - 1],
    [row + 1, col],
    [row + 1, col + 1],
  ];
}
