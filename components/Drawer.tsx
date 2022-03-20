import React, { useState } from 'react'
import { Box, Drawer as DrawerUI, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export default function Drawer() {
  const [state, setState] = useState(false)

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <DrawerUI
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{width: 250}}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          source code
        </Box>
      </DrawerUI>
    </>
  )
}

