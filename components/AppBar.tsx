import * as React from 'react';
import AppBarUI from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createClient } from '@supabase/supabase-js'
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';

export default function AppBar() {
  const { user, error } = useUser();

  // const supabase = createClient(process.env.NEXT_PUBLIC_PROJECT || '', process.env.NEXT_PUBLIC_ANON_PUBLIC_KEY || '')
  function signInWithGoogle() {
    supabaseClient.auth.signIn({
      provider: 'google',
    })
  }

  async function signout() {
    const { error } = await supabaseClient.auth.signOut()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarUI position="static">
        <Toolbar>
          {/* <Drawer /> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            abc taiko
          </Typography>
          {user ? (
            <Box>
              {user.user_metadata.name} - <Button onClick={signout} color="inherit">logout</Button>
            </Box>
          ) : (
            <Button onClick={signInWithGoogle} color="inherit">Google Login</Button>
          )}
        </Toolbar>
      </AppBarUI>
    </Box>
  );
}
