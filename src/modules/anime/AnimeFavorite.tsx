import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@/components/Card';
import Typography from '@mui/material/Typography';
import useFavoriteAnimes from './store';

const AnimeFavorite = () => {
  const { animes } = useFavoriteAnimes();

  if (!animes.length) return <div>{`You don't have any favorite anime`}</div>;

  return (
    <React.Fragment>
      <Typography variant="h5" mb={2}>
        Your Favorite Anime
      </Typography>
      <Grid container rowSpacing={4} columnSpacing={4}>
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
    </React.Fragment>
  );
};

export default AnimeFavorite;
