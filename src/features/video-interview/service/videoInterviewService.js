import api from "@/lib/api";

export const getInstructions = async () => {
  const response = await api.get("/instructions");
  return response.data;
};

export const getTest = async () => {
  const response = await api.get("/test");
  console.log("test", response.data);
  return response.data;
};

export const getInterviewSession = async (applicationId) => {
  const response = await api.get(`/applications/me/${applicationId}/interview`);
  console.log("session", response.data);
  return response.data;
};
//6a0b8718036bd27e11fe248e
