import { useState } from "react";

function LetterBox() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;

    setSent(true);
    setMessage("");
    setName("");
  };

  return (
    <div>
      <h2>Write your letter to Janaki Amma ❤️</h2>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Write your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleSend}>
        Send ✉️
      </button>

      {sent && (
        <p>
          Thank you for sharing your love for Janaki Amma. 🙏
        </p>
      )}
    </div>
  );
}

export default LetterBox;