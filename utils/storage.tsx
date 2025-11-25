// utils/storage.ts

export function setUserId(id: string) {
  if (typeof window !== "undefined") localStorage.setItem("uid", id);
}

export function getUserId() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("uid");
}

export function setAccCreated(v: string) {
  if (typeof window !== "undefined") localStorage.setItem("acc", v);
}

export function getAccCreated() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("acc");
}

export function setUserName(name: string) {
  if (typeof window !== "undefined") localStorage.setItem("uname", name);
}

export function getUserName() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("uname");
}

export function setUserEmail(email: string) {
  if (typeof window !== "undefined") localStorage.setItem("uemail", email);
}

export function getUserEmail() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("uemail");
}

export function setProfilePic(url: string) {
  if (typeof window !== "undefined") localStorage.setItem("upic", url);
}

export function getProfilePic() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("upic");
}

export function clearAll() {
  if (typeof window !== "undefined") localStorage.clear();
}
