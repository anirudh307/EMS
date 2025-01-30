import React, { useState } from "react";
import { Container, TextField, Button, Typography, Checkbox, FormControlLabel, Box, Paper } from "@mui/material";

const AdminLogin = () => {
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
    <Container component="main" maxWidth="xs" >
      <Paper elevation={10} sx={{ padding: 4, marginTop: 8, borderRadius: 3, background: "transparant" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Admin Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
            label="Remember Me"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Login
          </Button>
        </form>
        <Box  justifyContent="space-between" mt={2}>
          <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
            Forgot Password?
          </Typography>
          <Typography variant="body2">
            Don't have an account?{" "}
            <Typography component="span" color="primary" sx={{ cursor: "pointer" }}>
              Register
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminLogin;