import { apiRequest } from "./client";

export function createContactMessage(message) {
  return apiRequest("/contact", {
    method: "POST",
    body: JSON.stringify(message),
  });
}

export async function getContactMessages(token) {
  const result = await apiRequest("/contact", { token });
  const contacts = Array.isArray(result)
    ? result
    : result?.contacts || result?.messages;

  if (!Array.isArray(contacts)) {
    throw new Error("The contacts API returned an unexpected response.");
  }

  return contacts;
}
