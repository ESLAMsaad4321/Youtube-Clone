/* eslint-disable react/prop-types */
import "./_sidebar.scss";
import {
  MdExitToApp,
  MdHome,
  MdOutlineSportsBasketball,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../Redux/Actions/auth.action";
import { useNavigate } from "react-router-dom";
import { CgGames } from "react-icons/cg";
import { IoMdTv } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import { CiMusicNote1 } from "react-icons/ci";
import { LiaBlogSolid } from "react-icons/lia";
import { FaNewspaper } from "react-icons/fa";
function Sidebar({ sidebar, category, setCategory }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutHandle = () => {
    dispatch(log_out());
  };
  return (
    //     <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
    //       <div className="sortcut-links">
    //         <div className={`side-link ${category===0?'active':''}`}  onClick={()=>{setCategory(0)
    //           navigate('/')
    //         }}>
    //           <img src={home} alt="" />
    //           <p>Home</p>
    //         </div>
    //         <div className={`side-link ${category===20?'active':''}`} onClick={()=>{setCategory(20)
    //         navigate('/')
    // }}>
    //           <img src={game_icon} alt="" />
    //           <p>Gaming</p>
    //         </div>
    //         <div className={`side-link ${category===2?'active':''}`} onClick={()=>{setCategory(2)
    //         navigate('/')
    // }}>
    //           <img src={automobiles} alt="" />
    //           <p>Automobiles</p>
    //         </div>
    //         <div className={`side-link ${category===17?'active':''}`} onClick={()=>{setCategory(17)
    //         navigate('/')
    // }}>
    //           <img src={sports} alt="" />
    //           <p>Sports</p>
    //         </div>
    //         <div className={`side-link ${category===24?'active':''}`} onClick={()=>{setCategory(24)
    //         navigate('/')
    // }}>
    //           <img src={entertaniment} alt="" />
    //           <p>Entertaniment</p>
    //         </div>
    //         <div className={`side-link ${category===28?'active':''}`} onClick={()=>{setCategory(28)
    //         navigate('/')
    // }}>
    //           <img src={tech} alt="" />
    //           <p>Tecnology</p>
    //         </div>
    //         <div className={`side-link ${category===10?'active':''}`} onClick={()=>{setCategory(10)
    //         navigate('/')
    // }}>
    //           <img src={music} alt="" />
    //           <p>Music</p>
    //         </div>
    //         <div className={`side-link ${category===22?'active':''}`} onClick={()=>{setCategory(22)
    //         navigate('/')
    // }}>
    //           <img src={blogs} alt="" />
    //           <p>Blogs</p>
    //         </div>
    //         <div className={`side-link ${category===25?'active':''}`} onClick={()=>{setCategory(25)
    //         navigate('/')
    // }}>
    //           <img src={news} alt="" />
    //           <p>News</p>
    //         </div>
    //         <hr/>
    //       <div style={{marginTop:"10px"}} className={'side-link log-out'} onClick={logOutHandle}>
    //         <MdExitToApp className="logouticon" style={{marginRight:"26px"}} size={23}/>
    //         <p>Log Out</p>
    //       </div>
    //       <hr/>
    //       </div>
    //       {/* <div className="subsciribed-list">
    //         <h3>Subscribed</h3>
    //         <div className="side-link">
    //           <img src={jack} alt="" />
    //           <p>PewDiePie</p>
    //         </div>
    //         <div className="side-link">
    //           <img src={simon} alt="" />
    //           <p>MrBeast</p>
    //         </div>
    //         <div className="side-link">
    //           <img src={tom} alt="" />
    //           <p>Justin Bieber</p>
    //         </div>
    //         <div className="side-link">
    //           <img src={megan} alt="" />
    //           <p>5-Minute Crafts</p>
    //         </div>
    //         <div className="side-link">
    //           <img src={cameron} alt="" />
    //           <p>Nas Daily</p>
    //         </div>
    //       </div> */}
    //     </div>
    <nav className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <li
        className={`${category === 0 ? "active" : ""}`}
        onClick={() => {
          setCategory(0);
          navigate("/");
        }}
      >
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li
        className={`${category === 20 ? "active" : ""}`}
        onClick={() => {
          setCategory(20);
          navigate("/");
        }}
      >
        <CgGames size={23} />
        <span>Gaming</span>
      </li>
      <li
        className={`${category === 17 ? "active" : ""}`}
        onClick={() => {
          setCategory(17);
          navigate("/");
        }}
      >
        <MdOutlineSportsBasketball size={23} />
        <span>Sports</span>
      </li>
      <li
        className={`${category === 24 ? "active" : ""}`}
        onClick={() => {
          setCategory(24);
          navigate("/");
        }}
      >
        <IoMdTv size={23} />
        <span>Entertaniment</span>
      </li>
      <li
        className={`${category === 28 ? "active" : ""}`}
        onClick={() => {
          setCategory(28);
          navigate("/");
        }}
      >
        <GrTechnology size={23} />
        <span>Tecnology</span>
      </li>
      <li
        className={`${category === 10 ? "active" : ""}`}
        onClick={() => {
          setCategory(10);
          navigate("/");
        }}
      >
        <CiMusicNote1 size={23} />
        <span>music</span>
      </li>
      <li
        className={`${category === 22 ? "active" : ""}`}
        onClick={() => {
          setCategory(22);
          navigate("/");
        }}
      >
        <LiaBlogSolid size={23} />
        <span>Blogs</span>
      </li>
      <li
        className={`${category === 25 ? "active" : ""}`}
        onClick={() => {
          setCategory(25);
          navigate("/");
        }}
      >
        <FaNewspaper size={23} />
        <span>News</span>
      </li>
      <hr />
      <li onClick={logOutHandle}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
}

export default Sidebar;
