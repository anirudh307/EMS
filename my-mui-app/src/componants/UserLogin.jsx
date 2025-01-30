import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  Paper,
  Link,
} from "@mui/material";

const UserLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", credentials, "Remember Me:", rememberMe);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "35rem",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:"URL('https://img.lovepik.com/photo/45009/7675.jpg_wh860.jpg')" ,
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
            Login to system
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
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, borderRadius: 5, background: "linear-gradient(45deg, #ff8a00, #e52e71)" }}>
              Log in
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
  );
};

export default UserLogin;