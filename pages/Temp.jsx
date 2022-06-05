import CompoHead from "../components/CompoHead";
import { useState } from "react";

export default function Temp() {
  const [cel, setCel] = useState(0);
  const [fah, setFah] = useState(0);
  const [kel, setKel] = useState(0);

  function handleCel(e) {
    setCel(e.target.value);
  }
  function handleFah(e) {
    setFah(e.target.value);
  }
  function handleKel(e) {
    setKel(e.target.value);
  }

  return (
    <div className="div-main">
      <CompoHead>온도변환</CompoHead>

      <div className="div-conversion">
        <h1>섭씨 변환</h1>
        <input type="number" onChange={handleCel} placeholder="기본값은 0으로 되어있습니다" />
        <h2>화씨 변환 : {(cel * 1.8 + 32).toFixed(2)}°F</h2>
        <h2>절대온도 변환 : {cel + 273.15}K</h2>
      </div>
      <div className="div-conversion">
        <h1>화씨 변환</h1>
        <input type="number" onChange={handleFah} placeholder="기본값은 0으로 되어있습니다" />
        <h2>섭씨 변환 : {((fah - 32) / 1.8).toFixed(2)}°C</h2>
        <h2>절대온도 변환 : {((fah - 32) / 1.8 + 273.15).toFixed(2)}K</h2>
      </div>
      <div>
        <h1>절대온도 변환</h1>
        <input type="number" onChange={handleKel} placeholder="기본값은 0으로 되어있습니다" />
        <h2>섭씨 변환 : {(kel - 273.15).toFixed(2)}°C</h2>
        <h2>화씨 변환 : {((kel - 273.15) * 1.8 + 32).toFixed(2)}°F</h2>
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
