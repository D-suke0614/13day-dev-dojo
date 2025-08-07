import React, { useState, useMemo } from "react";

// わざと重い計算を行う関数
const slowFunction = (num: number) => {
  console.log("...重い計算を実行中...");
  // 計算に時間がかかっているように見せるためのループ
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

export default function HeavyCalculator() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // この計算は`number`にしか依存しないが、
  // `dark` stateが変更されて再レンダリングが起きるたびに実行されてしまう
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <div style={{ padding: "20px", border: "1px solid gray" }}>
      <h2>重い計算機</h2>
      <button onClick={() => setNumber(number + 1)}>数字を更新</button>
      <div style={themeStyles}>計算結果: {doubleNumber}</div>
      <button onClick={() => setDark(!dark)}>テーマ切り替え</button>
    </div>
  );
}
