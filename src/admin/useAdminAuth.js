import { useContext } from "react";
import { AdminAuthContext } from "./adminAuthContext";

export function useAdminAuth() {
  const auth = useContext(AdminAuthContext);
  if (!auth) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider.");
  }
  return auth;
}
