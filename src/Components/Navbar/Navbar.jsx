/* eslint-disable react/prop-types */
// import "./Navbar.css";
import { MdApps, MdNotifications } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import './_navbar.scss'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GetAllVideosContext } from "../../utils/GetAllVideos";
const Navbar = ({ setSidebar }) => {
  const profile_image = JSON.parse(sessionStorage.getItem('user'))
  const {input,setInput} =useContext(GetAllVideosContext);
  const navigate = useNavigate();
  const submitHandle =(e)=>{
    e.preventDefault();
    navigate (`/search/${input}`);
    console.log(input)
  }
  return (
    // <nav className="flex-div">
    //   <div className="nav-left flex-div">
    //     <img
    //       src={menu_icon}
    //       className="menu-icon"
    //       onClick={() => setSidebar((prev) => (prev === false ? true : false))}
    //       alt=""
    //     />
    //     <Link to={"/"}>
    //       <img
    //         src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
    //         className="logo"
    //         alt=""
    //       />
    //     </Link>{" "}
    //   </div>
    //   <div className="nav-middle flex-div">
    //     <div  className="search-box flex-div">
    //       <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder="Search" />
    //       <img onClick={submitHandle} src={search_icon} alt="" />
    //     </div>
    //   </div>
    //   <div className="nav-right flex-div">
    //     <img src={upload_icon} alt="" />
    //     <img src={more_icon} alt="" />
    //     <img src={notification_icon} alt="" />
    //     <img src={profile_image.photoUrl} className="user-icon" alt="" />  
    //   </div>
    // </nav>
    <div className="header">
      <FaBars className="header_menu" size={22} onClick={()=>setSidebar((prev) => (prev === false ? true : false))}/>
      <img
        src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header_logo"
      />
      <form>
        <input type="text" onChange={(e)=>{
          setInput(e.target.value)
          submitHandle
        } 
      }placeholder="Search"/>
        <button type="submit"> 
          <AiOutlineSearch onClick={submitHandle} size={22}/>
        </button>
      </form>
      <div className="header_icons">
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src={profile_image?.photoUrl} alt="Avatar"/>
      </div>
    </div>
  );
};

export default Navbar;
