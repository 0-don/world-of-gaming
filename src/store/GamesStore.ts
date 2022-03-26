import {immer} from '../utils/immer';
import create from 'zustand';

type GamesStore = {
  searchTerm: string;
  setSearchTerm: (search: string) => void;
};

const useGameStore = create<GamesStore>(
  immer(
    (set): GamesStore => ({
      searchTerm: '',
      setSearchTerm: (search: string) =>
        set(state => void (state.searchTerm = search)),
    }),
  ),
);

export default useGameStore;
