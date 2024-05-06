import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignInPage from "./components/auth/SignInPage";
import SignUpPage from "./components/auth/SignUpPage";
import BuyerLandingPage from "./components/buyer/BuyerLandingPage";
import BuyerLandingPageAfterLogin from "./components/buyer/BuyerLandingPageAfterLogin";
import SellerLandingPage from "./components/seller/SellerLandingPage";
import SellerLandingPageAfterLogin from "./components/seller/SellerLandingPageAfterLogin";
import AdminLandingPageAfterLogin from "./components/admin/AdminLandingPageAfterLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuyerLandingPage />} />
        <Route
          path="/BuyerLandingPageAfterLogin"
          element={<BuyerLandingPageAfterLogin />}
        />
        <Route path="/seller" element={<SellerLandingPage />} />
        <Route
          path="/SellerLandingPageAfterLogin"
          element={<SellerLandingPageAfterLogin />}
        />
        <Route
          path="/AdminLandingPageAfterLogin"
          element={<AdminLandingPageAfterLogin />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="seller/signup" element={<SignUpPage />} />
        <Route path="seller/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
