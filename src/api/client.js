const API_BASE_URL = "/api";

export async function apiRequest(path, options = {}) {
  const { token, ...requestOptions } = options;
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...requestOptions,
    headers: {
      ...(requestOptions.body ? { "Content-Type": "application/json" } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...requestOptions.headers,
    },
  });
  const responseText = await response.text();
  let responseData = null;

  if (responseText) {
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = responseText;
    }
  }

  if (!response.ok) {
    const message =
      typeof responseData?.message === "string"
        ? responseData.message
        : typeof responseData === "string" && responseData.trim()
          ? responseData
          : `Request failed with status ${response.status}.`;
    throw new Error(message);
  }

  return responseData;
}
