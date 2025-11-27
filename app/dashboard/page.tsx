"use client";

import TopNav from "../../components/TopNav";
import BottomNav from "../../components/BottomNav";
import { useRouter } from "next/navigation";
import {
  getUserName,
  getUserId,
  getProfilePic,
  clearAll,
} from "../../utils/storage";
import "./dashboard.css";

export default function Dashboard() {
  const r = useRouter();

  const name = typeof window !== "undefined" ? getUserName() ?? "User" : "User";

  const id =
    typeof window !== "undefined" ? getUserId() ?? "ID" : "id not found";

  const pic =
    typeof window !== "undefined"
      ? getProfilePic() ?? "/images/avatar.png"
      : "/images/avatar.png";

  function logout() {
    clearAll();
    r.replace("/login");
  }

  return (
    <div className="db-bg">
      <TopNav />

      <div className="db-container">
        <div className="db-header">
          <div className="db-user">
            <img src={pic} alt="" className="db-avatar" />
            <div>
              <div className="db-hi">Hi, {name}</div>
              <div className="db-sub">Welcome back to your Fitness Panel</div>
              <div>ID : {id}</div>
            </div>
          </div>

          <button className="db-logout" onClick={logout}>
            Logout
          </button>
        </div>

        <div className="db-large-card">
          <span>Begin your Gym Diet Plan</span>
        </div>

        <div className="db-two-cols">
          <div className="db-col-card">
            <span>Health Tips</span>
          </div>
          <div className="db-col-card">
            <span>Gym Timings</span>
          </div>
        </div>

        <div className="db-three-row">
          <div className="db-mini-card"> Daily Challenges</div>
          <div className="db-mini-card"> Weekly Challenges</div>
          <div className="db-mini-card"> Monthly Challenges</div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
