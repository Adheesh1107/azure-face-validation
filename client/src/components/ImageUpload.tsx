import React, { useState } from "react";
import { validateFaces, FaceValidationResponse } from "../services/faceValidationService";

const ImageUpload: React.FC = () => {
  // State for the selected images
  const [photoId, setPhotoId] = useState<File | null>(null);
  const [verifyImage, setVerifyImage] = useState<File | null>(null);

  // State for result and error messages
  const [result, setResult] = useState<FaceValidationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Handle file selection for the Photo ID
  const handlePhotoIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPhotoId(event.target.files[0]);
    }
  };

  // Handle file selection for the Verify Image
  const handleVerifyImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setVerifyImage(event.target.files[0]);
    }
  };

  // Submit the images for validation
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setResult(null);

    if (!photoId || !verifyImage) {
      setError("Both images are required for validation.");
      return;
    }

    try {
      const response = await validateFaces(photoId, verifyImage);
      setResult(response);
    } catch (err) {
      // Handle errors returned from the service
      if (typeof err === "object" && err !== null && "error" in err) {
        setError((err as { error: string }).error);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <h1>Face Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photoId">Upload Photo ID:</label>
          <input
            type="file"
            id="photoId"
            accept="image/*"
            onChange={handlePhotoIdChange}
          />
        </div>

        <div>
          <label htmlFor="verifyImage">Upload Image to Verify:</label>
          <input
            type="file"
            id="verifyImage"
            accept="image/*"
            onChange={handleVerifyImageChange}
          />
        </div>

        <button type="submit">Validate Faces</button>
      </form>

      {result && (
        <div>
          <h2>Validation Result:</h2>
          <p>
            <strong>Match:</strong>{" "}
            {result.isIdentical ? "Yes" : "No"}
          </p>
          <p>
            <strong>Confidence:</strong>{" "}
            {(result.confidence * 100).toFixed(2)}%
          </p>
        </div>
      )}

      {error && (
        <div style={{ color: "red" }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;