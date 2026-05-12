/**
 * Q1：實作 safeGet — 泛型自動推導
 *
 * 題目要求：
 * 寫一個 safeGet 函式，安全地讀取物件的屬性值。
 * 若值為 null 或 undefined，回傳 fallback 預設值。
 * 要求：呼叫端「不需要」手動標注任何泛型，TypeScript 自動推導。
 * 回傳型別必須與屬性型別完全一致（讀 string 就回傳 string，讀 number 就回傳 number）。
 *
 * 核心概念：
 * - `T extends object`：約束 obj 必須是物件型別
 * - `K extends keyof T`：key 只能是 T 的合法屬性名（literal type）
 * - `T[K]`：型別索引，確保 fallback 和回傳值的型別與屬性完全一致
 * - TS 從呼叫時的實際參數自動反推 T 和 K，呼叫端不需明示泛型
 */
export function safeGet<T extends object, K extends keyof T>(
  _obj: T,
  _key: K,
  _fallback: T[K],
): T[K] {
  throw new Error('Not implemented');
}
