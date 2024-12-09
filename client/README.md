 # Face Validation Frontend

This React application provides a user interface for uploading two images: a photo ID and a verification image. The images are sent to the backend for validation, and the result is displayed with details about whether the images match and the confidence score.

---

## Features
- Clean and user-friendly interface for uploading images.
- Integrates with a Flask backend for face validation using the Azure Face API.
- Modular code structure with TypeScript for better maintainability.

---

## Setup

### Prerequisites
- **Node.js** (v22.12.0)
- **npm** or **Yarn** package manager

---

## Steps to Set Up

1. **Navigate to the `client` directory**:
   ```
   cd client
   ```
2. Install dependencies:
    ```
    npm install
    ```
3. Set up environment variables: Create a .env file in the client folder with the following content:
    ```
    REACT_APP_SERVER_BASE_URL=http://127.0.0.1:5000
    ```
    Replace http://127.0.0.1:5000 with your backend server URL if it's different.
4. Run the frontend:
    ```
    npm start
    ```
    The application will start at http://localhost:5173.

## Available Scripts
In the project directory, you can run:
```
npm run dev
```
Runs the app in development mode. Open http://localhost:5173 to view it in your browser.
```
npm build
```
Builds the app for production to the build folder.

---
## Styling and Frameworks

- Tailwind CSS: Used for styling.
- React Hooks: Manages component state and effects.
- TypeScript: Strongly typed components and services.

---
## Key Components
`ImageUpload.tsx`
Handles:
 - Image uploads for both the photo ID and verification image.
 - Previewing the uploaded images.
 - Making requests to the backend for face validation.

`faceValidationService.ts`
Provides:
 - Functions to interact with the backend API.
 - Error handling and type safety for API responses

---