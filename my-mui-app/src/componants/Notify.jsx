
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Notify = ({ open, onClose, message }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      sx={{ mt: 6 }}
    >
      <Alert onClose={onClose} severity="error" sx={{ width: '100%',}}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notify;

