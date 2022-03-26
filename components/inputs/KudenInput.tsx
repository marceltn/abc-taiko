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
