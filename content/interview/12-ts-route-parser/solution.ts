export type ExtractRouteParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? {
        [K in Param | keyof ExtractRouteParams<`/${Rest}`>]: string;
      }
    : T extends `${string}:${infer Param}`
      ? { [K in Param]: string }
      : // eslint-disable-next-line @typescript-eslint/no-empty-object-type
        {};
