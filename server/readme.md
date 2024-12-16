# Face Validation Backend

The backend for the Face Validation application is built using Flask. It handles image uploads, integrates with the Azure Face API for face detection and verification, and provides validation results to the frontend.

---

## Features
- Flask-based REST API for face validation.
- Uses Azure Face API to detect and verify faces in images.
- Modular code structure following the MVC pattern.
- Supports multiple environment configurations.

---

## Setup

### Prerequisites
- **Python** (v3.8 or above)
- **Pip** package manager
- An Azure Face API subscription with an endpoint and API key.

---

## Steps to Set Up

1. **Navigate to the `server` directory**:
   ```
   cd server
   ```
2. Create and activate a virtual environment:
    ```
    python -m venv venv
    source venv/bin/activate      # On Linux/Mac
    venv\Scripts\activate         # On Windows
    ```
3. Install dependencies:
    ```
    pip install -r requirements.txt
    ```
4. Set up environment variables: Create a .env file in the server folder with the following content:
    ```
    FRONTEND_URL=http://127.0.0.1:5000
    AZURE_FACE_API_ENDPOINT=https://<your-endpoint>.cognitiveservices.azure.com/
    AZURE_FACE_API_KEY=<your-azure-face-api-key>
    AZURE_FACE_API_VERSION=v1.0
    ```
    Replace <your-endpoint> and <your-azure-face-api-key> with your Azure Face API credentials.
5. Run the backend server:
    ```
    flask run
    ```
    The server will start at http://127.0.0.1:5000.

---
## API Endpoints
`POST /api/validate-faces`
Description:
Validates whether the two uploaded images belong to the same person.

Request:
 - Body (Form-Data):
    - photoId: First image (Photo ID).
    - verificationImage: Second image to compare.

Response:
 - Success (200 OK):
 ```
    {
    "isIdentical": true,
    "confidence": 0.95
    }
```
 - Error (400 Bad Request)
 ```
    {
    "error": "Error message here"
    }
```
---
## Additional Notes
- Ensure the Azure Face API credentials are valid and active.
- For production, update the SERVER_BASE_URL and Azure credentials in the .env file.
---