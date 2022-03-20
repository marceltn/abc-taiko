import React from 'react'
import Image from 'next/image';
import { Box, Grid } from '@mui/material';

export type HelpTableItem = {
  note?: string,
  noteUrl: string,
  noteAlt: string,
  kuden: string,
}

interface HelpTableProps {
  title: string,
  dict: Array<HelpTableItem>
}

const HelpTable = (props: HelpTableProps) => {
  const { title, dict } = props

  return (
    <Box>
      {dict.map((item: HelpTableItem) => (
        <Box key={item.kuden}>
          <Box position="relative" width="100px" height="100px">
            {item.kuden}
            <Image
              src={item.noteUrl}
              alt={item.noteAlt}
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default HelpTable
