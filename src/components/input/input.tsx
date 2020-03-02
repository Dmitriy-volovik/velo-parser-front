import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }),
);

interface InputElementProps {
    onChangeFn: (event: React.SyntheticEvent<any>) => void
    onKeyDown: (event: React.KeyboardEvent<any>) => void
}


  export const InputElement: React.FC<InputElementProps> = ({onChangeFn, onKeyDown}) => {
    const classes = useStyles();
  
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="search-input" label="Search word" onChange={onChangeFn} onKeyDown={onKeyDown} />
      </form>
    );
  }