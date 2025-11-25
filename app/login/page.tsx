"use client";

import { useRouter } from "next/navigation";
import "./login.css";

const BASE = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";

export default function Login() {
  const r = useRouter();

  function loginWithGoogle() {
    window.location.href = `${BASE}/auth/google/manager`;
  }

  function loginWithFacebook() {
    window.location.href = `${BASE}/auth/facebook`;
  }

  function loginWithLinkedIn() {
    window.location.href = `${BASE}/auth/linkedin`;
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-title">Login to Continue</div>

        <button className="login-btn" onClick={loginWithGoogle}>
          <img
            src="http://pluspng.com/img-png/google-logo-png-open-2000.png"
            alt="google"
          />
          Continue with Google
        </button>

        <button className="login-btn" onClick={loginWithFacebook}>
          <img
            src="https://p7.hiclipart.com/preview/406/221/183/facebook-logo-social-media-computer-icons-icon-facebook-drawing.jpg"
            alt="facebook"
          />
          Continue with Facebook
        </button>

        <button className="login-btn" onClick={loginWithLinkedIn}>
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.6uTQ7mOjYOD2sNKxUdnaNAHaHa?pid=Api&P=0&h=180"
            alt="linkedin"
          />
          Continue with LinkedIn
        </button>
        <button onClick={() => r.replace("/create-profile")}>create</button>
        <button onClick={() => r.replace("/complete-profile")}>complete</button>
        <button onClick={() => r.replace("/dashboard")}>dashboard</button>
      </div>
    </div>
  );
}
