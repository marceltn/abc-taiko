import { useEffect, useState } from 'react';

const regexInitChar = /(don|kon|can|ran|do|ko|ca|ra|d|k|c|r|su|s|x[1-4]|x\/\/|x\/|x|m)/
const header = 'X:1\nM: 4/4\nL: 1/4\nK: stafflines=1\n'
const measuresTotalPerLine = 4

export default function useKudenTranslate (kuden: string) {
  const [abc, setAbc] = useState('')
  
  useEffect(() => {
    const parseKudenToAbc = () => {
      let convertedKuden = header
      let splitedKuden = kuden.replace(/ /g,'').toLowerCase().split(regexInitChar)
      let noteLength = 0
      let currentMeasures = 0
      
      for (const value of splitedKuden) {
        if (noteLength == 4) {
          convertedKuden += '|'
          currentMeasures += 1
          noteLength = 0
        } else if (noteLength > 4) {
          noteLength = 0
        }

        if (currentMeasures == measuresTotalPerLine) {
          convertedKuden += '\n'
          currentMeasures = 0
        } else if (measuresTotalPerLine > 4) {
          currentMeasures = 0
        }

        switch (value.trim()) {
          case 'don':
            convertedKuden += 'c'
            noteLength += 1
            break;
          case 'kon':
            convertedKuden += 'A'
            noteLength += 1
            break;
          case 'can':
            convertedKuden += '!style=x!c'
            noteLength += 1
            break;
          case 'ran':
            convertedKuden += '!style=x!A'
            noteLength += 1
            break;
          case 'do':
            convertedKuden += 'c/'
            noteLength += 0.5
            break;
          case 'ko':
            convertedKuden += 'A/'
            noteLength += 0.5
            break;
          case 'ca':
            convertedKuden += '!style=x!c/'
            noteLength += 0.5
            break;
          case 'ra':
            convertedKuden += '!style=x!A/'
            noteLength += 0.5
            break;
          case 'd':
            convertedKuden += 'c//'
            noteLength += 0.25
            break;
          case 'k':
            convertedKuden += 'A//'
            noteLength += 0.25
            break;
          case 'c':
            convertedKuden += '!style=x!c//'
            noteLength += 0.25
            break;
          case 'r':
            convertedKuden += '!style=x!A//'
            noteLength += 0.25
            break;
          case 'x//':
          case 's':
            convertedKuden += 'z//'
            noteLength += 0.25
            break;
          case 'x/':
          case 'su':
            convertedKuden += 'z/'
            noteLength += 0.5
            break;
          case 'x4':
            convertedKuden += 'z4'
            noteLength += 4
            break;
          case 'x3':
            convertedKuden += 'z3'
            noteLength += 3
            break;
          case 'x2':
            convertedKuden += 'z2'
            noteLength += 2
            break;
          case 'x1':
          case 'x':
          case 'm':
            convertedKuden += 'z'
            noteLength += 1
            break;
          case '.':
            convertedKuden += '>'
            break;
          default:
            break;
        }
      }
      return convertedKuden
    }

    setAbc(parseKudenToAbc())
  }, [kuden])
  return [kuden, abc]
}
