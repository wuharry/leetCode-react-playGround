import { useSyncExternalStore, useEffect, useRef, useCallback } from "react";

/**
 * Q11：實作 Mini Zustand — 自訂狀態管理
 *
 * 題目要求：
 * 1. createStore<TState>(initialState)
 *    建立一個 store，包含：
 *    - getState()：回傳目前狀態
 *    - setState(nextState)：更新狀態並通知所有訂閱者
 *    - subscribe(listener)：訂閱狀態變更，回傳取消訂閱的函式
 *
 * 2. useStore(store, selector)
 *    React hook，讓元件訂閱 store 中的特定狀態切片：
 *    - 使用 useSyncExternalStore 確保 React concurrent mode 安全
 *    - selector 改變時不應造成多餘的 re-render
 *    - 只有 selector 回傳值真正變化時才觸發 re-render
 */
export function createStore<TState>(_initialState: TState): {
  getState: () => TState;
  setState: (nextState: TState) => void;
  subscribe: (listener: () => void) => () => void;
} {
  throw new Error('Not implemented');
}

export function useStore<TState, TSlice>(
  _store: ReturnType<typeof createStore<TState>>,
  _selector: (state: TState) => TSlice,
): TSlice {
  void useSyncExternalStore;
  void useEffect;
  void useRef;
  void useCallback;
  throw new Error('Not implemented');
}
