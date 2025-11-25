"use client";
import { useRouter } from "next/navigation";
import "./bottomnav.css";
import { Home, User, Scan } from "lucide-react";

export default function BottomNav() {
  const r = useRouter();

  return (
    <div className="bottom-nav">
      <button onClick={() => r.push("/")} className="bottom-item">
        <Home size={24} />
      </button>

      <button onClick={() => r.push("/scan")} className="bottom-item">
        <Scan size={24} />
      </button>

      <button onClick={() => r.push("/create-profile")} className="bottom-item">
        <User size={24} />
      </button>
    </div>
  );
}
