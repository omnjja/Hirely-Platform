export const useFileDownload = () => {
  const downloadFile = async ({ requestFn, filename = "file", toast }) => {
    try {
      toast?.loading?.("Exporting file...", { id: "export-file" });

      const response = await requestFn();

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = filename;

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);

      toast?.success?.("File downloaded successfully", { id: "export-file" });
    } catch (err) {
      console.error(err);
      toast?.error?.("Failed to download file", { id: "export-file" });
    }
  };

  return { downloadFile };
};
