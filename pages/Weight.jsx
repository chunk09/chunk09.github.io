import CompoMenu from "../components/CompoHead";
import { useState } from "react";

export default function Weight() {
  const [gram, setGram] = useState(0);
  const [kilogram, setKilogram] = useState(0);
  const [ton, setTon] = useState(0);

  function handleGram(e) {
    setGram(e.target.value);
  }
  function handleKilogram(e) {
    setKilogram(e.target.value);
  }
  function handleTon(e) {
    setTon(e.target.value);
  }

  return (
    <div className="div-main">
      <CompoMenu>무게변환</CompoMenu>

      <div className="div-conversion">
        <h1>그램 변환</h1>
        <input type="number" onChange={handleGram} />
        <h2>킬로그램 변환 : {gram / 1000}KG</h2>
        <h2>톤 변환 : {gram / 1000000}T</h2>
      </div>

      <div className="div-conversion">
        <h1>킬로그램 변환</h1>
        <input type="number" onChange={handleKilogram} />
        <h2>그램 변환 : {kilogram * 1000}G</h2>
        <h2>톤 변환 : {kilogram / 1000}T</h2>
      </div>

      <div>
        <h1>톤 변환</h1>
        <input type="number" onChange={handleTon} />
        <h2>그램 변환 : {ton * 1000000}G</h2>
        <h2>킬로그램 변환 : {ton * 1000}KG</h2>
      </div>

      <style jsx>{`
        .div-main {
          text-align: center;
          background-color: #1f2937;
          color: white;
          width: 100%;
          min-height: 100%;
          position: absolute;
        }
        input {
          width: 70%;
          font-size: 15px;
          border: 0;
          border-radius: 15px;
          outline: none;
          padding-left: 10px;
        }
        .div-conversion {
          border-bottom: 2px solid white;
        }
      `}</style>
    </div>
  );
}
