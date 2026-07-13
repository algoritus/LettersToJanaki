import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        💌 Letters to Janaki
      </div>

      <ul>
        <li>Home</li>
        <li>Letters</li>
        <li>Songs</li>
        <li>Timeline</li>
        <li>Gallery</li>
      </ul>

     <button
      onClick={() => {
        document
         .getElementById("letter")
         ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Write Letter
</button>
    </nav>
  );
}