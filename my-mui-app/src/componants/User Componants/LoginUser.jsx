import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';

const NAVIGATION = [
  { kind: 'header', title: 'User Dashboard' },
  { segment: 'dashboard', title: 'Home', icon: <DashboardIcon /> },
  { segment: 'orders', title: 'My Orders', icon: <ShoppingCartIcon /> },
  { kind: 'divider' },
  { kind: 'header', title: 'User Analytics' },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      { segment: 'purchases', title: 'Purchase History', icon: <DescriptionIcon /> },
      { segment: 'activity', title: 'User Activity', icon: <DescriptionIcon /> },
    ],
  },
  { segment: 'profile', title: 'Profile', icon: <PersonIcon /> },
  { segment: 'favorites', title: 'Favorites', icon: <FavoriteIcon /> },
  { segment: 'settings', title: 'Settings', icon: <SettingsIcon /> },
];

const userTheme = createTheme({
  cssVariables: { colorSchemeSelector: 'data-toolpad-color-scheme' },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
  },
});

function UserPageContent({ pathname }) {
  return (
    <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Typography>User dashboard content for {pathname}</Typography>
    </Box>
  );
}

UserPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function LoginUser(props) {
  const router = useDemoRouter('/dashboard');

  const [session, setSession] = React.useState({
    user: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      image: 'https://avatars.githubusercontent.com/u/12345678',
    },
  });

  const authentication = React.useMemo(() => ({
    signIn: () => setSession({
      user: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        image: 'https://avatars.githubusercontent.com/u/12345678',
      },
    }),
    signOut: () => setSession(null),
  }), []);

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: 'User Dashboard',
        homeUrl: '/toolpad/core/introduction',
      }}
      session={session}
      authentication={authentication}
      router={router}
      theme={userTheme}
    >
      <DashboardLayout>
        <UserPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

export default LoginUser;
