import { Link } from 'react-router-dom'
import profile from "../../assets/jack.png"
import './_searchContent.scss'
import { useContext } from 'react'
import { GetAllVideosContext } from '../../utils/GetAllVideos'
import moment from 'moment'
// eslint-disable-next-line react/prop-types
const SearchContent = ({sidebar}) => {
  const {searchedData,setChannalId,setVideoId} =useContext(GetAllVideosContext);
console.log(searchedData)
  //   const {query} = useParams();
  //   const [data, setData] = useState([]);
  // const fetchData = async () => {
  //   const videoListUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`;
  //   await fetch(videoListUrl)
  //     .then((response) => response.json())
  //     .then((data) => setData(data.items));
  // };
  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);
  const channel = searchedData.filter((items) => items.id.kind === "youtube#channel");
  const videos = searchedData.filter((items) => items.id.kind === "youtube#video");
  return (
      //   <Link  to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
      //   <img src={item.snippet.thumbnails.medium.url} alt="" />
      //   <div className="vid-info">
      //     <h4>
      //     {item.snippet.title}            
      //     </h4>
      //     <p>{item.snippet.channelTitle}</p>
      //     <p>{value_converter(item.statistics.viewCount)} views</p>
      //   </div>
      // </Link>
      <div className="searched">
        {channel.map((item, index) => {
        return (
        <Link  to={`/channel/${item.id.channelId}`} onClick={() => {setChannalId(item.id.channelId)}}  key={index} className="side-channal-list">
        <img className='channel_image' src={item?.snippet.thumbnails.high.url} alt="" />
        <div className="channel-info">
          <h4>
          {item?.snippet.title}            
          </h4>
          {/* <p>16k subscribers</p> */}
          <div className='disciption'>
          <p>{item?.snippet.description}</p>
          </div>
        </div>
        </Link>
        );
      })}
      <hr />
      {videos.map((item, index) => {
        return (
        <Link  to={`/video/0/${item.id.videoId}`} onClick={() => {setVideoId(item.id.videoId)
          setChannalId(item.snippet.channelId)
        }}   key={index} className="side-video-list">
        <img className='image' src={item?.snippet.thumbnails.medium.url} alt="" />
        <div className="vid-info">
          <h4>
          {item?.snippet.title}            
          </h4>
          <p>{moment(item?.snippet.publishedAt).fromNow()}</p>
          <Link to={`/channal/${item?.snippet.channelId}`} className='channel'>
            <img src={profile} alt="" className={`img_channel ${sidebar?'':'img_channel_small'}`} />
          <p>{item?.snippet.channelTitle}</p>
          </Link>
        </div>
        </Link>
        );
      })}
    </div>
      )
    }


export default SearchContent
