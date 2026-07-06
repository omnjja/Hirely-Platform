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

export const startInterviewSession = async (applicationId) => {
  const response = await api.post(
    `/applications/me/${applicationId}/interview/start`,
  );
  console.log("start video", response.data);
  return response.data;
};
//6a45875abad3dcbdc175c4e4

export const createVideoUploadURL = async (
  interviewId,
  questionId,
  requestBody,
) => {
  const response = await api.post(
    `/interviews/${interviewId}/questions/${questionId}/upload-url`,
    requestBody,
  );
  console.log("upload url", response.data);
  return response.data;
};
export const saveVideoAnswer = async (interviewId, requestBody) => {
  const response = await api.post(
    `/interviews/${interviewId}/answers`,
    requestBody,
  );
  console.log("save answer", response.data);
  return response.data;
};

export const submitInterview = async (interviewId) => {
  const response = await api.post(`/interviews/${interviewId}/submit`);
  console.log("submit", response.data);
  return response.data;
};
