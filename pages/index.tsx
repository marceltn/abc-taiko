import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from '@/components/Copyright';
import { Grid } from '@mui/material';
import KudenInput from '@/components/inputs/KudenInput';
import AbcRender from '@/components/AbcRender';
import useKudenTranslate from '@/components/hooks/useKudenTranslate';
import useStorage from '@/components/hooks/useStorage';
import { Help } from '@/components/Help';
import TaikoNotationLink from '@/components/TaikoNotationLink';
import MusicTitleInput from '@/components/inputs/MusicTitleInput';
import SaveButton from '@/components/SaveButton';

const Home: NextPage = () => {
  const [kuden, setKuden] = useStorage('kuden')
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
          <Grid item xs={12}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <MusicTitleInput />
              <Box sx={{ alignSelf: 'flex-end' }}><SaveButton /></Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={10}>
            <KudenInput
              kuden={kuden}
              setKuden={setKuden}
            />
            <AbcRender
              abc={abc}
            ></AbcRender>
          </Grid>
          <Grid item md={2} sx={{ display: { xs: 'none', md: 'block'}}}>
            <Help />
          </Grid>
        </Grid>
        <TaikoNotationLink />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
