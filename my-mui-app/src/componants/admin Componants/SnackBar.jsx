import * as React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp({message,severity}) {
  const { enqueueSnackbar } = useSnackbar();


   React.useEffect(() => {
      if (message) {
        const key = enqueueSnackbar.show(message, {
          severity: severity || 'Login',
          autoHideDuration: 3000,
        });
  
        return () => {
          enqueueSnackbar.close(key);
        };
      }
    }, [message, severity, enqueueSnackbar]);

//   const handleClick = () => {
//     enqueueSnackbar('I love snacks.');
//   };

//   const handleClickVariant = (variant) => () => {
//     // variant could be success, error, warning, info, or default
//     enqueueSnackbar('This is a success message!', { variant });
//   };

  return null;
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
    </SnackbarProvider>
  );
}