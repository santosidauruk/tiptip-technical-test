import * as React from 'react';
import {
  render,
  screen,
  act,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import AnimeDetail from '../AnimeDetail';
import { useFavoriteAnimes } from '../store';
import { mockAnime } from '../../../../__mocks__/anime';

jest.mock('../store', () => ({
  useFavoriteAnimes: jest.fn(),
}));

const mockedFavoriteAnimes = useFavoriteAnimes as unknown as jest.MockedFn<
  typeof useFavoriteAnimes
>;

describe('components/AnimeDetail', () => {
  afterEach(cleanup);
  test('renders correctly', () => {
    mockedFavoriteAnimes.mockImplementationOnce(() => {
      return {
        animes: [],
        setFavoriteAnimes: jest.fn(),
        removeFromFavorite: jest.fn(),
      };
    });
    render(<AnimeDetail data={mockAnime} />);

    expect(
      screen.getByText('Mahoromatic: Motto Utsukushii Mono (2002)')
    ).toBeInTheDocument();
    expect(screen.getByText('Rating: 7.15')).toBeInTheDocument();
  });

  test('should render Add to Favorite butotn', () => {
    const setFavoriteAnimes = jest.fn();
    const removeFromFavorite = jest.fn();
    mockedFavoriteAnimes.mockImplementation(() => {
      return {
        animes: [],
        setFavoriteAnimes,
        removeFromFavorite,
      };
    });
    render(<AnimeDetail data={mockAnime} />);

    const favButton = screen.getByRole('button');
    expect(favButton).toHaveTextContent('Add to Favorite');

    act(() => {
      fireEvent.click(favButton);
    });
    expect(setFavoriteAnimes).toHaveBeenCalledTimes(1);
  });
});
