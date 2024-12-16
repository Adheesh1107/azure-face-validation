import requests
from app.config import Config

HEADERS = {
    "Ocp-Apim-Subscription-Key": Config.AZURE_FACE_API_KEY,
    "Content-Type": "application/octet-stream",
}

def detect_face(image_path):
    """
    Detect a face in the image and return the faceId.
    """
    detect_url = f"{Config.AZURE_FACE_API_ENDPOINT}face/{Config.AZURE_FACE_API_VERSION}/detect"
    params = {"returnFaceId": "True", "detectionModel": "detection_01"}

    with open(image_path, "rb") as image:
        response = requests.post(detect_url, params=params, headers=HEADERS, data=image)

    if response.status_code == 200:
        faces = response.json()
        if faces:
            return faces[0]["faceId"]
        raise ValueError("No face detected in the image.")
    else:
        raise Exception(f"Face detection failed: {response.status_code} {response.text}")


def verify_faces(face_id1, face_id2):
    """
    Verify if two face IDs belong to the same person.
    """
    verify_url = f"{Config.AZURE_FACE_API_ENDPOINT}/face/v1.0/verify"
    payload = {"faceId1": face_id1, "faceId2": face_id2}

    response = requests.post(verify_url, headers={"Ocp-Apim-Subscription-Key": Config.AZURE_FACE_API_KEY}, json=payload)

    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Face verification failed: {response.status_code} {response.text}")
