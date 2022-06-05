import CompoHead from "../components/CompoHead";
import { useState } from "react";

export default function Time() {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);

  function handleSecond(e) {
    setSecond(e.target.value);
  }
  function handleMinutes(e) {
    setMinutes(e.target.value);
  }
  function handleHour(e) {
    setHour(e.target.value);
  }

  return (
    <div className="div-main">
      <CompoHead>시간변환</CompoHead>

      <div className="div-conversion">
        <h1>초 변환</h1>
        <input type="number" onChange={handleSecond} />
        <h2>분 변환 : {Math.round((second / 60) * 100) / 100}분</h2>
        <h2>시 변환 : {Math.round((second / 3600) * 100) / 100}시</h2>
      </div>
      <div className="div-conversion">
        <h1>분 변환</h1>
        <input type="number" onChange={handleMinutes} />
        <h2>초 변환 : {Math.round(minutes * 60 * 100) / 100}초</h2>
        <h2>시 변환 : {Math.round((minutes / 60) * 100) / 100}시</h2>
      </div>
      <div>
        <h1>시 변환</h1>
        <input type="number" onChange={handleHour} />
        <h2>초 변환 : {Math.round(hour * 3600 * 100) / 100}초</h2>
        <h2>분 변환 : {Math.round(hour * 60 * 100) / 100}분</h2>
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
