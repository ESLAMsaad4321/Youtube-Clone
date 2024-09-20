import "./Recommended.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GetAllVideosContext } from "../../utils/GetAllVideos";
import { value_converter } from "../../data";
import moment from "moment";
const Recommended = () => {
  // const [apiData, setApiData] = useState([]);
  // const fetchData = async () => {
  //   const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&maxResults=60&regionCode=AR&videoCategoryId=${categoryId}&key=${API_KEY}`;
  //   await fetch(videoListUrl)
  //     .then((response) => response.json())
  //     .then((data) => setApiData(data.items));
  // };
  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const {videos,setChannalId,setVideoId} =useContext(GetAllVideosContext);

  return (
    <div className="recommended">
      {videos.map((item,index) => {
        return(
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-videos-list" onClick={() => {
            setVideoId(`${item?.id}`)
            setChannalId(item.snippet.channelId)
          }
          }>
          <img className="img" src={`${item?.snippet.thumbnails.medium.url}`}  alt="adlvmkdal" />
          <div className="video-info">
            <h4>
            {`${item?.snippet.title.substring(0,25)} .......`}           
            </h4>
            <Link to={`/channel/${item?.snippet.channelId}`} onClick={() => {setChannalId(item?.snippet.channelId)}} className='channal'>
            <p>{item?.snippet.channelTitle}</p>
            </Link>
            <p >{value_converter(item?.statistics.viewCount)}  views &bull;{" "}
            {moment(item?.snippet.publishedAt).fromNow()}</p>
          </div>
        </Link>
        )
      }
      )}

    </div>
  );
};

export default Recommended;
