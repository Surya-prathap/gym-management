"use client";
import { clearAll } from "../utils/storage";
import { useRouter } from "next/navigation";
import "./topnav.css";

export default function TopNav() {
  const r = useRouter();

  const name =
    typeof window !== "undefined"
      ? localStorage.getItem("userName") || "User"
      : "User";

  const pic =
    typeof window !== "undefined"
      ? localStorage.getItem("profilePic") || "/images/avatar.png"
      : "/images/avatar.png";

  return (
    <div className="top-nav">
      <div className="top-left">
        <div className="top-brand">RABLO</div>
      </div>

      <div className="top-center">
        <a href="/" className="top-link">
          Home
        </a>
        <a href="/create-profile" className="top-link">
          Profile
        </a>
        <a href="/dashboard" className="top-link">
          Dashboard
        </a>
      </div>

      <div className="top-right">
        <span className="top-username">{name}</span>
        <img src={pic} className="top-avatar" />
        <button
          className="top-logout"
          onClick={() => {
            clearAll();
            r.push("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
