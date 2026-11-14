import { apiRequest } from "./client";

export async function getStaff() {
  const result = await apiRequest("/staff", { cache: "no-store" });
  if (!Array.isArray(result?.staff)) {
    throw new Error("The staff API returned an unexpected response.");
  }
  return result.staff;
}

export function createStaffMember(member, token) {
  return apiRequest("/staff", {
    method: "POST",
    token,
    body: JSON.stringify(member),
  });
}

export function updateStaffMember(id, member, token) {
  return apiRequest(`/staff/${encodeURIComponent(id)}`, {
    method: "PUT",
    token,
    body: JSON.stringify(member),
  });
}

export function deleteStaffMember(id, token) {
  return apiRequest(`/staff/${encodeURIComponent(id)}`, {
    method: "DELETE",
    token,
  });
}
