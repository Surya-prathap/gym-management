"use client";

export const dynamic = "force-dynamic";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { setUserId, setAccCreated } from "../../utils/storage";
import { fetchBasicProfile } from "../../api/profile";

export default function Manager() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const id = params.get("userID");

    if (!id) {
      router.replace("/login");
      return;
    }

    setUserId(id);

    fetchBasicProfile(id)
      .then((res) => {
        const acc = res?.accCreated == 1 ? "1" : "0";
        setAccCreated(acc);

        if (acc === "1") router.replace("/dashboard");
        else router.replace("/create-profile");
      })
      .catch(() => {
        router.replace("/create-profile");
      });
  }, [params, router]);

  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: 22,
      }}
    >
      Finalizing Login...
    </div>
  );
}
