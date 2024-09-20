/* eslint-disable react/prop-types */
import './_home.scss'
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";

const Home = ({ sidebar, setData, setSidebar,category,setCategory }) => {

  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
      <Feed setData={setData} category={category} />
      </div>
    </>
  );
};

export default Home;
