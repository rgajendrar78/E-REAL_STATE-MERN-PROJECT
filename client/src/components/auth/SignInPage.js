import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { signInUser } from "../../actions/authActions";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    role: location.pathname === "/seller/signin" ? "seller" : "user",
  });

  useEffect(() => {
    if (currentUser !== null) {
      localStorage.setItem("authToken", currentUser.data.accessToken);
      localStorage.setItem("role", currentUser.data.role);
      const roleMappings = {
        seller: "/SellerLandingPageAfterLogin",
        admin: "/AdminLandingPageAfterLogin",
        user: "/BuyerLandingPageAfterLogin",
      };
      const role = currentUser.data.role;
      navigate(roleMappings[role]);
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInUser(formData));
  };

  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email or phone"
              type="text"
              name="emailOrPhone"
              fullWidth
              margin="normal"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#ddb849", padding: "10px 20px" }}
              fullWidth
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Login"}
            </Button>
          </form>
          {error && <Typography color="error">{error}</Typography>}
          <Typography variant="body1" align="center" mt={2}>
            Don't have an account?{" "}
            <Link
              style={{ color: "#ddb849" }}
              href={
                location.pathname.includes("/seller/")
                  ? "/seller/signup"
                  : "/signup"
              }
            >
              Sign Up
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignInPage;
