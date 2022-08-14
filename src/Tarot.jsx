import { TypeAnimation } from "react-type-animation";
import eyeIMG from "./assets/think.png";
function Tarot({ clickPhanTich }) {
  return (
    <>
      <div className="w-full">
        <img className="block ml-auto mr-auto mb-5" src={eyeIMG}></img>
      </div>
      <TypeAnimation
        sequence={[
          "Hãy nhắm mắt lại, nghĩ về điều bạn đang quan tâm rồi nhấn nút.",
        ]}
        speed={75}
        wrapper="h1"
        className="font-mono"
      />
      <button
        className="mt-7 btn btn-warning font-mono"
        onClick={() => clickPhanTich()}
      >
        Phân tích Tarot
      </button>
    </>
  );
}
export default Tarot;
