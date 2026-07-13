import "./SongGallery.css";
import { songs } from "../../data/songs";

export default function SongGallery() {
  return (
    <section className="song-gallery" id="songs">

      <h2>Timeless Songs</h2>

      <p className="gallery-subtitle">
        Every song carries a story. Every melody keeps a memory alive.
      </p>

      <div className="songs-grid">

        {songs.map((song) => (
          <div className="song-card" key={song.id}>

            <div className="album-cover">
              🎵
            </div>

            <h3>{song.title}</h3>

            <p>
              <strong>Album:</strong> {song.album}
            </p>

            <p>
              <strong>Language:</strong> {song.language}
            </p>

            <p>
              <strong>Year:</strong> {song.year}
            </p>

            <div className="stream-links">

              <a
                href={song.spotify}
                target="_blank"
                rel="noreferrer"
              >
                Spotify
              </a>

              <a
                href={song.apple}
                target="_blank"
                rel="noreferrer"
              >
                Apple Music
              </a>

              <a
                href={song.youtube}
                target="_blank"
                rel="noreferrer"
              >
                YouTube Music
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}