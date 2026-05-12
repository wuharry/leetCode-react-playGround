import { describe, it, expect, expectTypeOf } from "vitest";
import { safeGet } from "./solution";

describe("safeGet 型別推導", () => {
  const user = { name: "Harvey", age: 30 };

  it("讀 string 屬性，回傳型別自動是 string", () => {
    const result = safeGet(user, "name", "unknown");
    //    ^^^^^^ 完全沒標型別
    expectTypeOf(result).toEqualTypeOf<string>();
    //          ^^^^^^ 但 TS 知道是 string
  });

  it("讀 number 屬性，回傳型別自動是 number", () => {
    const result = safeGet(user, "age", 0);
    expectTypeOf(result).toEqualTypeOf<number>();
  });

  it("fallback 型別錯誤時 TS 會擋", () => {
    // @ts-expect-error fallback 應該是 string，不是 number
    safeGet(user, "name", 999);
    //                    ^^^ TS 報錯，因為 user.name 是 string
  });

  it("key 不存在時 TS 會擋", () => {
    // @ts-expect-error 'foo' 不是 user 的合法 key
    safeGet(user, "foo", "bar");
  });

  it("值為 null 時回傳 fallback", () => {
    const partial = { name: null as string | null };
    expect(safeGet(partial, "name", "default")).toBe("default");
  });
});

// 正確寫法：
// export function safeGet<T extends object, K extends keyof T>(
//   obj: T,
//   key: K,
//   fallback: T[K],
// ): T[K] {
//   const value = obj[key];                                 // 存一次
//   if (value === undefined || value === null) {
//     return fallback;
//   }
//   return value;
// }
