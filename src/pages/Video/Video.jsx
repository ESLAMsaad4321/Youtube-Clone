/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Reccomended/Recommended";
import "./Video.css";
import './_video.scss'
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
function Video({ sidebar, setData, setSidebar,category,setCategory }) {
  const { videoId, categoryId } = useParams();

  return (
    <div >
      <Navbar setSidebar={setSidebar} />
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`play-container ${sidebar ? "" : "large-play-container"}`}>
      <PlayVideo videoId={videoId} />
      <Recommended sidebar={sidebar} categoryId={categoryId}/>
      </div>
    </div>
  );
}

export default Video;
