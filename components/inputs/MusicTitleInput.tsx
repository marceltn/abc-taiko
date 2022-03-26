import { TextField } from "@mui/material"
import useStorage from "@/components/hooks/useStorage"

const MusicTitleInput = () => {
  const [musicTitle, setMusicTitle] = useStorage('music-title')
  return (
    <TextField
      id="title-field"
      label="Music Title"
      variant="standard"
      value={musicTitle}
      onChange={(ev) => setMusicTitle(ev.target.value)}
    />
  )
}

export default MusicTitleInput