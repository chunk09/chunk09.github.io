import React from "react";

function App() {
  const [select, setSelect] = React.useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "하지마") {
      window.close();
    }

    setSelect(event.target.value);
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <header
        style={{
          backgroundColor: "#282c34",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "calc(10px + 2vmin)",
          color: "white",
        }}
      >
        <h1>심심해 할거 추천좀</h1>
        <select
          style={{
            width: "350px",
            fontSize: "20px",
            outline: "none",
            backgroundColor: "transparent",
            color: "white",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "2px solid white",
          }}
          onChange={onChange}
        >
          <option value="">골라</option>
          <option value="ㅇㅋ 게임하러감">게임이나 하셈</option>
          <option value="이런 씹">공부나 해</option>
          <option value="싫어">웹 사이트나 만들어</option>
          <option value="저쩌라고">어쩌라고</option>
          <option value="하지마">안해</option>
        </select>
        <h2 id="output">{select}</h2>
      </header>
    </div>
  );
}

export default App;
