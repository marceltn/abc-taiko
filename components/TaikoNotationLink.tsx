import { Typography } from '@mui/material'
import MuiLink from '@mui/material/Link';

const TaikoNotationLink = () => {
  return (
    <Typography variant="subtitle1" color="text.secondary" align="center">
      <MuiLink target="blank" href="http://taikosource.com/song-database/taiko-notation-a-work-in-progress/">
        Taiko notation
      </MuiLink>
    </Typography>
  )
}

export default TaikoNotationLink