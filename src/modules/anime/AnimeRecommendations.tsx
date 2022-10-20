import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAnimeRecommendations } from '@/modules/anime/hooks/anime';
import Card from '@/components/Card';

interface Props {
  id: string;
}

const AnimeRecommendations = ({ id }: Props) => {
  const { animes, isLoading, isError } = useAnimeRecommendations(id);

  if (isError) return <div>error when fetching recommendation item</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Box>
      <Typography variant="h5" mt={8} mb={2}>
        Recommendation
      </Typography>
      <Grid container rowSpacing={4} columnSpacing={4}>
        {animes.map((anime) => {
          return (
            <Grid item xs={12} sm={3} key={anime.mal_id}>
              <Card
                title={anime.title}
                image={anime.images.jpg.image_url}
                id={anime.mal_id.toString()}
              ></Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AnimeRecommendations;
