/* eslint-disable react/prop-types */
import Navbar from "../../Components/Navbar/Navbar";
import SearchContent from "../../Components/SearchContent/SearchContent";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Search.css'
import './_search.scss'
const Search = ({ sidebar, setSidebar ,category,setCategory }) => {
  return (
    <div>
      <Navbar setSidebar={setSidebar} />

      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <SearchContent sidebar={sidebar}/>
      </div>
    </div>
  );
};

export default Search;
