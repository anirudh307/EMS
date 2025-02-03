// import * as React from 'react';
// import { useNotifications, NotificationsProvider } from '@toolpad/core/useNotifications';

// function Notify({ message, severity }) {
//   const notifications = useNotifications();

//   React.useEffect(() => {
//     if (message) {
//       const key = notifications.show(message, {
//         severity: severity || 'error',
//         autoHideDuration: 3000,
//       });

//       return () => {
//         notifications.close(key);
//       };
//     }
//   }, [message, severity, notifications]);

//   return null;  // Since it's used for notifications, no UI is needed for this component
// }

// export default function ToolpadNotificationsNoSnap() {
//   return (
//     <NotificationsProvider>
//     </NotificationsProvider>
//   );
// }

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

