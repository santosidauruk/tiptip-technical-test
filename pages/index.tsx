import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AnimeList from '@/modules/anime/AnimeList';
import Header from '@/components/Header';
import fetch from '@/utils/fetch';
import { Anime, Pagination as PaginationObj } from '@/types/index';

interface Props {
  animes: Anime[];
  pagination: PaginationObj;
  page: number;
  querySearch: string;
}

const Home = ({ animes, pagination, page, querySearch }: Props) => {
  const router = useRouter();
  const [inputPage, setInputPage] = useState(page.toString());
  const [searchKeyword, setSearchKeyword] = useState(querySearch);

  const createPaginationUrl = (page, q) => {
    return queryString.stringifyUrl({
      url: '/',
      query: {
        ...router.query,
        page,
        q,
      },
    });
  };

  const handlePaginationChange = (e, value) => {
    router.push(createPaginationUrl(value, router.query.q));
  };

  const goToPage = (e) => {
    e.preventDefault();
    router.push(createPaginationUrl(inputPage, router.query.q));
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setInputPage('1');
    router.push(createPaginationUrl(1, searchKeyword));
  };

  return (
    <div>
      <Header></Header>
      <Container
        sx={{
          marginTop: 4,
        }}
      >
        <form onSubmit={handleSubmitSearch}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              marginLeft: 4,
              marginTop: -2,
            }}
          >
            <TextField
              id="standard-basic"
              label="search your anime"
              variant="standard"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                marginLeft: 2,
              }}
            >
              Search
            </Button>
          </Box>
        </form>
        <AnimeList animes={animes} />
      </Container>
      <Container
        sx={{
          display: 'flex',
          padding: 4,
          justifyContent: 'flex-end',
        }}
      >
        <Pagination
          count={pagination?.last_visible_page ?? 10}
          variant="outlined"
          color="primary"
          className="pagination"
          page={Number(page)}
          onChange={handlePaginationChange}
        />
        <form onSubmit={goToPage}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              marginLeft: 4,
              marginTop: -2,
            }}
          >
            <TextField
              id="standard-basic"
              label="go to page"
              variant="standard"
              value={inputPage}
              onChange={(e) => setInputPage(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                marginLeft: 2,
              }}
            >
              Go
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query.page ?? 1;
  const querySearch = query.q ?? '';
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_HOST_URL}/anime`,
    query: {
      page,
      limit: 20,
      q: querySearch,
    },
  });

  const data = await fetch(url);

  return {
    props: {
      animes: data.data,
      pagination: data.pagination,
      page,
      querySearch,
    },
  };
};

export default Home;
