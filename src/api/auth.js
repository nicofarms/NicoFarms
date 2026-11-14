import { apiRequest } from "./client";

export function requestAdminLogin(email) {
  return apiRequest("/admin/login", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export function verifyAdminLoginOtp(email, otp) {
  return apiRequest("/admin/login-otp", {
    method: "POST",
    body: JSON.stringify({ email, otp }),
  });
}
