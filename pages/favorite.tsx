import React from 'react';
import Container from '@mui/material/Container';
import Header from '@/components/Header';
import AnimeFavorite from '@/modules/anime/AnimeFavorite';

const Page = () => {
  return (
    <div>
      <Header></Header>
      <Container
        sx={{
          marginTop: 4,
        }}
      >
        <AnimeFavorite />
      </Container>
    </div>
  );
};

export default Page;
