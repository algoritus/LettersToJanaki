import "./SearchBar.css";

export default function SearchBar({search,setSearch}){

return(

<div className="search-box">

<input

type="text"

placeholder="Search memories, songs, countries..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

</div>

);

}