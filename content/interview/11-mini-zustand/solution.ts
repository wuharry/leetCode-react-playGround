import { useSyncExternalStore, useEffect, useRef, useCallback } from "react";

export function createStore<TState>(initialState: TState) {
  let state = initialState;
  const listeners = new Set<() => void>();

  const getState = () => state;

  const setState = (nextState: TState) => {
    state = nextState;
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  return { getState, setState, subscribe };
}

export function useStore<TState, TSlice>(
  store: ReturnType<typeof createStore<TState>>,
  selector: (state: TState) => TSlice,
): TSlice {
  const selectorRef = useRef(selector);
  const sliceRef = useRef(selector(store.getState()));

  useEffect(() => {
    selectorRef.current = selector;
  }, [selector]);

  const getSnapshot = useCallback(() => {
    const nextSlice = selectorRef.current(store.getState());
    const previousSlice = sliceRef.current;

    if (Object.is(previousSlice, nextSlice)) {
      return previousSlice;
    }

    sliceRef.current = nextSlice;
    return nextSlice;
  }, [store]);

  return useSyncExternalStore(store.subscribe, getSnapshot, getSnapshot);
}
