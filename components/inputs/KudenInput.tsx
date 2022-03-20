import React, { Dispatch, SetStateAction } from 'react';
import { TextField, Typography } from '@mui/material'

interface KudenInputProps {
  kuden: String
  setKuden: Dispatch<SetStateAction<string>>
}

const KudenInput = (props: KudenInputProps) => {
  const { kuden, setKuden } = props
  return (
    <>
      <Typography>
        <h3><a target="blank" href="http://taikosource.com/song-database/taiko-notation-a-work-in-progress/">Taiko notation</a></h3>
      </Typography>
      <TextField
        id="kuden-input"
        label="Kuden"
        multiline
        fullWidth
        value={kuden}
        onChange={(ev) => setKuden(ev.target.value)}
      />
    </>
  )
}

export default KudenInput
