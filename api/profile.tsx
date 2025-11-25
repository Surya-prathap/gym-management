const BASE = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";

export async function fetchBasicProfile(id: string) {
  try {
    const res = await fetch(`${BASE}/manager/getBasicProfile/${id}`);

    if (!res.ok) return { success: false };

    const data = await res.json();
    return data;
  } catch (e) {
    return { success: false };
  }
}

export async function patchCreateProfile(id: string, body: any) {
  try {
    const res = await fetch(`${BASE}/manager/createManagerProfile/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return await res.json();
  } catch (e) {
    return { success: false };
  }
}
