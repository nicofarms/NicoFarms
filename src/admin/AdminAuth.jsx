import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AdminAuthContext } from "./adminAuthContext";
import { useAdminAuth } from "./useAdminAuth";

const TOKEN_KEY = "nicofarms-admin-token";

export function AdminAuthProvider({ children }) {
  const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY));

  const signIn = (newToken) => {
    sessionStorage.setItem(TOKEN_KEY, newToken);
    setToken(newToken);
  };

  const signOut = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  return (
    <AdminAuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function RequireAdmin({ children }) {
  const { token } = useAdminAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return children;
}
