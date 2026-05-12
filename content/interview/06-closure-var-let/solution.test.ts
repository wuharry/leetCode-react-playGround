import { describe, it, expect } from "vitest";
import { createVarClosures, createLetClosures } from "./solution";

describe("Q6: var vs let Closure", () => {
  it("使用 var 的閉包，所有的函式都會綁定到同一個變數的最終狀態", () => {
    const varFuncs = createVarClosures();

    expect(varFuncs[0]!()).toBe(3);
    expect(varFuncs[1]!()).toBe(3);
    expect(varFuncs[2]!()).toBe(3);
  });

  it("使用 let 的閉包，每次迴圈迭代都會產生新的區塊作用域 (Block Scope)", () => {
    const letFuncs = createLetClosures();

    expect(letFuncs[0]!()).toBe(0);
    expect(letFuncs[1]!()).toBe(1);
    expect(letFuncs[2]!()).toBe(2);
  });
});

// 答案：
// /* eslint-disable no-var */
// export function createVarClosures() {
//   const arr: Array<() => number> = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(() => i);
//   }
//   return arr;
// }
// /* eslint-enable no-var */
//
// export function createLetClosures() {
//   const arr: Array<() => number> = [];
//   for (let i = 0; i < 3; i++) {
//     arr.push(() => i);
//   }
//   return arr;
// }
