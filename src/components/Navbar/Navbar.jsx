import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        💌 Letters to Janaki
      </div>

     <ul>
  <li onClick={() => document.getElementById("home")?.scrollIntoView({behavior:"smooth"})}>
    Home
  </li>

  <li onClick={() => document.getElementById("letter")?.scrollIntoView({behavior:"smooth"})}>
    Letters
  </li>

  <li onClick={() => document.getElementById("songs")?.scrollIntoView({behavior:"smooth"})}>
    Songs
  </li>

  <li onClick={() => document.getElementById("timeline")?.scrollIntoView({behavior:"smooth"})}>
    Timeline
  </li>


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