/* eslint-disable react/no-unescaped-entities */
import './_noPage.scss'
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="page">
      <div className="page_container">
        <img
          src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
          alt=""
        />
        <p>
          This page isn't available. Sorry about that.Try searching for
          something else.
        </p>
        <Link to={"/"}>
          <img
            // style={{ width: "130px", height: "130px", "object-fit": "contain" }}
            src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
