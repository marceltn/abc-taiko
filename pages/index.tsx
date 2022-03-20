import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from '@/src/Copyright';
import { Grid } from '@mui/material';
import KudenInput from '@/components/inputs/KudenInput';
import AbcRender from '@/components/AbcRender';
import useKudenTranslate from '@/components/hooks/useKudenTranslate';

const Home: NextPage = () => {
  const [kuden, setKuden] = React.useState('')
  const [original, abc] = useKudenTranslate(kuden)

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <KudenInput
              kuden={kuden}
              setKuden={setKuden}
            />
          </Grid>
          <Grid item xs={4}>
          hjkl;c
          </Grid>
          <Grid item xs={12}>
            <AbcRender
              abc={abc}
            ></AbcRender>
          </Grid>
        </Grid>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
