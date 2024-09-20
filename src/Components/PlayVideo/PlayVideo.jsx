/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./PlayVideo.css";
import './_playVideo.scss'
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllVideosContext } from "../../utils/GetAllVideos";
import { value_converter } from "../../data";
import moment from "moment";
const PlayVideo = () => {
  // const {videoId} =useParams();
  // const [channelData, setChannelData] = useState(null);
  // const fetchChannelData = async () => {
  //   const videoListUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
  //   await fetch(videoListUrl)
  //     .then((response) => response.json())
  //     .then((data) => setChannelData(data.items[0]));
  // };
  // useEffect(() => {
  //   fetchChannelData();
  // }, [channelData]);
  // const [apiData, setApiData] = useState(null);
  // const fetchVideoData = async () => {
  //   const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
  //   await fetch(videoListUrl)
  //     .then((response) => response.json())
  //     .then((data) => setApiData(data.items[0]));
  // };
  // useEffect(() => {
  //   fetchVideoData();
  // }, [apiData]);
  // const [commentsData, setCommentsData] = useState([]);
  // const fetchCommentsData = async () => {
  //   const videoListUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
  //   await fetch(videoListUrl)
  //     .then((response) => response.json())
  //     .then((data) => setCommentsData(data.items));
  // };
  // useEffect(() => {
  //   fetchCommentsData();
  // }, [videoId]);
  const [comment,setComment] =useState(false)
  const {video,commentVideo,channalVideo} =useContext(GetAllVideosContext);
  console.log(video)
  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${video?.id}?autoplay=1 `}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{video ? video.snippet.title : ""}</h3>
      <div className="play-video-info">
        <p>
        {video ? value_converter(video.statistics.viewCount) : "16K"}{" "}
          views &bull;{" "}
          {video ? moment(video.snippet.publishedAt).fromNow() : "........"}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {video ? value_converter(video.statistics.likeCount) : "16K"}
          </span>
          <span>
            <img src={dislike} alt="" />2
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <Link to={`/channel/${video?.snippet.channelId}`} className="publisher">
        <img
          src={channalVideo ? channalVideo.snippet.thumbnails.default.url:""}
          alt=""
        />
        <div>
          <p>{video?.snippet.channelTitle}</p>
          <span>
          {channalVideo
              ? value_converter(channalVideo.statistics.subscriberCount)
              : "16K"}{" "} Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </Link>
      <div className="vid-description">
        <p>{channalVideo?.snippet.description}</p>
        <hr />
        <h4>
        {video ? value_converter(video.statistics.commentCount) : "16K"} Comments
          <button><MdKeyboardDoubleArrowDown onClick={()=>comment?setComment(false):setComment(true)} size={23}/>
          </button>
        </h4>
        {commentVideo.map((item, index) => {
          return (
            <div key={index} className={comment?'comment':'hiddencomment'}>
              <img src={item?.snippet.topLevelComment.snippet.authorProfileImageUrl}  alt="" />
              <div>
                <h3>
                {item?.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item?.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                </h3>
                <p>
                {item?.snippet.topLevelComment.snippet.textDisplay}                </p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>{value_converter(item?.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="" />
                  <span>244</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
