import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutUser } from "../../actions/authActions";

const AdminLandingPageAfterLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOutUser());
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Admin Dashboard</h1>
      <p style={styles.description}>
        Manage users, settings, and access control efficiently.
      </p>
      <div style={styles.buttons}>
        <button style={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
      {/* Additional content or features for admin dashboard */}
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

export default AdminLandingPageAfterLogin;
