from flask import Flask
from flask_cors import CORS
import os
from app.controllers.face_controller import face_bp

def create_app():
    app = Flask(__name__)
    print(os.getenv("FRONTEND_URL"))
    CORS(app, resources={r"/api/*": {"origins": os.getenv("FRONTEND_URL")}})
    
    app.register_blueprint(face_bp, url_prefix='/api/face')  # Register routes
    return app
