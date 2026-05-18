import api from "@/lib/api";

export const getApplicationStats = async () => {
  const res = await api.get("/jobs/applications/me/stats");
  return res.data;
};

export const getApplications = async ({ page, state }) => {
  const params = new URLSearchParams();
  params.append("page", page);
  params.append("limit", 10);

  if (state && state !== "ALL") {
    params.append("status", state);
  }
  const res = await api.get(`/jobs/applications/me?${params.toString()}`);

  return res.data;
};

export const getApplicationById = async (id) => {
  const res = await api.get(`/jobs/applications/me/${id}`);
  return res.data;
};
