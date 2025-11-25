"use client";
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
      .then((res: any) => {
        const acc = res?.data?.accCreated === 1 ? "1" : "0";
        setAccCreated(acc as "0" | "1");

        if (acc === "1") router.replace("/dashboard");
        else router.replace("/create-profile");
      })
      .catch(() => router.replace("/create-profile"));
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
      }}
    >
      Finalizing Login...
    </div>
  );
}
