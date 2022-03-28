import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';

const SaveButton = () => {
  const { user } = useUser()
  const handleSaveClick = () => {
    if (user) {
      console.log('save music')
    } else {
      supabaseClient.auth.signIn({
        provider: 'google',
      })
    }
  }
  return (
    <Button onClick={handleSaveClick} variant="contained" startIcon={<SaveIcon />}>
      Save
    </Button>
  )
}

export default SaveButton
