import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import "./MemoryWall.css";

export default function MemoryWall() {

  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function getLetters() {

      const { data, error } = await supabase
        .from("letters")
        .select("*")
        .order("created_at", { ascending: false });


      if (error) {

        console.error("Supabase Error:", error);

      } else {

        setLetters(data);

      }

      setLoading(false);

    }


    getLetters();


  }, []);



  return (

    <section className="memory-wall" id="memory">

      <h2>
        Memory Wall ❤️
      </h2>


      <p>
        Every song carries a story.
        <br />
        Every listener carries a memory.
      </p>



      <div className="memory-grid">


        {
          loading ?

          <p>
            Loading memories...
          </p>


          :


          letters.length === 0 ?


          <p>
            No letters yet 💌
            <br />
            Be the first person to share a Janaki memory.
          </p>


          :


          letters.map((letter) => (

     <div className="memory-card" key={letter.id}>

  <h3>
    ❤️ {letter.name}
  </h3>


  <p>
    {letter.message}
  </p>


  {letter.song_name && (

    <div className="song-memory">

      <h4>
        🎵 {letter.song_name}
      </h4>


      <p>
        {letter.song_memory}
      </p>


      {letter.song_link && (

        <a
          href={letter.song_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Listen to this song
        </a>

      )}

    </div>

  )}


  <small>
    {new Date(letter.created_at).toLocaleDateString()}
  </small>


</div>

          ))

        }


      </div>


    </section>

  );

}