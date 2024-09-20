import { createContext, useEffect, useState } from "react";
import { API_KEY } from "../data";
import { AxiosConfig } from "../Axios/AxiosConfig";

const GetAllVideosContext = createContext();

// eslint-disable-next-line react/prop-types
function GetAllVideosProvider({ children, category }) {
  const [channalId, setChannalId] = useState("");
  const [videos, setVideos] = useState([]);
  const [channalInf, setChannalInf] = useState(null);
  const [video, setVideo] = useState(null);
  const [channalVideosId, setChannalVideosId] = useState("");
  const [videoId, setVideoId] = useState("");
  const [commentVideo,setCommentVideo]=useState([])
  const [channalVideos, setChannalVideos] = useState([]);
  const [channalVideo, setChannalVideo] = useState(null);
  const[input,setInput]=useState('');
const[searchedData,setSearchedData]=useState([]);
  async function getChannalInf() {
    const data = await AxiosConfig.get(
      `/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channalId}&regionCode=EG&key=${API_KEY}`
    );
    setChannalInf(data.data.items[0]);
    setChannalVideosId(channalInf?.contentDetails.relatedPlaylists.uploads);
  }
  useEffect(() => {
    getChannalInf();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channalId]);
  async function getChannalVideos() {
    const videosChannalData = await AxiosConfig.get(
      `/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${channalInf?.contentDetails.relatedPlaylists.uploads}&regionCode=EG&key=${API_KEY}`
    );
    setChannalVideos(videosChannalData?.data.items);
  }
  useEffect(() => {
    getChannalVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channalVideosId]);
  async function getAllVideo() {
    const data = await AxiosConfig.get(
      `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=${category}&regionCode=EG&key=${API_KEY}`
    );
    setVideos(data.data.items);
  }
  useEffect(() => {
    getAllVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  async function getVideo() {
    const data = await AxiosConfig.get(
      `/videos?part=snippet%2CcontentDetails%2Cstatistics&regionCode=EG&id=${videoId}&key=${API_KEY}`
    );
    setVideo(data.data.items[0]);
  }
  async function getCommentVideo() {
    const data = await AxiosConfig.get(
      `/commentThreads?part=snippet%2Creplies&regionCode=EG&videoId=${videoId}&key=${API_KEY}`
    );
    setCommentVideo(data.data.items);
  }
  async function getChannalVideo() {
    const data = await AxiosConfig.get(
      `/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channalId}&key=${API_KEY}`
    );
    setChannalVideo(data.data.items[0]);
  }
  useEffect(() => {
    getVideo();
    getCommentVideo();
    getChannalVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);
  async function getSearchedVideo() {
    const data = await AxiosConfig.get(
      `/search?part=snippet&maxResults=25&q=${input}&key=${API_KEY}`
    );
    setSearchedData(data.data.items);
  }
  useEffect(() => {
    getSearchedVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[input]);
  return (
    <GetAllVideosContext.Provider
      value={{ videos, channalInf, setChannalId, channalVideos ,setVideoId,video,commentVideo,input,setInput,searchedData,channalVideo}}
    >
      {children}
    </GetAllVideosContext.Provider>
  );
}
export { GetAllVideosContext, GetAllVideosProvider };
