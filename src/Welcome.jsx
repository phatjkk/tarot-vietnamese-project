import { TypeAnimation } from "react-type-animation";
function Welcome({clickKhamPha}){
    return <>
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