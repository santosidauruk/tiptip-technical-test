import useSWR from 'swr';
import fetch from '@/utils/fetch';
import { Anime, AnimeRecommendation } from '../../../types';

interface AnimeResponse {
  data: Anime;
}

interface RecommendedAnimeResponse {
  data: AnimeRecommendation[];
}
const useAnime = (id) => {
  const url = `${process.env.NEXT_PUBLIC_HOST_URL}/anime/${id}`;

  const { data, error } = useSWR<AnimeResponse>(url, fetch);

  return {
    anime: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};

const useAnimeRecommendations = (id) => {
  const url = `${process.env.NEXT_PUBLIC_HOST_URL}/anime/${id}/recommendations`;

  const { data, error } = useSWR<RecommendedAnimeResponse>(url, fetch);

  return {
    animes: data?.data.map((item) => item.entry),
    isLoading: !error && !data,
    isError: error,
  };
};

export { useAnime, useAnimeRecommendations };
