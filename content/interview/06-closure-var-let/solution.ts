/**
 * Q6：var vs let 閉包行為差異
 *
 * 題目要求：
 * 實作兩個函式：
 * 1. createVarClosures：用 var 建立一個包含 3 個函式的陣列，每個函式回傳對應迴圈的索引值
 * 2. createLetClosures：用 let 建立相同結構
 *
 * 觀察：
 * - var 宣告的變數沒有區塊作用域，所有閉包共享同一個 i
 * - let 宣告的變數每次迭代都會產生新的區塊作用域，各閉包捕捉各自的 i
 *
 * 預期結果：
 * createVarClosures()[0]() === 3  (所有函式都回傳最終值 3)
 * createLetClosures()[0]() === 0  (各函式回傳各自的迭代值)
 */
export function createVarClosures(): Array<() => number> {
  throw new Error("Not implemented");
}

export function createLetClosures(): Array<() => number> {
  throw new Error("Not implemented");
}

// const varFuncs = createVarClosures();
// varFuncs[0](); // 觸發第一個閉包
// varFuncs[1](); // 觸發第二個閉包
// varFuncs[2](); // 觸發第三個閉包

// console.log("-------------------");

// const letFuncs = createLetClosures();
// letFuncs[0]();
// letFuncs[1]();
// letFuncs[2]();
