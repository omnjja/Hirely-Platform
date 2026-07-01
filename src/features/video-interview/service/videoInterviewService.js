import api from "@/lib/api";

export const getInstructions = async () => {
  const response = await api.get("/instructions");
  return response.data;
};

export const getTest = async () => {
  const response = await api.get("/test");
  return response.data;
};

export const getInterviewSession = async (applicationId) => {
  const response = await api.get(`/applications/me/${applicationId}/interview`);
  console.log("session", response.data);
  return response.data;
};
//6a45875abad3dcbdc175c4e4
