import { useState } from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Tarot from "./Tarot";
import "./App.css";
import TarotResult from "./TarotResult";
function App() {
  const [isWelcome, setIsWelcome] = useState(true);
  const [isViewResult, setIsViewResult] = useState(false);

  const clickKhamPha = () => {
    setIsWelcome(false);
  };

  const clickPhanTich = () => {
    setIsViewResult(true);
  };
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
                <div className="App">
                  {isWelcome ? (
                    <Welcome clickKhamPha={clickKhamPha} />
                  ) : isViewResult ? (
                    <TarotResult />
                  ) : (
                    <Tarot clickPhanTich={clickPhanTich} />
                  )}
                </div>
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
