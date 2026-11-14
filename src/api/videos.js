import { apiRequest } from "./client";

export async function getVideos() {
  const result = await apiRequest("/videos");
  if (!Array.isArray(result?.videos)) {
    throw new Error("The videos API returned an unexpected response.");
  }
  return result.videos;
}

export function createVideo(video, token) {
  return apiRequest("/videos", {
    method: "POST",
    token,
    body: JSON.stringify(video),
  });
}

export function updateVideo(id, video, token) {
  return apiRequest(`/videos/${encodeURIComponent(id)}`, {
    method: "PUT",
    token,
    body: JSON.stringify(video),
  });
}

export function getYoutubeEmbedUrl(video) {
  let videoId = video.youtubeId;
  if (!videoId && video.youtubeUrl) {
    try {
      const url = new URL(video.youtubeUrl);
      videoId = url.hostname.endsWith("youtu.be")
        ? url.pathname.slice(1).split("/")[0]
        : url.searchParams.get("v") ||
          url.pathname.match(/\/(?:embed|shorts|live)\/([^/]+)/)?.[1];
    } catch {
      return "";
    }
  }
  return videoId ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}` : "";
}
