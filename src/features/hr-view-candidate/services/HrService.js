import api from "@/lib/api";

export const getApplicationById = async (applicationId) => {
  const res = await api.get(`/${applicationId}/ApplicationSum`);
  return res.data;
};

export const addApplicationNote = async (applicationId, note) => {
  const res = await api.post(`/${applicationId}/ApplicationSum/notes`, {
    notes: [note],
  });
  return res.data;
};

export const updateApplicationNote = async (
  applicationId,
  noteId,
  updatedNote,
) => {
  const res = await api.put(
    `/${applicationId}/ApplicationSum/notes/${noteId}`,
    {
      notes: [updatedNote],
    },
  );
  return res.data;
};

export const deleteApplicationNote = async (applicationId, noteId) => {
  const res = await api.delete(
    `/${applicationId}/ApplicationSum/notes/${noteId}`,
  );
  return res.data;
};

export const updateApplicationState = async (applicationId, status) => {
  const res = await api.put(
    `/${applicationId}/ApplicationSum/applicationStatus`,
    status,
  );
  return res.data;
};
