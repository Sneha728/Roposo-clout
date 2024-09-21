import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.png";
import img5 from "../assets/newlaunch.png";
import { BsFillPlayFill , BsPauseCircleFill } from "react-icons/bs";
import ReactPlayer from 'react-player';

const videoImages = [
  { id: 1, img: img1, videoUrl: "https://www.youtube.com/watch?v=nKeNSmuz4do" },
  { id: 2, img: img2, videoUrl: "https://www.youtube.com/shorts/mBT8rweZdRc?feature=share" }, 
  { id: 3, img: img3, videoUrl: "https://youtu.be/NeEL9ZTWRIA" },
  { id: 4, img: img4, videoUrl: "https://www.youtube.com/shorts/RpzkFFRAEfQ?feature=share" },
  { id: 5, img: img1, videoUrl: "https://www.youtube.com/watch?v=nKeNSmuz4do" },
  { id: 6, img: img2, videoUrl: "https://www.youtube.com/shorts/mBT8rweZdRc?feature=share" },
  { id: 7, img: img3, videoUrl: "https://youtu.be/NeEL9ZTWRIA" },
];

const VideoSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [imgPerPage, setImgPerPage] = useState(4);
  const [view, setView] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null); 

  const viewImgs = view ? videoImages : videoImages.slice(startIndex, startIndex + imgPerPage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && !view) {
        setImgPerPage(1);
      } else if (window.innerWidth === 768) {
        setImgPerPage(3);
      } else {
        setImgPerPage(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [view]);

  const handleNextClick = () => {
    const nextIdx = startIndex + imgPerPage;
    if (nextIdx < videoImages.length) {
      setStartIndex(nextIdx);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrevClick = () => {
    const prevIdx = startIndex - imgPerPage;
    if (prevIdx >= 0) {
      setStartIndex(prevIdx);
    } else {
      setStartIndex(videoImages.length - imgPerPage);
    }
  };

  const handleViewAll = () => {
    setView(!view);
    if (!view) {
      setImgPerPage(videoImages.length);
      setStartIndex(0);
    } else {
      setImgPerPage(window.innerWidth < 768 ? 1 : 4);
    }
  };

  const handlePlayClick = (videoUrl) => {
    setPlayingVideo(videoUrl);
  };

  return (
    <div className="container lg:flex lg:flex-col items-center">
      <div className="block lg:flex justify-between items-center w-full mb-2">
        <h1 className="text-2xl font-bold text-center mb-2 md:mb-0 md:text-left">Newly Launched</h1>
        <div className="flex items-center justify-center gap-2 mb-2 md:mb-0 md:justify-end">
          <div>
            <h1 className="font-bold underline cursor-pointer" onClick={handleViewAll}>
              {view ? "View Few" : "View All"}
            </h1>
          </div>
          <div className="h-6 border-l-2 border-gray-400"></div>
          <div className="flex items-center text-3xl">
            <MdKeyboardArrowLeft onClick={handlePrevClick} />
            <MdKeyboardArrowRight onClick={handleNextClick} />
          </div>
        </div>
      </div>

      <div
        className={`${
          view
            ? "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 justify-center"
            : "flex"
        } lg:mx-0 md:justify-around w-full items-center justify-center`}
      >
        <img src={img5} alt="/" className="hidden md:flex md:w-48 md:h-56" />
        {viewImgs.map((imgs) => (
  <span
    key={imgs.id}
    className="relative w-full h-52 lg:w-44 lg:h-52 block rounded-lg mb-4"
  >
    {/* Image (Only visible when video is not playing) */}
    {playingVideo !== imgs.videoUrl && (
      <img
        src={imgs.img}
        alt="image"
        className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"
      />
    )}

    {/* Video (Only visible when the corresponding video is playing) */}
    {playingVideo === imgs.videoUrl && (
      <ReactPlayer
        url={playingVideo}
        playing
        controls={false} // Disable controls to avoid redundancy
        width="100%"
        height="100%"
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    )}

    {/* Play/Pause Button */}
    <span className="absolute inset-0 flex justify-center items-center">
      {playingVideo === imgs.videoUrl ? (
        <BsPauseCircleFill  
          className="text-4xl bg-white rounded-full p-1 cursor-pointer"
          onClick={() => handlePlayClick(null)} // Pause video
        />
      ) : (
        <BsFillPlayFill  
          className="text-4xl bg-white rounded-full p-1 cursor-pointer"
          onClick={() => handlePlayClick(imgs.videoUrl)} // Play video
        />
      )}
    </span>
  </span>
))}

      </div>
    </div>
  );
};

export default VideoSection;
