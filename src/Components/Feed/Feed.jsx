/* eslint-disable react/prop-types */
import "./Feed.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GetAllVideosContext } from "../../utils/GetAllVideos";
import moment from "moment";
import { value_converter } from "../../data";
const Feed = () => {
  const {videos,setChannalId,setVideoId} =useContext(GetAllVideosContext);
  
  return (
    <div className="feed">
      {videos.map((item, index) => {
        return (
          <Link
          to={`video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="card"
            onClick={() => {
              setVideoId(`${item?.id}`);
              setChannalId(item.snippet.channelId);
            }
          }
          >
            <img src={`${item.snippet.thumbnails.medium.url}`} alt="" />
            <h2>{item.snippet.title}</h2>
            <Link to={`/channel/${item.snippet.channelId}`} onClick={() => {setChannalId(item.snippet.channelId)}
            } className="channal">
            <h3>{item.snippet.channelTitle}</h3>
            </Link>
            <p>
            {value_converter(item.statistics.viewCount)}  views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default Feed;
