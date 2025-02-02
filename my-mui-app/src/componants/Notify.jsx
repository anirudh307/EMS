import * as React from 'react';
import { useNotifications, NotificationsProvider } from '@toolpad/core/useNotifications';
import Button from '@mui/material/Button';

function Notify({ message, severity }) {
  const notifications = useNotifications();

  React.useEffect(() => {
    if (message) {
      const key = notifications.show(message, {
        severity: severity || 'error',
        autoHideDuration: 3000,
      });

      return () => {
        notifications.close(key);
      };
    }
  }, [message, severity, notifications]);

  return null;  // Since it's used for notifications, no UI is needed for this component
}

export default function ToolpadNotificationsNoSnap() {
  return (
    <NotificationsProvider>
      {/* The Notify component will be triggered based on login logic */}
    </NotificationsProvider>
  );
}
