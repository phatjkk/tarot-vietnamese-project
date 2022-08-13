import { useState } from "react";
import ReactLoading from "react-loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Card({ cardObj }) {
    const [isImageLoaded,SetIsImageLoaded] = useState(false) 
  return (
    <div className="w-full flex justify-center">
      <div className="md:w-[50%]">
        <h1 className="text-xl underline font-mono">{cardObj.name}</h1>
        <div className="w-full mt-5 flex justify-center">
          <LazyLoadImage
            className="rounded"
            afterLoad={()=>{SetIsImageLoaded(true)}}
            src={
              "https://github.com/phatjkk/Tarot-Vietnamese-API/raw/main" +
              cardObj.image_url
            }
          />
          {
            isImageLoaded ?"":<ReactLoading type={"spinningBubbles"} height={"5em"} width={"5em"} />
          }
          {/* <img
            className="rounded"
            src={
              "https://github.com/phatjkk/Tarot-Vietnamese-API/raw/main" +
              cardObj.image_url
            }
          ></img> */}
        </div>
        <p className="mt-10 text-xl text-white text-left font-light font-mono">
          <span className="text-blue-600">Ý nghĩa: </span>
          {cardObj.title_main}
        </p>

        <p className="mt-10 text-xl text-white text-left font-light font-mono">
          <span className="text-red-500">Tổng quan: </span>
          {cardObj.title_secondary}
        </p>

        <p className="mt-10 text-xl text-white text-left font-light font-mono">
          <span className="text-pink-500">Về tình yêu: </span>
          {cardObj.title_love}
        </p>

        <p className="mt-10 text-xl text-white text-left font-light font-mono">
          <span className="text-violet-600">Về công việc: </span>
          {cardObj.title_work}
        </p>

        <p className="mt-10 text-xl text-white text-left font-light font-mono">
          <span className="text-green-500">Về tiền bạc: </span>
          {cardObj.title_money}
        </p>

        <p className="mt-10 text-xl text-white text-left font-light font-mono">
          <span className="text-yellow-500">Về sức khoẻ: </span>
          {cardObj.title_heath}
        </p>
      </div>
    </div>
  );
}
export default Card;
