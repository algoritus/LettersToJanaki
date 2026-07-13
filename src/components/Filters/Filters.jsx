import "./Filters.css";

export default function Filters({ sort, setSort }) {
  return (
    <div className="filters">

      <button
        className={sort === "new" ? "active" : ""}
        onClick={() => setSort("new")}
      >
        🕒 Newest
      </button>

      <button
        className={sort === "likes" ? "active" : ""}
        onClick={() => setSort("likes")}
      >
        ❤️ Most Liked
      </button>

    </div>
  );
}