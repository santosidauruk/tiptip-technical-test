import React, { useState } from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import YoutubeVideo from '@/components/YoutubeVideo';
import { Anime } from '@/types/index';
import { useFavoriteAnimes } from './store';

interface Props {
  data: Anime;
}

const checkFavorite = (
  favoriteAnimes: Anime[],
  checkedAnime: Anime
): boolean => {
  return favoriteAnimes.some((item) => item.mal_id === checkedAnime.mal_id);
};

const AnimeDetail = ({ data }: Props) => {
  const {
    animes: favoriteAnimes,
    setFavoriteAnimes,
    removeFromFavorite,
  } = useFavoriteAnimes();

  const isFav = checkFavorite(favoriteAnimes, data);
  const [isFavorite, setIsFavorite] = useState(isFav);

  const handleFavorite = (anime) => {
    const action = !isFavorite ? setFavoriteAnimes : removeFromFavorite;

    action(anime);
    setIsFavorite(!isFavorite);
  };

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box
        sx={{
          marginRight: 4,
          flexBasis: '300px',
          flexShrink: 0,
        }}
      >
        <Typography variant="h4">{`${data.title} (${data.year})`}</Typography>
        <Typography variant="body1">{`Rating: ${data.score}`}</Typography>
        <ImageList>
          <ImageListItem key={data.mal_id} cols={12}>
            <Image
              src={data.images.jpg.large_image_url}
              width="100%"
              height={400}
              alt={data.title}
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Button
          variant="contained"
          color={isFavorite ? 'secondary' : 'inherit'}
          startIcon={<FavoriteIcon />}
          onClick={() => handleFavorite(data)}
        >
          {isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
        </Button>
      </Box>
      <Box>
        {data.trailer.youtube_id ? (
          <YoutubeVideo videoId={data.trailer.youtube_id}></YoutubeVideo>
        ) : null}
        <Typography
          variant="body2"
          sx={{
            textAlign: 'justify',
            marginTop: 3,
          }}
        >
          {data.synopsis}
        </Typography>
      </Box>
    </Box>
  );
};

export default AnimeDetail;
