/* eslint-disable no-void */
import {immer} from '../utils/immer';
import create from 'zustand';
import {GamesQueryType} from '../utils/types';

type GamesStore = {
  search: string;
  games: GamesQueryType[] | undefined | null;
  loading: boolean;
  setSearch: (search: string) => void;
  setGames: (games: GamesQueryType[] | undefined | null) => void;
  setLoading: (loading: boolean) => void;
};

const useGamesStore = create<GamesStore>(
  immer(
    (set): GamesStore => ({
      search: 'god of war',
      games: undefined,
      loading: false,
      setSearch: search => set(state => void (state.search = search)),
      setGames: games =>
        set(state => {
          state.games = games;
          state.setLoading(false);
        }),
      setLoading: loading => set(state => void (state.loading = loading)),
    }),
  ),
);

export default useGamesStore;
