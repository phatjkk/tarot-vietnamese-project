import { TypeAnimation } from "react-type-animation";
import TarotIMG from './assets/tarot-98.png'
function Welcome({clickKhamPha}){
    return <>
    <div className="w-full">

      <img className="block ml-auto mr-auto mb-5" src={TarotIMG}></img>
    </div>
    <TypeAnimation
        sequence={["Vận mệnh của bạn sẽ ra sao?"]}
        speed={75} // Must be in range between 1 and 100!
        wrapper="h1"
        className="font-mono"
      />
      <button className="mt-5 font-mono" onClick={() => clickKhamPha()}>
        Bắt đầu khám phá
      </button>
    </>
}
export default Welcome