import React from 'react'
import HelpTable from './HelpTable'


const notes = [
  {
      noteUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Music-quarternote.svg/240px-Music-quarternote.svg.png',
      noteAlt: 'music notation quarter note',
      kuden: 'Don/Kon',
  },
  {
      noteUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Music-eighthnote.svg/240px-Music-eighthnote.svg.png',
      noteAlt: 'music notation eighth note',
      kuden: 'Do/Ko',
  },
  {
      noteUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Music-sixteenthnote.svg/240px-Music-sixteenthnote.svg.png',
      noteAlt: 'music notation sixteenth note',
      kuden: 'd/k',
  }
]

const pauses = [
  {
    noteUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Crochet2.svg/320px-Crochet2.svg.png',
    noteAlt: 'music notation quarter note pause',
    kuden: 'm',
  },
  {
    noteUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Music-eighthrest.svg/320px-Music-eighthrest.svg.png',
    noteAlt: 'music notation eighth note pause',
    kuden: 'su',
  },
  {
    noteUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Music-sixteenthrest.svg/320px-Music-sixteenthrest.svg.png',
    noteAlt: 'music notation sixteenth note pause',
    kuden: 's',
  }
]

export const Help = () => {
  return (
    <>
      <HelpTable
        title="Notes"
        dict={notes}
      />
      <HelpTable
        title="Notes"
        dict={pauses}
      />
    </>
  )
}
