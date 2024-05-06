import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../actions/authActions";
import { useLocation, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: location.pathname === "/seller/signup" ? "seller" : "user",
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
    dispatch(signUpUser(formData));
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
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phoneNumber}
              onChange={handleChange}
              type="tel"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#ddb849", padding: "10px 20px" }}
              fullWidth
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
          {error && (
            <Typography variant="body1" align="center" color="error">
              {error}
            </Typography>
          )}
          <Typography variant="body1" align="center" mt={2}>
            Already have an account?{" "}
            <Link
              style={{ color: "#ddb849" }}
              href={
                location.pathname.includes("/seller/")
                  ? "/seller/signin"
                  : "/signin"
              }
            >
              Sign In
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
