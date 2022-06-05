import Link from "next/link";
import CompoMenu from "../components/CompoHead";

export default function Home() {
  return (
    <div className="div-main">
      <CompoMenu>단위변환-리메이크</CompoMenu>

      <h1>단위변환-리메이크</h1>
      <h3>단위변환 웹을 리메이크한 웹사이트입니다</h3>

      <div>
        <div className="div-title">
          <Link href="/Distance">
            <a>거리변환</a>
          </Link>
          <div className="div-contents">
            <h4>센티미터를 미터, 킬로미터로 변환</h4>
            <h4>미터를 센티미터, 킬로미터로 변환</h4>
            <h4>킬로미터를 센티미터, 미터로 변환</h4>
          </div>
        </div>

        <div className="div-title">
          <Link href="/Weight">
            <a>무게변환</a>
          </Link>
          <div className="div-contents">
            <h4>그램을 킬로그램, 톤으로 변환</h4>
            <h4>킬로그램을 그램, 톤으로 변환</h4>
            <h4>톤을 그램, 킬로그램으로 변환</h4>
          </div>
        </div>
      </div>
      <div>
        <div className="div-title">
          <Link href="/Time">
            <a>시간변환</a>
          </Link>
          <div className="div-contents">
            <h4>초를 분, 시로 변환</h4>
            <h4>분을 초, 시로 변환</h4>
            <h4>시를 초, 분으로 변환</h4>
          </div>
        </div>

        <div className="div-title">
          <Link href="/Temp">
            <a>온도변환</a>
          </Link>
          <div className="div-contents">
            <h4>섭씨를 화씨, 절대온도로 변환</h4>
            <h4>화씨를 섭씨, 절대온도로 변환</h4>
            <h4>절대온도를 섭씨, 화씨로 변환</h4>
          </div>
        </div>
      </div>

      <h2>업데이트때 추가</h2>

      <Link href="https://chunk09.github.io/conversion/index.html">
        <a className="old">단위변환(구버전)으로 이동하기</a>
      </Link>

      <style jsx>{`
        .div-main {
          text-align: center;
          background-color: #1f2937;
          color: white;
          height: 150%;
          width: 100%;
          position: absolute;
          background-size: cover;
        }
        h3 {
          color: skyblue;
        }
        .div-title {
          background-color: #111827;
          border: black;
          display: inline-block;
          color: white;
          margin: 10px;
          border-radius: 5%;
        }
        .div-title a {
          color: white;
          font-size: 20px;
          margin: 10px;
          animation: showAni 2s;
        }
        .div-contents h4 {
          margin-right: 5px;
          margin-left: 5px;
          border-bottom: 2px solid white;
          animation: showAni 4s;
        }
        .old {
          color: skyblue;
        }
        @keyframes .showAni {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
      `}</style>
    </div>
  );
}
