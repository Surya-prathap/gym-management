"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopNav from "../../../components/TopNav";
import BottomNav from "../../../components/BottomNav";
import {
  getUserId,
  getUserName,
  getProfilePic,
  getUserEmail,
  setAccCreated,
} from "../../../utils/storage";
import { patchCreateProfile } from "../../../api/profile";
import "./complete-profile.css";

export default function CompleteProfile() {
  const r = useRouter();
  const id = getUserId();

  const [form, setForm] = useState({
    fullName: getUserName() ?? "",
    email: getUserEmail() ?? "",
    contactNumber: "",
    dob: "",
    gender: "",
    role: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    languages: [] as string[],
  });

  const avatar =
    typeof window !== "undefined"
      ? getProfilePic() ?? "/images/avatar.png"
      : "/images/avatar.png";

  function update(k: keyof typeof form, v: any) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  function clearForm() {
    setForm({
      fullName: "",
      email: "",
      contactNumber: "",
      dob: "",
      gender: "",
      role: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      languages: [],
    });
  }

  const toggleLang = (lang: string) => {
    if (form.languages.includes(lang)) {
      update(
        "languages",
        form.languages.filter((l) => l !== lang)
      );
    } else {
      update("languages", [...form.languages, lang]);
    }
  };

  async function submit(e: any) {
    e.preventDefault();
    if (!id) return r.replace("/login");

    await patchCreateProfile(id, form);
    setAccCreated("1");
    r.replace("/dashboard");
  }

  return (
    <div className="cp-bg">
      <TopNav />

      <div className="cp-container">
        <div className="cp-top-user">
          <img src={avatar} alt="avatar" className="cp-top-avatar" />
          <div>
            <div className="cp-top-text1">Hi, {form.fullName || "User"}</div>
            <div className="cp-top-text2">Complete Your Profile</div>
          </div>
        </div>

        <form className="cp-form" onSubmit={submit}>
          <div className="cp-grid">
            <div className="cp-field">
              <label>Full Name</label>
              <input
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                required
              />
            </div>

            <div className="cp-field">
              <label>Email</label>
              <input
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
              />
            </div>

            <div className="cp-field">
              <label>Contact Number</label>
              <input
                value={form.contactNumber}
                onChange={(e) => update("contactNumber", e.target.value)}
                required
              />
            </div>

            <div className="cp-field">
              <label>Date of Birth</label>
              <input
                type="date"
                value={form.dob}
                onChange={(e) => update("dob", e.target.value)}
                required
              />
            </div>

            <div className="cp-field">
              <label>Gender</label>
              <select
                value={form.gender}
                onChange={(e) => update("gender", e.target.value)}
                required
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>

            <div className="cp-field">
              <label>Role</label>
              <select
                value={form.role}
                onChange={(e) => update("role", e.target.value)}
                required
              >
                <option value="">Select</option>
                <option>Manager</option>
                <option>Trainer</option>
                <option>Receptionist</option>
              </select>
            </div>

            <div className="cp-field">
              <label>Country</label>
              <input
                value={form.country}
                onChange={(e) => update("country", e.target.value)}
                required
              />
            </div>

            <div className="cp-field">
              <label>State</label>
              <input
                value={form.state}
                onChange={(e) => update("state", e.target.value)}
                required
              />
            </div>

            <div className="cp-field">
              <label>City</label>
              <input
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                required
              />
            </div>

            <div className="cp-field">
              <label>Pincode</label>
              <input
                value={form.pincode}
                onChange={(e) => update("pincode", e.target.value)}
                required
              />
            </div>

            <div className="cp-field cp-full">
              <label>Languages Known</label>

              <div className="lang-row">
                {["English", "Hindi", "Kannada", "Telugu"].map((l) => (
                  <button
                    key={l}
                    type="button"
                    className={
                      form.languages.includes(l)
                        ? "lang-btn active"
                        : "lang-btn"
                    }
                    onClick={() => toggleLang(l)}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="cp-btn-row">
            <button type="button" className="cp-clear" onClick={clearForm}>
              Clear
            </button>

            <button
              type="submit"
              className="cp-submit"
              onClick={() => r.replace("/dashboard")}
            >
              Save & Continue
            </button>
          </div>
        </form>
      </div>

      <BottomNav />
    </div>
  );
}
