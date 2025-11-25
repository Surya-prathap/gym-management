"use client";

import Image from "next/image";
import TopNav from "../../components/TopNav";
import BottomNav from "../../components/BottomNav";

import { useRouter } from "next/navigation";
import { getUserName, getProfilePic } from "../../utils/storage";
import "./create-profile.css";
import { Layout, CreditCard, UserCheck, Users } from "lucide-react";

export default function CreateProfile() {
  const r = useRouter();

  const name = typeof window !== "undefined" ? getUserName() ?? "User" : "User";

  const pic =
    typeof window !== "undefined"
      ? getProfilePic() ?? "/images/avatar.png"
      : "/images/avatar.png";

  return (
    <div className="create-profile-page">
      <TopNav />

      <div className="cp-wrapper">
        <div className="cp-header">
          <div className="cp-user">
            <Image
              src={pic}
              alt="avatar"
              width={58}
              height={58}
              className="cp-avatar"
            />
            <div>
              <div className="cp-hi">Hi, {name}</div>
              <div className="cp-rablo">Rablo AI</div>
            </div>
          </div>

          <button className="cp-logout" onClick={() => r.replace("/login")}>
            Logout
          </button>
        </div>

        <div className="cp-welcome-card">
          <div className="cp-title">Welcome Back</div>
          <div className="cp-sub">
            You are one-step closer to creating your app.
          </div>

          <div className="cp-progress-row">
            <div className="cp-progress-line">
              <div className="cp-circle active"></div>
              <div className="cp-circle"></div>
              <div className="cp-circle"></div>
            </div>
            <div className="cp-percent">30%</div>
          </div>

          <button
            className="cp-btn"
            onClick={() => r.push("/create-profile/complete-profile")}
          >
            Complete Profile
          </button>
        </div>

        <div className="cp-image-row">
          <div className="cp-img">
            <Layout size={30} />
            <span> My Website</span>
          </div>
          <div className="cp-img">
            <CreditCard size={30} />
            <span> My Transactions</span>
          </div>
          <div className="cp-img">
            <UserCheck size={30} />
            <span> Membership</span>
          </div>
          <div className="cp-img">
            <Users size={30} />
            <span> Members</span>
          </div>
        </div>

        <div className="cp-two-cards">
          <div className="cp-card">
            <button>+</button>
          </div>
          <div className="cp-card">
            <button>+</button>
          </div>
        </div>

        <div className="cp-bottom-card">
          <button>+</button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
