import create from 'zustand';
import { Anime } from '@/src/types';

export interface FavoriteAnimeStore {
  animes?: Anime[];
  setFavoriteAnimes: (anime?: Anime) => void;
  removeFromFavorite: (anime?: Anime) => void;
}

export const useFavoriteAnimes = create<FavoriteAnimeStore>((set) => ({
  animes: [],
  setFavoriteAnimes: (anime?: Anime) =>
    set((state) => ({ animes: [...state.animes, anime] })),
  removeFromFavorite: (anime?: Anime) =>
    set((state) => ({
      animes: state.animes.filter((item) => item.mal_id !== anime.mal_id),
    })),
}));

export default useFavoriteAnimes;
