/* eslint-disable no-var */
export function createVarClosures() {
  const arr: Array<() => number> = [];
  for (var i = 0; i < 3; i++) {
    arr.push(() => i);
  }
  return arr;
}
/* eslint-enable no-var */

export function createLetClosures() {
  const arr: Array<() => number> = [];
  for (let i = 0; i < 3; i++) {
    arr.push(() => i);
  }
  return arr;
}
