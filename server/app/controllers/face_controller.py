from flask import Blueprint, request, jsonify
from app.services.face_service import validate_faces

face_bp = Blueprint('face', __name__)

@face_bp.route('/validate', methods=['POST'])
def validate():
    try:
        print("Inside")
        if 'photoId' not in request.files or 'verifyImage' not in request.files:
            return jsonify({"error": "Both images are required."}), 400

        # Save uploaded images temporarily
        photo_id = request.files['photoId']
        verify_image = request.files['verifyImage']
        photo_id_path = f"/tmp/{photo_id.filename}"
        verify_image_path = f"/tmp/{verify_image.filename}"
        photo_id.save(photo_id_path)
        verify_image.save(verify_image_path)

        # Validate faces
        result = validate_faces(photo_id_path, verify_image_path)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
