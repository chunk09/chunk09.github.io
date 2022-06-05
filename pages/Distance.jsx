import CompoMenu from "../components/CompoHead";
import { useState } from "react";
import Link from "next/link";

export default function Distance() {
  const [cm, setCM] = useState(0);
  const [m, setM] = useState(0);
  const [km, setKM] = useState(0);

  function handleCM(e) {
    setCM(e.target.value);
  }
  function handleM(e) {
    setM(e.target.value);
  }
  function handleKM(e) {
    setKM(e.target.value);
  }

  return (
    <div className="div-main">
      <CompoMenu>거리변환</CompoMenu>

      <div className="div-conversion">
        <h1>센티미터 변환</h1>
        <input type="number" onChange={handleCM} />
        <h2>미터 변환 : {cm / 100}M</h2>
        <h2>킬로미터 변환 : {cm / 100000}KM</h2>
      </div>
      <div className="div-conversion">
        <h1>미터 변환</h1>
        <input type="number" onChange={handleM} />
        <h2>센티미터 변환 : {m * 100}CM</h2>
        <h2>킬로미터 변환 : {m / 1000}KM</h2>
      </div>
      <div>
        <h1>킬로미터 변환</h1>
        <input type="number" onChange={handleKM} />
        <h2>센티미터 변환 : {km * 100000}CM</h2>
        <h2>미터 변환 : {km * 1000}M</h2>
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
