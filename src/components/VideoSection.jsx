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
  { id: 1, img: img1, videoUrl: "https://www.youtube.com/shorts/kbMWi1lVJPQ?feature=share" },
  { id: 2, img: img2, videoUrl: "https://www.youtube.com/shorts/mBT8rweZdRc?feature=share" }, 
  { id: 3, img: img3, videoUrl: "https://youtu.be/NeEL9ZTWRIA" },
  { id: 4, img: img4, videoUrl: "https://www.youtube.com/shorts/RpzkFFRAEfQ?feature=share" },
  { id: 5, img: "https://app.roposoclout.com/_next/image?url=https%3A%2F%2Fo1product-images.cdn.myownshop.in%2F7478360870.jpeg&w=2048&q=75", videoUrl: "https://www.youtube.com/watch?v=nKeNSmuz4do" },
  { id: 6, img: "https://app.roposoclout.com/_next/image?url=https%3A%2F%2Fo1product-images.cdn.myownshop.in%2F5610827467.jpeg&w=1920&q=75", videoUrl: "https://www.youtube.com/shorts/vp7f-XSKOJ4?feature=share" },
  { id: 7, img: "https://app.roposoclout.com/_next/image?url=https%3A%2F%2Fo1product-images.cdn.myownshop.in%2F5721186594.jpeg&w=1920&q=75", videoUrl: "https://www.youtube.com/shorts/nACHDoiDS6s?feature=share" },
  { id: 8, img: "https://app.roposoclout.com/_next/image?url=https%3A%2F%2Fo1product-images.cdn.myownshop.in%2F7844303365.jpeg&w=1920&q=75", videoUrl: "https://www.youtube.com/shorts/RpzkFFRAEfQ?feature=share" },
  { id: 9, img: "https://app.roposoclout.com/_next/image?url=https%3A%2F%2Fo1product-images.cdn.myownshop.in%2F6396879774.jpeg&w=1920&q=75", videoUrl: "https://www.youtube.com/shorts/kbMWi1lVJPQ?feature=share" },
  { id: 10, img: "https://app.roposoclout.com/_next/image?url=https%3A%2F%2Fo1product-images.cdn.myownshop.in%2F7143641803.jpeg&w=1920&q=75", videoUrl: "https://www.youtube.com/shorts/mBT8rweZdRc?feature=share" }, 
  { id: 11, img:"https://app.roposoclout.com/_next/image?url=https%3A%2F%2Fo1product-images.cdn.myownshop.in%2F4818352817.jpeg&w=1920&q=75", videoUrl: "https://youtu.be/NeEL9ZTWRIA" },
  { id: 12, img: img4, videoUrl: "https://www.youtube.com/shorts/RpzkFFRAEfQ?feature=share" },
];

const VideoSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [imgPerPage, setImgPerPage] = useState(4);
 
  const [playingVideo, setPlayingVideo] = useState(null); 

  const viewImgs =  videoImages.slice(startIndex, startIndex + imgPerPage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 425 && window.innerWidth < 768) {
        setImgPerPage(3);  
      } else if (window.innerWidth < 425) {
        setImgPerPage(2);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setImgPerPage(4);
      } else {
        setImgPerPage(4);
      }
    };
  
    handleResize(); 
    window.addEventListener("resize", handleResize); 
  
    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);
  

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

  

  const handlePlayClick = (videoUrl) => {
    setPlayingVideo(videoUrl);
  };

  return (
    <div className="lg:flex  lg:flex-col items-center w-full">
    {/* Header Section */}
    <div className=" flex justify-between items-center w-full mb-2">
      <h1 className="text-2xl font-bold ml-3 mr-3 mx:auto mb-2 md:mb-0 ">Newly Launched</h1>
      <div className="flex items-center justify-center gap-2 mb-2 md:mb-0 md:justify-end">
        <div className='hidden md:block'>
          <h1 className=" md:font-bold underline cursor-pointer">
            ViewAll
          </h1>
        </div>
        <div className="h-6 border-l-2 border-gray-400"></div>
        <div className="flex items-center text-3xl">
          <MdKeyboardArrowLeft onClick={handlePrevClick} />
          <MdKeyboardArrowRight onClick={handleNextClick} />
        </div>
      </div>
    </div>
  
    
    

    
    <div className="flex  justify-start w-full overflow-hidden">
      <img
        src={img5}
        alt="/"
        className="hidden lg:flex md:w-48 md:h-56 md:justify-start rounded-b-md"
      />
      {viewImgs.map((imgs) => (
        <span key={imgs.id} className="relative w-full h-56 lg:w-52 lg:h-56 flex flex-1 rounded-lg mb-4 mx-3">
          {/* Image (Only visible when video is not playing) */}
          {playingVideo !== imgs.videoUrl && (
            <img
              src={imgs.img}
              alt="image"
              className="lg:w-full lg:h-full w-[148px] h-[203px]  rounded-lg transform transition-transform duration-300 hover:scale-110"
            />
          )}
  
          {/* Video (Only visible when the corresponding video is playing) */}
          {playingVideo === imgs.videoUrl && (
            <ReactPlayer
              url={playingVideo}
              playing
              controls={false}
              width="100%"
              height="100%"
              className="absolute inset-0 top-0 left-0 w-full h-full rounded-lg flex justify-center items-center"
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
