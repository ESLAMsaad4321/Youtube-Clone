import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import NoPage from "./Components/NoPage/NoPage";

import Video from "./pages/Video/Video";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Channel from "./pages/Channel/Channel";
import { GetAllVideosProvider } from "./utils/GetAllVideos";
function App() {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0);

  const{accessToken,loading}=useSelector(state=>state.auth);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!loading && !accessToken){
      navigate('/auth')
    }
  },[accessToken,loading,navigate])

  return (
    <GetAllVideosProvider category={category}>
    <div style={{height:"100vh"}}>
      <Routes>
      <Route path="/auth" element={<Login />} />
      <Route path="*" element={<NoPage/>} />
        <Route path="/" element={<Home setCategory={setCategory} category={category} sidebar={sidebar} setSidebar={setSidebar} />} />
        <Route path="/search/:query" element={<Search setCategory={setCategory} category={category} sidebar={sidebar} setSidebar={setSidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video setCategory={setCategory} category={category} sidebar={sidebar} setSidebar={setSidebar}/>} />
        <Route path="/channel/:query" element={<Channel setCategory={setCategory} category={category} sidebar={sidebar} setSidebar={setSidebar} />} />
      </Routes>
    </div>
    </GetAllVideosProvider>

  );
}

export default App;
