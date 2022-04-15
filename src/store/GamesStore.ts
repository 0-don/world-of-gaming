/* eslint-disable no-void */
import {immer} from '../utils/utils';
import create from 'zustand';
import {GamesQueryType} from '../utils/types';

type GamesStore = {
  search: string;
  games: GamesQueryType[] | undefined | null;
  loading: boolean;
  endReached: boolean;
  setSearch: (search: string) => void;
  setGames: (games: GamesQueryType[] | undefined | null) => void;
  setLoading: (loading: boolean) => void;
  setEndReached: (endReached: boolean) => void;
};

const useGamesStore = create<GamesStore>(
  immer(
    (set): GamesStore => ({
      search: '',
      games: undefined,
      loading: false,
      endReached: false,
      setSearch: search => set(state => void (state.search = search)),
      setGames: games =>
        set(state => {
          state.games = games;
          state.setLoading(false);
        }),
      setLoading: loading => set(state => void (state.loading = loading)),
      setEndReached: endReached =>
        set(state => void (state.endReached = endReached)),
    }),
  ),
);

export default useGamesStore;
