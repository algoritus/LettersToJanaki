import { useState } from "react";
import { supabase } from "../../lib/supabase";
import "./LetterForm.css";

export default function LetterForm() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [songName, setSongName] = useState("");
  const [songLink, setSongLink] = useState("");
  const [songMemory, setSongMemory] = useState("");


  const handleSend = async () => {

    if (!name.trim() || !message.trim()) {
      alert("Please enter your name and message.");
      return;
    }


    const { error } = await supabase
      .from("letters")
      .insert([
        {
          name,
          message,
          song_name: songName,
          song_link: songLink,
          song_memory: songMemory,
        },
      ]);


    if (error) {

      console.error("Supabase Error:", error);

      alert(
        `Failed to send letter.\n\n${error.message}`
      );

      return;
    }


    alert("Letter sent successfully ❤️");


    setName("");
    setMessage("");
    setSongName("");
    setSongLink("");
    setSongMemory("");

  };


  return (

    <section className="letter-form" id="letter">

      <h2>
        Write Your Letter ❤️
      </h2>


      <form
        onSubmit={(e)=>{
          e.preventDefault();
          handleSend();
        }}
      >


        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />


        <textarea
          placeholder="Share your memory..."
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />


        <input
          type="text"
          placeholder="Favorite song name 🎵"
          value={songName}
          onChange={(e)=>setSongName(e.target.value)}
        />


        <input
          type="text"
          placeholder="Song link (YouTube/Spotify)"
          value={songLink}
          onChange={(e)=>setSongLink(e.target.value)}
        />


        <textarea
          placeholder="Why is this song special to you?"
          value={songMemory}
          onChange={(e)=>setSongMemory(e.target.value)}
        />


        <button type="submit">
          Send Letter ❤️
        </button>


      </form>


    </section>

  );

}