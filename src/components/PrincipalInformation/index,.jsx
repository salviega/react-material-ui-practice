import { Typography } from '@mui/material';
import React from 'react';

export const PrincipalInformation = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <React.Fragment>
      <Stack>
        <Typography>{name}</Typography>
        <Typography>{name}</Typography>
      </Stack>
      <Typography>{}</Typography>
    </React.Fragment>
  );
};
