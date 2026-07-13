import "./LetterCard.css";
import { Heart, Share2 } from "lucide-react";
import { useState } from "react";

export default function LetterCard({ letter }) {

  const [likes,setLikes] = useState(letter.likes || 0);


  const handleLike = () => {
    setLikes(likes + 1);
  };


  const handleShare = () => {
    navigator.share?.({
      title:"Letters to Janaki",
      text:letter.message
    });
  };


  return (

    <article className="letter-card">

      <div className="avatar">
        {letter.name?.charAt(0) || "💌"}
      </div>


      <h3>{letter.name}</h3>

      <p className="country">
        {letter.country} • {letter.language}
      </p>


      <div className="song">
        🎵 {letter.song}
      </div>


      <p className="letter-text">
        "{letter.message}"
      </p>


      <div className="card-footer">

        <button onClick={handleLike}>
          <Heart size={18}/>
          {likes}
        </button>


        <button onClick={handleShare}>
          <Share2 size={18}/>
          Share
        </button>

      </div>


      <small>
        {letter.date}
      </small>


    </article>

  );
}