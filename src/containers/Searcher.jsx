import React from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export const Searcher = (props) => {
  const { inputUser, setInputUser } = props;

  const [valueInput, setValueInput] = React.useState('');
  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
    console.log(valueInput);
  };
  const handleSubmit = () => {
    setInputUser(valueInput);
    console.log(valueInput);
  };
  return (
    <Stack
      direction="row"
      sx={{
        marginTop: '30px',
        width: '80%',
      }}
    >
      <TextField
        id="outlined-basic"
        label="Github user"
        placeholder="Optocat"
        variant="outlined"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: '90%',
        }}
      />
      <IconButton
        onClick={handleSubmit}
        size="small"
        sx={{
          left: '-45px',
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};
