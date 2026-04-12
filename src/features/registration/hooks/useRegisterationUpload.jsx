import { 
    getUploadImageURL, 
    getCVUploadURL,
    uploadImageToS3,
    uploadCVToS3
 } from "../services/uploadService";

 export const useRegistrationUpload = () => {
    const handleImageUpload = async (file) => {
        try {
            const { uploadURL, key } = await getUploadImageURL(file);
            await uploadImageToS3(uploadURL, file);
            return { key };
        } catch (error) {
            console.error("Image upload error:", error);
            throw error;
        }
    };

    const handleCVUpload = async (file) => {
        try {
            const { uploadURL, key } = await getCVUploadURL(file);
            await uploadCVToS3(uploadURL, file);
            return { key };
        } catch (error) {
            console.error("CV upload error:", error);
            throw error;
        }
    };

    return { handleImageUpload, handleCVUpload };
};