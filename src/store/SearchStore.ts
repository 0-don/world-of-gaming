import {immer} from '../utils/immer';
import create from 'zustand';

type SearchStore = {
  searchTerm: string;
  setSearchTerm: (search: string) => void;
};

const useSearchStore = create<SearchStore>(
  immer(
    (set): SearchStore => ({
      searchTerm: '',
      setSearchTerm: (search: string) =>
        set(state => void (state.searchTerm = search)),
    }),
  ),
);

export default useSearchStore;
