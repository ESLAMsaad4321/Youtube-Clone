/* eslint-disable react/prop-types */
import ChannelContent from "../../Components/ChannelContent/ChannelContent";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './_channel.scss'
const Channel = ({ sidebar, setSidebar ,category,setCategory }) => {
  return (
    <div>
      <Navbar setSidebar={setSidebar} />

      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <ChannelContent sidebar={sidebar}/>
      </div>
    </div>
  );
};

export default Channel;
