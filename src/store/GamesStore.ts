/* eslint-disable no-void */
import {immer} from '../utils/utils';
import create from 'zustand';
import {GameDetailsQueryType, GamesQueryType} from '../utils/types';

type GamesStore = {
  search: string;
  games?: GamesQueryType[] | null;
  gameDetails?: GameDetailsQueryType | null;
  loading: boolean;
  endReached: boolean;
  setSearch: (search: string) => void;
  setGames: (games?: GamesQueryType[] | null) => void;
  setGameDetails: (gameDetails?: GameDetailsQueryType[] | null) => void;
  setLoading: (loading: boolean) => void;
  setEndReached: (endReached: boolean) => void;
};

const useGamesStore = create<GamesStore>(
  immer(
    (set): GamesStore => ({
      search: '',
      games: undefined,
      gameDetails: undefined,
      loading: false,
      endReached: false,
      setSearch: search => set(state => void (state.search = search)),
      setGames: games =>
        set(state => {
          state.games = games;
          state.setLoading(false);
        }),
      setGameDetails: gameDetails =>
        set(
          state =>
            void (gameDetails
              ? (state.gameDetails = gameDetails[0])
              : undefined),
        ),
      setLoading: loading => set(state => void (state.loading = loading)),
      setEndReached: endReached =>
        set(state => void (state.endReached = endReached)),
    }),
  ),
);

export default useGamesStore;
