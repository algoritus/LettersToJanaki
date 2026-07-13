from sqlalchemy import Column, Integer, String, Text
from database import Base


class Letter(Base):

    __tablename__ = "letters"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    name = Column(
        String(100)
    )


    message = Column(
        Text
    )


    created_at = Column(
        String(50)
    )