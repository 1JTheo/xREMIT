// filepath: /src/components/EmailVerification.tsx
import React, { useState } from "react";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const EmailVerification: React.FC = () => {
  const { currentUser } = useAuth();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSendVerificationEmail = async () => {
    if (currentUser) {
      try {
        await sendEmailVerification(currentUser);
        setMessage("Verification email sent. Please check your inbox.");
      } catch (err) {
        setError("Failed to send verification email");
      }
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <button onClick={handleSendVerificationEmail}>
        Send Verification Email
      </button>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default EmailVerification;
