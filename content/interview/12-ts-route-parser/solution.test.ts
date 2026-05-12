import { describe, it, expectTypeOf } from "vitest";
import type { ExtractRouteParams } from "./solution";

describe("TS Type: ExtractRouteParams", () => {
  it("應該能從單一動態路由中提取參數", () => {
    type Param = ExtractRouteParams<"/user/:id">;
    expectTypeOf<Param>().toEqualTypeOf<{ id: string }>();
  });

  it("應該能從多個動態路由中提取參數", () => {
    type Params = ExtractRouteParams<"/user/:userId/post/:postId/comment">;
    expectTypeOf<Params>().toEqualTypeOf<{ userId: string; postId: string }>();
  });

  it("沒有動態參數時，應該回傳空物件", () => {
    type Param = ExtractRouteParams<"/about/us">;
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    expectTypeOf<Param>().toEqualTypeOf<{}>();
  });
});
