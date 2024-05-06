import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const BuyerLandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const role = localStorage.getItem("role");
    if (authToken && role) {
      const roleMappings = {
        seller: "/SellerLandingPageAfterLogin",
        admin: "/AdminLandingPageAfterLogin",
        user: "/BuyerLandingPageAfterLogin",
      };
      navigate(roleMappings[role]);
    }
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Real Estate Marketplace</h1>
      <p style={styles.description}>
        Explore our curated collection of properties for sale and rent.
      </p>
      <div style={styles.buttons}>
        <Link to="/signin" style={styles.button}>
          Sign In
        </Link>
        <Link to="/signup" style={styles.button}>
          Sign Up
        </Link>
        <Link to="/seller" style={styles.button}>
          Become a Seller
        </Link>
      </div>
      <div style={styles.testimonials}>
        {/* Testimonials or reviews can go here */}
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    margin: "0 10px",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#ddb849",
    borderRadius: "5px",
    textDecoration: "none",
  },
  testimonials: {
    // Styles for testimonials or reviews section
  },
};

export default BuyerLandingPage;
