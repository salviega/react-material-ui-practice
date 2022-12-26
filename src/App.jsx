import React from 'react';
import { Container } from '@mui/material';
import { Searcher } from './containers/Searcher';

const App = () => {
  const [inputUser, setInputUser] = React.useState('octocat');
  const [useState, setUserState] = React.useState('inputUser');
  return (
    <Container
      sx={{
        marginTop: '40px',
        width: '80wh',
        height: '800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadiuus: '16px',
        background: 'whitesmoke',
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  );
};

export default App;
