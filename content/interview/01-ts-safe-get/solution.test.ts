import { describe, it, expect, expectTypeOf } from 'vitest';
import { safeGet } from './solution';

describe('safeGet', () => {
  const user = { name: 'Harvey', age: 30 };

  it('returns the value when key exists', () => {
    expect(safeGet(user, 'name', 'unknown')).toBe('Harvey');
  });

  it('returns fallback when value is null/undefined', () => {
    const partial = { name: null as string | null };
    expect(safeGet(partial, 'name', 'default')).toBe('default');
  });

  it('infers correct return type without explicit generic', () => {
    const result = safeGet(user, 'name', 'unknown');
    expectTypeOf(result).toEqualTypeOf<string>();

    const age = safeGet(user, 'age', 0);
    expectTypeOf(age).toEqualTypeOf<number>();
  });
});
