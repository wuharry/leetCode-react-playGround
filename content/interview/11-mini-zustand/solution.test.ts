import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
import { createStore, useStore } from "./solution";

describe("Mini Zustand", () => {
  it("應該能正確讀取與更新狀態", () => {
    const store = createStore({ count: 0, text: "hello" });

    expect(store.getState().count).toBe(0);

    store.setState({ count: 1, text: "hello" });
    expect(store.getState().count).toBe(1);
  });

  it("React Component 應該能訂閱特定狀態，並在更新時觸發 re-render", () => {
    const store = createStore({ count: 0, text: "hello" });
    const { result } = renderHook(() =>
      useStore(store, (state) => state.count),
    );

    expect(result.current).toBe(0);

    act(() => {
      store.setState({ count: 5, text: "hello" });
    });

    expect(result.current).toBe(5);
  });
});

// 答案：
// import { useSyncExternalStore, useEffect, useRef, useCallback } from "react";
//
// export function createStore<TState>(initialState: TState) {
//   let state = initialState;
//   const listeners = new Set<() => void>();
//
//   const getState = () => state;
//
//   const setState = (nextState: TState) => {
//     state = nextState;
//     listeners.forEach((listener) => listener());
//   };
//
//   const subscribe = (listener: () => void) => {
//     listeners.add(listener);
//     return () => {
//       listeners.delete(listener);
//     };
//   };
//
//   return { getState, setState, subscribe };
// }
//
// export function useStore<TState, TSlice>(
//   store: ReturnType<typeof createStore<TState>>,
//   selector: (state: TState) => TSlice,
// ): TSlice {
//   const selectorRef = useRef(selector);
//   const sliceRef = useRef(selector(store.getState()));
//
//   useEffect(() => {
//     selectorRef.current = selector;
//   }, [selector]);
//
//   const getSnapshot = useCallback(() => {
//     const nextSlice = selectorRef.current(store.getState());
//     const previousSlice = sliceRef.current;
//
//     if (Object.is(previousSlice, nextSlice)) {
//       return previousSlice;
//     }
//
//     sliceRef.current = nextSlice;
//     return nextSlice;
//   }, [store]);
//
//   return useSyncExternalStore(store.subscribe, getSnapshot, getSnapshot);
// }
