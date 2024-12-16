import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class Config:
    AZURE_FACE_API_ENDPOINT = os.getenv("AZURE_FACE_API_ENDPOINT")
    AZURE_FACE_API_KEY = os.getenv("AZURE_FACE_API_KEY")
    AZURE_FACE_API_VERSION = os.getenv("AZURE_FACE_API_VERSION")

    @staticmethod
    def validate():
        if not Config.AZURE_FACE_API_ENDPOINT or not Config.AZURE_FACE_API_KEY:
            raise Exception("Please set AZURE_FACE_API_ENDPOINT and AZURE_FACE_API_KEY in your .env file.")

Config.validate()
