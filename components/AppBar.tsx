import * as React from 'react';
import AppBarUI from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarUI position="static">
        <Toolbar>
          {/* <Drawer /> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            abc taiko
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBarUI>
    </Box>
  );
}
