import React from "react";

type Props = {
  onReset: () => void;
};

// このコンポーネントはpropsが変わらない限り再レンダリングされない
function ResetButton({ onReset }: Props) {
  console.log("子コンポーネント 'ResetButton' がレンダリングされました");
  return <button onClick={onReset}>Reset</button>;
}

// React.memoでラップして、propsが変更されない限り再レンダリングを防ぐ
export const MemoizedResetButton = React.memo(ResetButton);
