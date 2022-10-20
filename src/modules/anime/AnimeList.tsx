import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@/components/Card';
import { Anime } from '../../types';

interface Props {
  animes: Anime[];
}

const AnimeList = ({ animes }: Props) => {
  return (
    <Grid container rowSpacing={4} columnSpacing={4} padding={4}>
      {animes.map((anime) => {
        return (
          <Grid item xs={12} sm={3} key={anime.mal_id}>
            <Card
              title={anime.title}
              score={anime.score}
              image={anime.images.jpg.image_url}
              id={anime.mal_id.toString()}
            ></Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AnimeList;
