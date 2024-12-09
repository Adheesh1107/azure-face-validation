# Face Validation App

This project allows users to upload two images to validate whether they match. The validation is performed using the **Azure Face API** via a Python Flask backend, while the React frontend provides an intuitive interface for image uploads and result display.

---

## Features
- Upload and view two images: A photo ID and a verification image.
- Validate whether the two faces match, with a confidence score provided by the backend.
- Simple and clean UI for an intuitive user experience.
- Modular frontend and backend setup for flexibility and scalability.

---

## Tech Stack
1. **Frontend**: React with TypeScript, Tailwind CSS
2. **Backend**: Python Flask
3. **Face Recognition API**: Azure Face API
4. **Environment**: Node.js, Flask server, and Docker support (optional)

---

## Setup

### Prerequisites
- Node.js (v18 or above)
- Python (v3.8 or above)
- Azure Face API subscription (requires API Key and Endpoint)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

---

### Steps to Run the Project

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Set up the backend (Flask server): Navigate to the server folder:
    ```
    cd server
    ```
    Follow the instructions in the server/README.md.
3. Set up the frontend (React app): Navigate to the client folder:
    ```
    cd ../client

    ```
    Follow the instructions in the client/README.md.
4. Run the application:
    - Start the backend server first.
    - Then start the React frontend.
    - Open your browser at http://localhost:5173.


    