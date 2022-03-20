import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://marcel.nakamine.com.br/">
        marcelnakamine
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
