from app.utils.azure_api import detect_face, verify_faces

def validate_faces(photo_id_path, person_image_path):
    """
    Validate two images using Azure Face API.
    """
    face_id1 = detect_face(photo_id_path)
    face_id2 = detect_face(person_image_path)
    return verify_faces(face_id1, face_id2)
