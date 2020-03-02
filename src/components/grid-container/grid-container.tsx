import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { TSearchResult } from '../../type';
import GridCard from '../grid-card';
import imgNotFound from '../../assets/imageNotFound.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
);

type TGridContainerProps = {
  results: TSearchResult[];
};

const GridContainer: React.FC<TGridContainerProps> = ({ results }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {results.map(
          ({ image, title, price, link, shop, shopURL }: TSearchResult, i) => {
            if (!image) {
              image = imgNotFound;
            }
            return (
              <GridCard
                image={image}
                title={title}
                price={price}
                link={link}
                shop={shop}
                shopURL={shopURL}
                key={i}
              />
            );
          }
        )}
      </Grid>
    </div>
  );
};

export default GridContainer;
