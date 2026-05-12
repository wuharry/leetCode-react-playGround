/**
 * Q12：TypeScript 型別體操 — ExtractRouteParams
 *
 * 題目要求：
 * 實作一個型別 ExtractRouteParams<T>，能從路由字串中提取動態參數。
 *
 * 範例：
 * ExtractRouteParams<"/user/:id">                        → { id: string }
 * ExtractRouteParams<"/user/:userId/post/:postId">       → { userId: string; postId: string }
 * ExtractRouteParams<"/about/us">                        → {}
 *
 * 提示：
 * - 使用 Template Literal Types 搭配 infer 提取參數名稱
 * - 使用遞迴型別處理多個參數
 * - 參數格式為 :paramName，以 / 分隔
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type ExtractRouteParams<T extends string> = {};
