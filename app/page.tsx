"use client";
import { useRouter } from "next/navigation";
import "./intro.css";

export default function IntroPage() {
  const r = useRouter();

  return (
    <div className="intro-page">
      <div className="intro-box">
        <div className="intro-title">Welcome to Rablo</div>
        <div className="intro-sub">
          All your business operations in one place,ready for you to take
          charge.
        </div>

        <button className="intro-btn" onClick={() => r.push("/login")}>
          Get Started
        </button>
      </div>
    </div>
  );
}
