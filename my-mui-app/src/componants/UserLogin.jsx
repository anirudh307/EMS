import React, { useState } from "react";
import { 
  TextField, Button, Typography, Checkbox, FormControlLabel, Box, Paper, Link, 
  Backdrop, CircularProgress, Fade 
} from "@mui/material";
import Fingerprint from '@mui/icons-material/Fingerprint';
import Notify from "./Notify.jsx";
import LoginUser from "./User Componants/LoginUser.jsx";

const UserLogin = ({ setShowNavbar }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const [showNotify, setShowNotify] = useState(false);  
  const [loading, setLoading] = useState(false);
  const [showPage, setShowPage] = useState(false); // Controls fade-in effect

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === "user" && credentials.password === "user") {
      setLoading(true); // Show Backdrop
      setTimeout(() => {
        setIsLoggedIn(true);  
        setLoading(false);
        setTimeout(() => setShowPage(true), 500); // Delay fade-in effect
      }, 2000); // 2 seconds delay before rendering
    } else {
      setShowNotify(true);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <>

          {/* Fade-in Effect for LoginUser */}
          <Fade in={showPage} timeout={800}>
            <div>
              <LoginUser setShowNavbar={setShowNavbar} />
            </div>
          </Fade>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            height: "35rem",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "URL('https://img.lovepik.com/photo/45009/7675.jpg_wh860.jpg')",
            backgroundSize: "cover",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              display: "flex",
              width: { xs: "90%", md: "65%" },
              height: "70vh",
              borderRadius: 5,
              overflow: "hidden",
              backgroundColor: "transparent",
            }}
          >
            {/* Left Side - Form */}
            <Box
              sx={{
                flex: 1,
                padding: 4,
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                User Login to system
              </Typography>
              <Typography variant="body2" color="gray" mb={3}>
                Please enter your login information or{" "}
                <Link href="#" color="primary">
                  click here
                </Link>{" "}
                to register.
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Username"
                  variant="standard"
                  fullWidth
                  margin="normal"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="standard"
                  fullWidth
                  margin="normal"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                  label="Remember me"
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  sx={{ mt: 2, borderRadius: 2, background: "linear-gradient(45deg,rgb(52, 40, 27), #e52e71)", minWidth: 220 }}
                >
                  LogIn <Fingerprint />
                  
                      {/* Backdrop During Delay */}
                     <Backdrop open={loading}  sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}>
                      <CircularProgress color="success" />
                    </Backdrop>
                </Button>
              </form>
            </Box>

            {/* Right Side - Background Image */}
            <Box
              sx={{
                flex: 1,
                backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: { xs: "none", md: "block" },
              }}
            />
          </Paper>
        </Box>
      )}

      {/* Notify component for login failure */}
      <Notify open={showNotify} onClose={() => setShowNotify(false)} message="Invalid login credentials. Please try again!" />
    </>
  );
};

export default UserLogin;
