import * as React from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

interface Props {
  title: string;
  score?: number;
  image: string;
  id: string;
}

const CustomCardHeader = styled(CardHeader)`
  .MuiCardHeader-content {
    width: 100%;
  }
`;

const CardItem = ({ title, score, image, id }: Props) => {
  return (
    <Link href={`/anime/${id}`}>
      <CardActionArea>
        <Card variant="outlined">
          <CustomCardHeader
            title={title}
            titleTypographyProps={{
              noWrap: true,
            }}
            sx={{
              width: '100%',
            }}
            subheader={score ? `Rating: ${score}` : null}
          />
          <CardMedia component="img" height="194" image={image} alt={title} />
        </Card>
      </CardActionArea>
    </Link>
  );
};

export default CardItem;
