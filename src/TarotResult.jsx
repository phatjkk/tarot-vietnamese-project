import ReactLoading from "react-loading";
import { useEffect, useState } from "react";
import Card from "./Card";
function TarotResult() {
  const [isLoading, SetIsLoading] = useState(true);
  const [cardObj, setCardObj] = useState(null);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/phatjkk/Tarot-Vietnamese-API/main/data.txt"
    )
      .then((r) => r.text())
      .then((text) => {
        let data = text.split("\n");
        let i_rand = getRandomIntInclusive(0, data.length);
        const obj = JSON.parse(data[i_rand]);
        console.log(obj)
        setCardObj(obj);
      });
    setTimeout(() => {
      SetIsLoading(false);
    }, getRandomInt(3000, 5000));
  }, []);
  return (
    <>
      {isLoading ? (
        <div>
          <div className="flex justify-center items-center">
            <ReactLoading type={"cylon"} height={"10em"} width={"10em"} />
          </div>
          <h1 className="text-xl">Đang tiến hành phân tích 👀</h1>
        </div>
      ) : (
        cardObj != null?
        <Card cardObj={cardObj} />:""
      )}
    </>
  );
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
export default TarotResult;
