import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Button,
  Typography,
  Link,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
  Grid
} from '@material-ui/core';

import { TSearchResult } from '../../type';
// import imgNotFound from '../../assets/imageNotFound.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    media: {
      maxWidth: '100%',
      objectFit: 'contain',
      height: '140px'
      // width: '200px',
      // height:'100%'
    },
  })
);

type TProps = TSearchResult & {};

const GridCard: React.FC<TProps> = ({
  image,
  title,
  price,
  shop,
  shopURL,
  link
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Card className={classes.root}>
        <CardActionArea href={link} target='_blank'>
          <CardMedia
            // objecFit= "cover"
            component='img'
            alt={title}
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {`${price} uah`}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link href={shopURL} component='a' target='_blank'>
            Go to {shop} shop
          </Link>
          <Button variant='outlined' color='primary' href={link}>
            Buy
          </Button>
          {/* <Link href={link}>
            Buy
          </Link> */}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GridCard;
