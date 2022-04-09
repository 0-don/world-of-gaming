/* eslint-disable no-void */
import {immer} from '../utils/immer';
import create from 'zustand';
import {GamesQuery} from '../graphql/generated/graphql';

type GamesStore = {
  search: string;
  games: GamesQuery['games'] | undefined;
  loading: boolean;
  setSearch: (search: string) => void;
  setGames: (games: GamesQuery['games'] | undefined) => void;
  setLoading: (loading: boolean) => void;
};

const useGamesStore = create<GamesStore>(
  immer(
    (set): GamesStore => ({
      search: '',
      games: undefined,
      loading: false,
      setSearch: search => set(state => void (state.search = search)),
      setGames: games => set(state => void (state.games = games)),
      setLoading: loading => set(state => void (state.loading = loading)),
    }),
  ),
);

export default useGamesStore;
