import produce, {Draft} from 'immer';
import {State, StateCreator} from 'zustand';

export const immer =
  <T extends State>(
    config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>,
  ): StateCreator<T> =>
  (set, get, api) =>
    config(fn => set(produce<T>(fn)), get, api);

export const colorHexString = (rating: number) => {
  if (rating >= 75) {
    return '#66cc33';
  } else if (rating >= 50) {
    return '#ffcc33';
  } else {
    return '#ff0000';
  }
};
