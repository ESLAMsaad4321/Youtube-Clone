import { Link } from "react-router-dom";
import './_channelContent.scss'
import { useContext } from "react";
import { GetAllVideosContext } from "../../utils/GetAllVideos";
import { value_converter } from "../../data";
import moment from "moment";
const ChannelContent = () => {
  const {channalInf,channalVideos,setVideoId,setChannalId} =useContext(GetAllVideosContext);
  console.log(channalVideos)
  return (
    <div className="searched">

    <div className="side-channal">
    <img className='channel_image'  src={channalInf?.snippet.thumbnails.medium.url} alt="" />
    <div className="channel-info">
      <h4>
      {channalInf?.snippet.title}           
      </h4>
      <p>{value_converter(channalInf?.statistics.subscriberCount)} subscribers</p>
      <div className='disciption'>
      <p>{channalInf?.snippet.localized.description}</p>
      </div>
    </div>
    </div>
  <hr />
  {channalVideos.map((item, index) => {
    return (
    <Link  to={`/video/0/${item?.contentDetails.videoId}`}
    onClick={() => {
      setVideoId(`${item?.contentDetails.id}`);
      setChannalId(item?.snippet.channelId);
    }
  }
    key={index} className="side-video-list">
    <img className='image' src={`${item?.snippet.thumbnails.medium.url}`} alt="" />
    <div className="vid-info">
      <h4>
      {item?.snippet.title}           
      </h4>
      <p>{moment(item?.snippet.publishedAt).fromNow()}</p>
    </div>
    </Link>
    );
  })}
</div>
  )
}

export default ChannelContent
