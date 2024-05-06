import React from "react";
import { Link } from "react-router-dom";

const SellerLandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Seller Dashboard</h1>
      <p style={styles.description}>
        Manage your properties and sales efficiently.
      </p>
      <div style={styles.buttons}>
        <Link to="/seller/signin" style={styles.button}>
          Sign In
        </Link>
        <Link to="/seller/signup" style={styles.button}>
          Sign Up
        </Link>
      </div>
      {/* Additional content or features for seller dashboard */}
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
};

export default SellerLandingPage;
