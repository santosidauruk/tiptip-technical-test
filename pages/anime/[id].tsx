import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from '@mui/material/Container';
import Header from '@/components/Header';
import AnimeDetail from '@/modules/anime/AnimeDetail';
import { useAnime } from '@/modules/anime/hooks/anime';
import AnimeRecommendations from '@/modules/anime/AnimeRecommendations';

const DetailPage = ({ id }) => {
  const { anime, isError, isLoading } = useAnime(id);
  const router = useRouter();

  if (isError) return <div>error when fetching</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <React.Fragment>
      <Header></Header>
      <Container
        sx={{
          paddingTop: 4,
        }}
      >
        <Button
          size="small"
          variant="text"
          startIcon={<ArrowBackIcon />}
          sx={{
            marginBottom: 2,
          }}
          onClick={() => router.back()}
        >
          Back
        </Button>
        {/* <Box
          sx={{
            display: 'flex',
          }}
        > */}
        <AnimeDetail data={anime} />
        {/* <Box>
            {anime.trailer.youtube_id ? (
              <YoutubeVideo videoId={anime.trailer.youtube_id}></YoutubeVideo>
            ) : null}
            <Typography
              variant="body2"
              sx={{
                textAlign: 'justify',
                marginTop: 3,
              }}
            >
              {anime.synopsis}
            </Typography>
          </Box> */}
        {/* </Box> */}
        {/* <Box>
          <Typography variant="h5" mt={8} mb={2}>
            Recommendation
          </Typography> */}
        <AnimeRecommendations id={id} />
        {/* </Box> */}
      </Container>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      id: params.id,
    },
  };
};

export default DetailPage;
