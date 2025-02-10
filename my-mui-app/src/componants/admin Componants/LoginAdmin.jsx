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
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NAVIGATION = [
  { kind: 'header', title: 'Admin Panel' },
  { segment: 'Employee Adminstration', title: 'Employees', icon: <DashboardIcon /> },
  { segment: 'Salery Adminstration', title: 'Salery', icon: <ShoppingCartIcon /> },
  { kind: 'divider' },
  { kind: 'header', title: 'Analytics' },
  {
    segment: 'Leave Adminstration',
    title: 'Leaves',
    icon: <BarChartIcon />,
    children: [
      { segment: 'approved', title: 'approved', icon: <DescriptionIcon /> },
      { segment: 'submitted', title: 'submitted', icon: <DescriptionIcon /> },
    ],
  },
  { segment: 'Reviews', title: 'Reviews', icon: <LayersIcon /> },
];

const demoTheme = createTheme({
  cssVariables: { colorSchemeSelector: 'data-toolpad-color-scheme' },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function LoginAdmin({ setShowNavbar , setShowHeading}) {
  const router = useDemoRouter('/dashboard');
  const navigate = useNavigate();
  const location = useLocation();

  const [session, setSession] = React.useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  // Hide the Navbar when component mounts and show it when unmounting
  useEffect(() => {
    setShowNavbar(false);  // Hide Navbar when LoginAdmin mounts

    return () => setShowNavbar(true);  // Show Navbar when LoginAdmin unmounts
  }, [setShowNavbar]);

  useEffect(()=>{
    setShowHeading(false);
    return ()=> setShowHeading(true);
  },[setShowHeading]);

  const authentication = React.useMemo(() => ({
    signIn: () => setSession({
      user: {
        name: 'Bharat Kashyap',
        email: 'bharatkashyap@outlook.com',
        image: 'https://avatars.githubusercontent.com/u/19550456',
      },
    }),
    signOut: () =>{ setSession(null);
      navigate(location.state?.from || "/", { replace: true });},
  }), [navigate, location]);

  if(!session){
    return null;
  }

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: 'Admin Dashboard',
        homeUrl: '/toolpad/core/introduction',
      }}
      session={session}
      authentication={authentication}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

export default LoginAdmin;
