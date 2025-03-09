// filepath: /src/components/Dashboard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {currentUser && !currentUser.emailVerified && (
        <p>
          Your email is not verified. Please verify your email.
          <Link to="/email-verification">Send Verification Email</Link>
        </p>
      )}
    </div>
  );
};

export default Dashboard;
