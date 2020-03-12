import React, { useState, SyntheticEvent } from 'react';
import { Button, Container } from '@material-ui/core'; 
import axios from 'axios';

import spinner from '../../assets/spnr.gif'
import { TSearchResult } from '../../type';
import InputElement from '../input';
import GridContainer from '../grid-container/grid-container';
import Header from '../header';

type SearchData = {
  data: TSearchResult[];
};

const MainPageBody: React.FC = () => {
  const [pending, setPending] = useState<boolean>(false);
  const [searchWord, setSearchWord] = useState<string>('');
  const [searchResults, setSearchResults] = useState<TSearchResult[]>([]);
  console.log(searchWord);
  const onChange = (ev: SyntheticEvent<any>): void => {
    setSearchWord(ev.currentTarget.value);
  };
  const onClick = async () => {
    setPending(true)
    const { data }: SearchData = await axios.get(`/search?q=${searchWord}`);
    setPending(false)
    console.log('result - ', data);
    setSearchResults(data);
  };

  const onKeyPress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if(ev.key.toString() === 'Enter'){
      onClick()
    }
  } 
  if (pending) {
    return (
      <Container component="main" maxWidth="xs">
        <img src={spinner} alt="loading gif" />
      </Container>
    );
  }

  return (
    <React.Fragment>
      <Header />
        <InputElement onChangeFn={onChange} onKeyDown={onKeyPress} />
        <Button
          type='button'
          variant='contained'
          color='primary' 
          // component='span'  
          onClick={onClick}
        >
          Upload
        </Button>
        <GridContainer results={searchResults} />
    </React.Fragment>
  );
};

export default MainPageBody;
