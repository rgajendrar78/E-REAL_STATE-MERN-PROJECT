import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutUser } from "../../actions/authActions";

const BuyerLandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOutUser());
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Real Estate Marketplace</h1>
      <p style={styles.subheading}>
        Discover the finest properties curated just for you.
      </p>
      <button style={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
      {/* Additional content or features can be added here */}
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
  subheading: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  logoutButton: {
    backgroundColor: "#ddb849",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default BuyerLandingPage;
