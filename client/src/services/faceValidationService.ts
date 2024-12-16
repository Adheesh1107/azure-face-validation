import axios, { AxiosError } from "axios";

export interface FaceValidationResponse {
  isIdentical: boolean;
  confidence: number;
}

interface ApiError {
  error: string;
  message?: string;
  statusCode?: number;
}

// Fetch base URL from environment variables
const BASE_URL = import.meta.env.REACT_APP_SERVER_BASE_URL || "http://127.0.0.1:5000";

if (!BASE_URL) {
  throw new Error("REACT_APP_SERVER_BASE_URL is not set in the environment variables.");
}

// Service function for validating faces
export const validateFaces = async (
  photoId: File,
  verifyImage: File
): Promise<FaceValidationResponse> => {
  try {
    // Create FormData to send images
    const formData = new FormData();
    formData.append("photoId", photoId);
    formData.append("verifyImage", verifyImage);

    // Make API call to Flask backend
    console.log(formData);
    console.log(`${BASE_URL}/api/face/validate`)
    const response = await axios.post<FaceValidationResponse>(
      `${BASE_URL}/api/face/validate`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    return response.data;
  } catch (error) {
    // Handle Axios errors
    console.log(error);
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      throw axiosError.response?.data || { error: "Unexpected error occurred!" };
    }

    // Handle generic errors
    throw { error: "Something went wrong!", message: (error as Error).message };
  }
};
