from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import datetime
from pydantic import BaseModel

from database import engine, SessionLocal
from models import Base, Letter


# Create tables
Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Letters To Janaki API"
)


# React connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# Database session
def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()



# Request format
class LetterCreate(BaseModel):

    name: str
    message: str



@app.get("/")
def home():

    return {
        "message": "Letters To Janaki Backend Running ❤️"
    }



# Save letter
@app.post("/letters")
def create_letter(
    letter_data: LetterCreate,
    db: Session = Depends(get_db)
):

    letter = Letter(

        name=letter_data.name,

        message=letter_data.message,

        created_at=datetime.now().strftime("%d-%m-%Y")

    )


    db.add(letter)

    db.commit()

    db.refresh(letter)


    return {

        "success": True,

        "letter": letter.id

    }



# Get all letters
@app.get("/letters")
def get_letters(
    db: Session = Depends(get_db)
):

    letters = db.query(Letter).all()

    return letters