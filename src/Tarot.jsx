import { TypeAnimation } from "react-type-animation";
function Tarot({clickPhanTich}){
    return <>
    <TypeAnimation
        sequence={["Nhắm mắt lại, nghĩ về điều bạn đang quan tâm rồi nhấn nút."]}
        speed={75} 
        wrapper="h1"
        className="font-mono"
      />
      <button className="mt-7 btn btn-warning font-mono" onClick={() => clickPhanTich()}>
        Phân tích Tarot
      </button>
    </>
}
export default Tarot